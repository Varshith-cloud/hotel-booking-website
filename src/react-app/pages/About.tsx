import { Heart, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1600"
            alt="Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Varshith Grand</h1>
          <p className="text-xl text-gray-200">Your comfort, our priority</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Varshith Grand</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Varshith Grand has been a cornerstone of hospitality excellence for over a decade. Located in the heart 
              of the city, we pride ourselves on providing guests with an unforgettable experience that combines 
              luxury, comfort, and genuine warmth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is simple: to create a home away from home for every guest who walks through our doors. 
              Whether you're traveling for business, leisure, or a special occasion, our dedicated team is committed 
              to ensuring your stay exceeds expectations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With modern amenities, elegantly designed rooms, and a prime location, Varshith Grand offers everything 
              you need for a comfortable and memorable stay. We believe that every guest deserves personalized 
              attention and exceptional service, and that's exactly what we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hospitality</h3>
              <p className="text-gray-600">
                We treat every guest like family, ensuring warmth and care in every interaction.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every service we provide, from rooms to dining.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We're proud to be part of the local community and support our neighbors.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                Count on us for consistent, dependable service 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-100">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Comfortable Rooms</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.8</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Commitment to You</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            At Haven Hotel, our experienced team is dedicated to making your stay exceptional. From the moment 
            you check in until you check out, we're here to ensure your complete satisfaction.
          </p>
          
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 italic mb-6">
                "We believe that great hospitality is about creating memorable experiences. Every detail matters, 
                from the cleanliness of our rooms to the warmth of our service. Our goal is to make you feel 
                welcome, comfortable, and valued throughout your entire stay."
              </p>
              <p className="text-gray-900 font-semibold">— The Varshith Grand Team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
