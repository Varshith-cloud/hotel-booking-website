export interface Room {
  id: number;
  name: string;
  slug: string;
  description: string;
  bed_type: string;
  max_occupancy: number;
  price_per_night: number;
  image_url: string;
  is_available: boolean;
}

export interface RoomDetails extends Room {
  images: string[];
  amenities: Amenity[];
}

export interface Amenity {
  name: string;
  icon: string;
  description?: string;
}

export interface Booking {
  roomId: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  totalPrice: number;
  paymentMethod: "online" | "pay_at_hotel";
  specialRequests?: string;
}

export interface GalleryImage {
  image_url: string;
  category: string;
  caption: string;
}
