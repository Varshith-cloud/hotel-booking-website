import { useState } from 'react';
import { X, Banknote, CheckCircle2, Smartphone } from 'lucide-react';
import type { RoomDetails, Booking } from '@/shared/types';

interface BookingModalProps {
  room: RoomDetails;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ room, isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    paymentMethod: 'pay_at_hotel' as 'online' | 'pay_at_hotel',
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const calculateNights = () => {
    if (!formData.checkInDate || !formData.checkOutDate) return 0;
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalPrice = nights * room.price_per_night;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBooking();
  };

  const createBooking = async () => {
    setLoading(true);
    setError('');

    try {
      // Check availability first
      const availabilityRes = await fetch('/api/check-availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: room.id,
          checkIn: formData.checkInDate,
          checkOut: formData.checkOutDate
        })
      });
      
      const availabilityData = await availabilityRes.json();
      
      if (!availabilityData.available) {
        setError('Sorry, this room is not available for the selected dates.');
        setLoading(false);
        return;
      }

      // Create booking
      const bookingData: Booking = {
        roomId: room.id,
        guestName: formData.guestName,
        guestEmail: formData.guestEmail,
        guestPhone: formData.guestPhone,
        checkInDate: formData.checkInDate,
        checkOutDate: formData.checkOutDate,
        numberOfGuests: formData.numberOfGuests,
        totalPrice,
        paymentMethod: formData.paymentMethod,
        specialRequests: formData.specialRequests
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create booking');
      }

      setStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      guestName: '',
      guestEmail: '',
      guestPhone: '',
      checkInDate: '',
      checkOutDate: '',
      numberOfGuests: 1,
      paymentMethod: 'pay_at_hotel',
      specialRequests: ''
    });
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {step === 'form' ? (
          <>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Book {room.name}</h2>
              <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.guestEmail}
                    onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.guestPhone}
                    onChange={(e) => setFormData({ ...formData, guestPhone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    value={formData.numberOfGuests}
                    onChange={(e) => setFormData({ ...formData, numberOfGuests: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({ length: room.max_occupancy }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.checkInDate}
                    onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                  <input
                    type="date"
                    required
                    min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                    value={formData.checkOutDate}
                    onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method (at Checkout)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'pay_at_hotel' })}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      formData.paymentMethod === 'pay_at_hotel'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Banknote className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <p className="font-semibold">Pay at Hotel</p>
                    <p className="text-xs text-gray-500 mt-1">Cash/Card at checkout</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'online' })}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      formData.paymentMethod === 'online'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Smartphone className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <p className="font-semibold">Pay Online at Checkout</p>
                    <p className="text-xs text-gray-500 mt-1">PhonePe/Google Pay QR at checkout</p>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              {nights > 0 && (
                <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">₹{room.price_per_night.toLocaleString('en-IN')} × {nights} nights</span>
                    <span className="font-semibold">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-blue-200">
                    <span>Total</span>
                    <span className="text-blue-600">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {formData.paymentMethod === 'online' 
                      ? 'Payment via QR code will be collected at checkout'
                      : 'Payment will be collected at checkout'}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || nights <= 0}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-2">
              Your room reservation has been confirmed.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6 text-left">
              <p className="text-sm font-semibold text-blue-900 mb-2">Payment Details</p>
              <p className="text-sm text-blue-800">
                {formData.paymentMethod === 'online' 
                  ? `You can pay ₹${totalPrice.toLocaleString('en-IN')} at checkout by scanning a QR code with PhonePe or Google Pay.`
                  : `You can pay ₹${totalPrice.toLocaleString('en-IN')} at checkout with cash or card.`}
              </p>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              A confirmation email has been sent to {formData.guestEmail}
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
