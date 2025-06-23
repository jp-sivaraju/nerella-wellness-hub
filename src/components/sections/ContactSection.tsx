
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Calendar, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Consultation scheduled:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: '',
        urgency: 'normal'
      });
    }, 5000);
  };

  const services = [
    'General Medicine Consultation',
    'Diabetes Management & Care',
    'Lifestyle Medicine Counseling',
    'Mental Wellness & Psychology',
    'Positive Psychology Session',
    'Holistic Health Assessment',
    'Physiotherapy Consultation',
    'Preventive Health Checkup',
    'Nutrition & Diet Planning',
    'Stress Management Program'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
    '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Take the first step towards better health. Book your personalized consultation with Dr. Prathusha Nerella
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="professional-card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center lg:text-left">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Direct Line</p>
                    <a href="tel:+919876543210" className="text-teal-600 hover:text-teal-700 font-medium text-lg">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:info@nerellawellness.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      info@nerellawellness.com
                    </a>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Clinic Location</p>
                    <p className="text-gray-600">Ramakrishna Math, Hyderabad</p>
                    <p className="text-sm text-gray-500">Easy parking available</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="professional-card p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-3 text-teal-600" />
                Consultation Hours
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800">Monday - Friday</span>
                  <span className="text-teal-600 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-800">Saturday</span>
                  <span className="text-teal-600 font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-800">Sunday</span>
                  <span className="text-orange-600 font-semibold">Emergency Only</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Consultation Booking Form */}
          <Card className="professional-card p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consultation Scheduled!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for booking with us. We'll contact you within 2 hours to confirm your appointment details.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
                  <strong>What's Next?</strong><br />
                  • You'll receive a confirmation call<br />
                  • Appointment reminder via SMS<br />
                  • Pre-consultation health questionnaire
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Book Your Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <User className="h-4 w-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Phone className="h-4 w-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Consultation Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    >
                      <option value="">Select consultation type</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Clock className="h-4 w-4 inline mr-2" />
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    >
                      <option value="normal">Normal (within 7 days)</option>
                      <option value="priority">Priority (within 3 days)</option>
                      <option value="urgent">Urgent (within 24 hours)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      Health Concerns & Questions
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Please describe your health concerns, symptoms, or questions you'd like to discuss during the consultation"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-wellness py-4 text-lg"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Scheduling Consultation...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 mr-2" />
                        Schedule Consultation
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By scheduling, you agree to our terms of service and privacy policy. 
                    Consultation fees will be discussed during confirmation call.
                  </p>
                </form>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
