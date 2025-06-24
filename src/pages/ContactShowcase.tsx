import React from 'react';
import { Phone, MapPin, Mail, Clock, Calendar, ArrowLeft, MessageSquare, User, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import ContactSection from '@/components/sections/ContactSection';
import PDFExportButton from '@/components/ui/pdf-export-button';

const ContactShowcase = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Direct phone consultation for immediate health concerns and follow-ups",
      details: "+91 98765 43210",
      availability: "Mon-Fri: 9 AM - 6 PM",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Consultation",
      description: "Email consultation for non-urgent health queries and medical reports",
      details: "info@nerellawellness.com",
      availability: "Response within 24 hours",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      title: "In-Person Visit",
      description: "Face-to-face consultation at our wellness center for comprehensive care",
      details: "Ramakrishna Math, Hyderabad",
      availability: "By Appointment Only",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Online Consultation",
      description: "Video consultation from the comfort of your home via secure platform",
      details: "Video Call Available",
      availability: "Flexible Scheduling",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our online form, by calling us directly, or by visiting our clinic. We recommend booking in advance to ensure availability."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid ID, insurance card (if applicable), list of current medications, and any previous medical reports or test results."
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes, we offer secure video consultations for follow-ups, medication reviews, and certain types of consultations. Initial assessments may require an in-person visit."
    },
    {
      question: "What are your consultation fees?",
      answer: "Consultation fees vary based on the type and duration of service. Please contact us for detailed pricing information. We accept various payment methods."
    },
    {
      question: "How long is a typical consultation?",
      answer: "Consultation duration varies: General medicine (30-45 min), Diabetes management (45-60 min), Lifestyle counseling (60-75 min), and Holistic health assessments (75-90 min)."
    },
    {
      question: "Do you provide emergency services?",
      answer: "While we don't provide 24/7 emergency services, we do offer urgent consultation slots for established patients. For medical emergencies, please call emergency services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <PDFExportButton 
                elementId="contact-content"
                filename="dr-prathusha-contact"
                title="Export Contact PDF"
              />
              <a href="tel:+919876543210" className="text-sm text-teal-600 font-medium hover:text-teal-700">
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </header>

      <div id="contact-content">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to take the first step towards better health? We're here to help you on your wellness journey. 
              Choose your preferred way to connect with Dr. Prathusha Nerella.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24hr</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Contact Methods</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
                <div className="text-sm text-gray-600">Days a Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Confidential</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ways to Connect</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the consultation method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="professional-card hover-lift group text-center">
                  <CardContent className="p-8 space-y-6">
                    <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900">{method.details}</p>
                      <p className="text-sm text-gray-500">{method.availability}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services and consultation process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="professional-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 font-bold text-sm">?</span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactShowcase;
