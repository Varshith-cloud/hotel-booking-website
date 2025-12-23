import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

// Get all rooms
app.get("/api/rooms", async (c) => {
  const db = c.env.DB;
  const rooms = await db.prepare(`
    SELECT id, name, slug, description, bed_type, max_occupancy, price_per_night, image_url, is_available
    FROM rooms
    WHERE is_available = 1
    ORDER BY price_per_night ASC
  `).all();
  
  return c.json(rooms.results);
});

// Get room by slug with amenities and images
app.get("/api/rooms/:slug", async (c) => {
  const db = c.env.DB;
  const slug = c.req.param("slug");
  
  const room = await db.prepare(`
    SELECT id, name, slug, description, bed_type, max_occupancy, price_per_night, image_url, is_available
    FROM rooms
    WHERE slug = ? AND is_available = 1
  `).bind(slug).first();
  
  if (!room) {
    return c.json({ error: "Room not found" }, 404);
  }
  
  const images = await db.prepare(`
    SELECT image_url
    FROM room_images
    WHERE room_id = ?
    ORDER BY display_order ASC
  `).bind(room.id).all();
  
  const amenities = await db.prepare(`
    SELECT a.name, a.icon, a.description
    FROM amenities a
    JOIN room_amenities ra ON a.id = ra.amenity_id
    WHERE ra.room_id = ?
  `).bind(room.id).all();
  
  return c.json({
    ...room,
    images: images.results.map((img: any) => img.image_url),
    amenities: amenities.results
  });
});

// Check availability
const availabilitySchema = z.object({
  roomId: z.number(),
  checkIn: z.string(),
  checkOut: z.string()
});

app.post("/api/check-availability", zValidator("json", availabilitySchema), async (c) => {
  const db = c.env.DB;
  const { roomId, checkIn, checkOut } = c.req.valid("json");
  
  // Check for overlapping bookings
  const conflicts = await db.prepare(`
    SELECT COUNT(*) as count
    FROM bookings
    WHERE room_id = ?
    AND booking_status != 'cancelled'
    AND (
      (check_in_date <= ? AND check_out_date > ?)
      OR (check_in_date < ? AND check_out_date >= ?)
      OR (check_in_date >= ? AND check_out_date <= ?)
    )
  `).bind(roomId, checkIn, checkIn, checkOut, checkOut, checkIn, checkOut).first();
  
  return c.json({ available: conflicts ? (conflicts.count as number) === 0 : true });
});

// Create booking
const bookingSchema = z.object({
  roomId: z.number(),
  guestName: z.string().min(2),
  guestEmail: z.string().email(),
  guestPhone: z.string().min(10),
  checkInDate: z.string(),
  checkOutDate: z.string(),
  numberOfGuests: z.number().min(1),
  totalPrice: z.number().min(0),
  paymentMethod: z.enum(["online", "pay_at_hotel"]),
  specialRequests: z.string().optional()
});

app.post("/api/bookings", zValidator("json", bookingSchema), async (c) => {
  const db = c.env.DB;
  const data = c.req.valid("json");
  
  // Check availability again before booking
  const conflicts = await db.prepare(`
    SELECT COUNT(*) as count
    FROM bookings
    WHERE room_id = ?
    AND booking_status != 'cancelled'
    AND (
      (check_in_date <= ? AND check_out_date > ?)
      OR (check_in_date < ? AND check_out_date >= ?)
      OR (check_in_date >= ? AND check_out_date <= ?)
    )
  `).bind(
    data.roomId, 
    data.checkInDate, data.checkInDate,
    data.checkOutDate, data.checkOutDate,
    data.checkInDate, data.checkOutDate
  ).first();
  
  if (conflicts && (conflicts.count as number) > 0) {
    return c.json({ error: "Room is not available for selected dates" }, 400);
  }
  
  // Create booking
  const result = await db.prepare(`
    INSERT INTO bookings (
      room_id, guest_name, guest_email, guest_phone,
      check_in_date, check_out_date, number_of_guests,
      total_price, payment_method, payment_status,
      booking_status, special_requests
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    data.roomId,
    data.guestName,
    data.guestEmail,
    data.guestPhone,
    data.checkInDate,
    data.checkOutDate,
    data.numberOfGuests,
    data.totalPrice,
    data.paymentMethod,
    data.paymentMethod === "online" ? "pending" : "pay_at_hotel",
    "confirmed",
    data.specialRequests || null
  ).run();
  
  return c.json({ 
    success: true, 
    bookingId: result.meta.last_row_id,
    message: data.paymentMethod === "online" 
      ? "Booking confirmed! Payment pending." 
      : "Booking confirmed! You can pay at the hotel during check-in."
  });
});

// Get all amenities
app.get("/api/amenities", async (c) => {
  const db = c.env.DB;
  const amenities = await db.prepare(`
    SELECT name, icon, description
    FROM amenities
    ORDER BY name ASC
  `).all();
  
  return c.json(amenities.results);
});

// Get hotel images
app.get("/api/gallery", async (c) => {
  const db = c.env.DB;
  const images = await db.prepare(`
    SELECT image_url, category, caption
    FROM hotel_images
    ORDER BY display_order ASC
  `).all();
  
  return c.json(images.results);
});

// Contact form submission
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10)
});

app.post("/api/contact", zValidator("json", contactSchema), async (c) => {
  // In a real app, this would send an email or save to database
  // For now, just return success
  return c.json({ success: true, message: "Thank you for contacting us. We'll get back to you soon!" });
});

export default app;
