import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { XCircle, Lock, FileText } from 'lucide-react';

export default function Policies() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600"
            alt="Policies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Policies</h1>
          <p className="text-xl text-gray-200">Our terms, policies, and guidelines</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#cancellation"
              className="px-6 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors"
            >
              Cancellation Policy
            </a>
            <a
              href="#privacy"
              className="px-6 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="px-6 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Cancellation Policy */}
          <div id="cancellation" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cancellation Policy</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Online Payment Bookings</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Free cancellation up to 48 hours before check-in date</li>
                  <li>Cancellations made within 48 hours of check-in will be charged one night's accommodation</li>
                  <li>No-shows will be charged the full booking amount</li>
                  <li>Refunds will be processed to the original payment method within 5-7 business days</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Pay at Hotel Bookings</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Free cancellation up to 24 hours before check-in date</li>
                  <li>Cancellations made within 24 hours of check-in may be charged one night's accommodation</li>
                  <li>No-shows may be charged the full booking amount</li>
                  <li>Please contact us directly to cancel your booking</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Modifications</h3>
                <p>
                  Booking modifications (dates, room type, guest count) are subject to availability. 
                  Changes must be requested at least 48 hours before check-in. Modified bookings may 
                  be subject to rate differences.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Special Circumstances</h3>
                <p>
                  In case of emergencies or unforeseen circumstances, please contact us directly. 
                  We will do our best to accommodate your situation with flexibility and understanding.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
                  <p className="text-blue-900 font-medium">
                    To cancel your booking, please contact us at +91 9553401594 or 
                    email reservations@varshithgrand.com with your booking reference number.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div id="privacy" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-sm text-gray-500">Last Updated: January 2024</p>

                <h3 className="text-xl font-bold text-gray-900">Information We Collect</h3>
                <p>
                  When you book a room at Varshith Grand, we collect personal information including your name, 
                  email address, phone number, and payment details. This information is necessary to process 
                  your reservation and provide you with our services.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">How We Use Your Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To process and confirm your booking</li>
                  <li>To communicate with you about your reservation</li>
                  <li>To provide customer support</li>
                  <li>To send booking confirmations and receipts</li>
                  <li>To improve our services and guest experience</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Data Security</h3>
                <p>
                  We implement industry-standard security measures to protect your personal information. 
                  All payment transactions are processed through secure, encrypted channels. We never store 
                  complete credit card information on our servers.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Information Sharing</h3>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  information with trusted service providers who assist us in operating our hotel and serving 
                  our guests, under strict confidentiality agreements.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Your Rights</h3>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also 
                  request a copy of the data we hold about you. To exercise these rights, please contact 
                  us at info@havenhotel.com.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Cookies</h3>
                <p>
                  Our website uses cookies to enhance your browsing experience and remember your preferences. 
                  You can adjust your browser settings to refuse cookies, though this may affect website functionality.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Contact Us</h3>
                <p>
                  If you have questions about our privacy practices, please contact us at info@varshithgrand.com 
                  or call +91 9553401594.
                </p>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div id="terms" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Terms & Conditions</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-sm text-gray-500">Last Updated: January 2024</p>

                <h3 className="text-xl font-bold text-gray-900">Booking Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All bookings are subject to availability and confirmation</li>
                  <li>Guests must be 18 years or older to make a booking</li>
                  <li>Valid government-issued ID required at check-in</li>
                  <li>Credit card may be required at check-in for incidentals</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Check-in & Check-out</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Check-in time: 3:00 PM</li>
                  <li>Check-out time: 11:00 AM</li>
                  <li>Early check-in and late check-out subject to availability</li>
                  <li>Late check-out after 2:00 PM may incur additional charges</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Payment Terms</h3>
                <p>
                  For online payment bookings, payment is processed at the time of booking. For pay at hotel 
                  bookings, payment is due at check-in. We accept major credit cards, debit cards, and cash.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Guest Conduct</h3>
                <p>
                  Guests are expected to respect hotel property and other guests. Smoking is prohibited in 
                  all rooms and indoor areas. Violations may result in additional cleaning fees. Excessive 
                  noise or disruptive behavior may result in removal from the property without refund.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Liability</h3>
                <p>
                  Varshith Grand is not liable for loss, theft, or damage to personal property. We recommend 
                  using the in-room safe for valuables. The hotel is not responsible for items left behind 
                  after check-out.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Damage Policy</h3>
                <p>
                  Guests are responsible for any damage to hotel property caused during their stay. 
                  Charges for damages will be added to the guest's account and must be paid before departure.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Force Majeure</h3>
                <p>
                  Varshith Grand shall not be liable for failure to perform obligations due to circumstances 
                  beyond our control, including but not limited to natural disasters, government actions, 
                  or other unforeseen events.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on our 
                  website and take effect immediately upon posting. Continued use of our services constitutes 
                  acceptance of modified terms.
                </p>

                <div className="bg-gray-50 border border-gray-200 p-4 mt-6 rounded-lg">
                  <p className="text-gray-900 font-medium">
                    By making a booking, you agree to these terms and conditions. If you have any questions, 
                    please contact us before completing your reservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
