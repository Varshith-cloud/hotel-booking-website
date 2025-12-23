import { Link } from 'react-router';
import { Hotel, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                <Hotel className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Varshith Grand</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience comfort, luxury, and exceptional hospitality at Varshith Grand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rooms" className="text-sm hover:text-blue-400 transition-colors">
                  Rooms & Rates
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-sm hover:text-blue-400 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-blue-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm hover:text-blue-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/policies#cancellation" className="text-sm hover:text-blue-400 transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/policies#privacy" className="text-sm hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies#terms" className="text-sm hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-sm">Near Bus Stand, Krishnalanka, Vijayawada</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-blue-400" />
                <span className="text-sm">+91 9553401594</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <div className="text-sm">
                  <div>info@varshithgrand.com</div>
                  <div>reservations@varshithgrand.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Varshith Grand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
