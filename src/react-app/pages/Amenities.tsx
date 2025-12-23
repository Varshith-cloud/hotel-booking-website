import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Amenity } from '@/shared/types';

export default function Amenities() {
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/amenities')
      .then(res => res.json())
      .then(data => {
        setAmenities(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load amenities:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1600"
            alt="Hotel Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Amenities</h1>
          <p className="text-xl text-gray-200">Everything you need for a comfortable stay</p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotel Facilities</h2>
                <p className="text-xl text-gray-600">
                  Enjoy world-class amenities designed for your comfort and convenience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {amenities.map((amenity, index) => {
                  const IconComponent = (LucideIcons as any)[amenity.icon] || LucideIcons.CheckCircle;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.name}</h3>
                          <p className="text-gray-600">{amenity.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-3">✓</span>
                  Business center with computers and printers
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-3">✓</span>
                  Meeting rooms available for booking
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-3">✓</span>
                  High-speed Wi-Fi throughout the property
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-3">✓</span>
                  Fax and photocopying services
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guest Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-3">✓</span>
                  24-hour front desk assistance
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-3">✓</span>
                  Luggage storage available
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-3">✓</span>
                  Laundry and dry cleaning services
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-3">✓</span>
                  Tour and ticket assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenity */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">All Amenities Included</h2>
          <p className="text-xl text-blue-100 mb-8">
            No hidden fees. All amenities are included in your room rate.
          </p>
        </div>
      </section>
    </div>
  );
}
