import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600"
            alt="Location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Location</h1>
          <p className="text-xl text-gray-200">Find us in the heart of the city</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5449852642877!2d80.6177935!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff71d239d97%3A0x5e8c1e93d4c7c3a5!2sKrishnalanka%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1702995887643!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                Near Main Bus Stand<br />
                Krishnalanka, Vijayawada<br />
                Andhra Pradesh
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                +91 9553401594
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                info@varshithgrand.com<br />
                reservations@varshithgrand.com
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reception</h3>
              <p className="text-gray-600">
                24 Hours<br />
                Always Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nearby Landmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sri Durga Malleswara Swamy Varla Devasthanam</h3>
              <p className="text-gray-600 mb-2">Nearby</p>
              <p className="text-sm text-gray-500">Famous hilltop temple and spiritual center</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kondapalli</h3>
              <p className="text-gray-600 mb-2">Nearly 30 minutes from the hotel</p>
              <p className="text-sm text-gray-500">Green space for relaxation and recreation</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Railway Station</h3>
              <p className="text-gray-600 mb-2">10 minutes walk</p>
              <p className="text-sm text-gray-500">Regional and national rail connections</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bhavani Island</h3>
              <p className="text-gray-600 mb-2">45 minutes drive</p>
              <p className="text-sm text-gray-500">Easy access via highway or shuttle service</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Museum District</h3>
              <p className="text-gray-600 mb-2">15 minutes walk</p>
              <p className="text-sm text-gray-500">Art galleries and cultural attractions</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Convention Center</h3>
              <p className="text-gray-600 mb-2">20 minutes drive</p>
              <p className="text-sm text-gray-500">Perfect for business travelers and conferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Getting Here</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're conveniently located near the Main Bus Stand in Krishnalanka, Vijayawada
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <p className="mb-4">
              <strong>From Railway Station:</strong> Just a 10-minute walk from Vijayawada Railway Station. 
              Auto-rickshaws and taxis are readily available.
            </p>
            <p className="mb-4">
              <strong>From Bus Stand:</strong> Located near the Main Bus Stand, easily accessible on foot.
            </p>
            <p>
              <strong>Parking:</strong> Complimentary parking available for all guests.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
