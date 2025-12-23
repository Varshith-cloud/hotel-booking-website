import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import RoomCard from '@/react-app/components/RoomCard';
import type { Room } from '@/shared/types';

export default function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rooms')
      .then(res => res.json())
      .then(data => {
        setRooms(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load rooms:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600"
            alt="Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Rooms</h1>
          <p className="text-xl text-gray-200">Find your perfect accommodation</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Room</h2>
                <p className="text-xl text-gray-600">
                  All rooms include complimentary breakfast, Wi-Fi, and parking
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rooms.map(room => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>

              {rooms.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No rooms available at the moment.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛏️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comfortable Beds</h3>
              <p className="text-gray-600">Premium mattresses and luxury bedding for a great night's sleep</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Amenities</h3>
              <p className="text-gray-600">Smart TVs, high-speed Wi-Fi, and climate control</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧹</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Housekeeping</h3>
              <p className="text-gray-600">Fresh towels and cleaning service every day</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
