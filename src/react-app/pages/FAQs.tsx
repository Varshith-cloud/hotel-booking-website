import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What are your check-in and check-out times?',
    answer: 'Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability and additional charges.'
  },
  {
    question: 'Do you offer online payment or can I pay at the hotel?',
    answer: 'We offer both payment options for your convenience. You can pay online during booking with a credit or debit card, or choose to pay at the hotel during check-in. Both options are secure and offer instant booking confirmation.'
  },
  {
    question: 'Is breakfast included in the room rate?',
    answer: 'Yes! All our rooms include complimentary breakfast. We offer a delicious buffet breakfast daily from 7:00 AM to 10:30 AM with a variety of hot and cold options.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'For online payments: Free cancellation up to 48 hours before check-in. For pay at hotel bookings: Free cancellation up to 24 hours before check-in. Cancellations after these periods may incur a one-night charge.'
  },
  {
    question: 'Do you provide free parking?',
    answer: 'Yes, we offer complimentary parking for all guests. We have both valet parking and self-parking options available. The parking area is secure and monitored 24/7.'
  },
  {
    question: 'Is Wi-Fi available?',
    answer: 'Yes, high-speed Wi-Fi is complimentary throughout the hotel, including all guest rooms, public areas, and meeting spaces. No password required - just connect and go!'
  },
  {
    question: 'Are pets allowed?',
    answer: 'We welcome small pets (under 25 lbs) in designated pet-friendly rooms. A pet fee of $50 per stay applies. Please inform us during booking if you plan to bring a pet.'
  },
  {
    question: 'Do you have airport shuttle service?',
    answer: 'Yes, we provide complimentary airport shuttle service. The shuttle runs every hour from 6:00 AM to 10:00 PM. Please contact the front desk to arrange pickup after booking.'
  },
  {
    question: 'What amenities are included in the rooms?',
    answer: 'All rooms include air conditioning, flat-screen TV, mini bar, safe, coffee maker, premium bedding, complimentary toiletries, and high-speed Wi-Fi. Specific amenities vary by room type.'
  },
  {
    question: 'Can I modify or change my booking?',
    answer: 'Yes, you can modify your booking dates or room type subject to availability. Please contact us at least 48 hours before your check-in date. Changes may affect your rate.'
  },
  {
    question: 'Do you offer room service?',
    answer: 'Yes, we offer 24/7 room service. Our menu features breakfast items, lunch, dinner, and late-night snacks. Additional charges apply for room service.'
  },
  {
    question: 'Is there a gym or fitness center?',
    answer: 'Yes, our fully-equipped fitness center is available 24/7 for all guests. It features cardio equipment, free weights, and workout machines.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and cash. For online bookings, credit/debit cards are required. Cash is accepted for pay at hotel option.'
  },
  {
    question: 'Do you have accessible rooms?',
    answer: 'Yes, we have ADA-compliant accessible rooms available. These rooms feature wider doorways, grab bars, roll-in showers, and other accessibility features. Please specify when booking.'
  },
  {
    question: 'Can I request early check-in or late check-out?',
    answer: 'Early check-in and late check-out are subject to availability. We do our best to accommodate requests. A half-day rate may apply for late check-out after 2:00 PM.'
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1600"
            alt="FAQs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">FAQs</h1>
          <p className="text-xl text-gray-200">Find answers to common questions</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about booking and staying at Haven Hotel
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help. Feel free to reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919553401594"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              Call Us: +91 9553401594
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
