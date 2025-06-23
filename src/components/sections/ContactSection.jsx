
import React from 'react';
import { Calendar, Phone, Mail, MapPin, ArrowRight, Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-white/10 text-white border border-white/20 px-6 py-3 mb-8 backdrop-blur-sm">
            <Phone className="h-4 w-4 mr-2" />
            Get in Touch
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Your Health?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Take the first step towards optimal wellness. Dr. Prathusha is currently accepting new patients at 
            Ramakrishna Math, Hyderabad, and is ready to guide you on your health journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Current Practice Location</h3>
                    <p className="text-gray-300">Primary consultation center</p>
                  </div>
                </div>
                <div className="text-gray-300">
                  <p className="font-medium">Ramakrishna Math</p>
                  <p>Hyderabad, Telangana</p>
                  <p className="text-sm text-teal-400 mt-2">Comprehensive healthcare services available</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Phone Consultation</h3>
                  <p className="text-gray-300 mb-2">+91 98765 43210</p>
                  <p className="text-sm text-emerald-400">Available 9 AM - 6 PM</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Email Support</h3>
                  <p className="text-gray-300 mb-2">info@nerellawellness.com</p>
                  <p className="text-sm text-pink-400">24/7 Response</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="font-bold text-white mb-4 text-lg">Follow Dr. Prathusha</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://www.instagram.com/drprathushanerella" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:scale-105 transition-transform text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a href="https://www.youtube.com/@pravehaintegrative" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-red-600 rounded-xl hover:scale-105 transition-transform text-white">
                  <Youtube className="h-5 w-5" />
                  <span className="font-medium">YouTube</span>
                </a>
                <a href="https://www.facebook.com/drprathushanerella/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-blue-600 rounded-xl hover:scale-105 transition-transform text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a href="https://www.threads.com/@drprathushanerella" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-gray-700 rounded-xl hover:scale-105 transition-transform text-white">
                  <div className="h-5 w-5 font-bold">@</div>
                  <span className="font-medium">Threads</span>
                </a>
              </div>
            </div>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-3xl text-gray-900">Book Your Consultation</CardTitle>
              <p className="text-gray-600 text-lg">Schedule your appointment with Dr. Prathusha and start your wellness journey today.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-white/90"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-white/90"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-white/90"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-white/90"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-white/90">
                  <option>Select a service</option>
                  <option>Diabetes Management</option>
                  <option>Mental Wellness & Positive Psychology</option>
                  <option>Integrative Lifestyle Medicine</option>
                  <option>General Practice & Family Medicine</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none bg-white/90"
                  placeholder="Tell us about your health concerns or questions..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
