
import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Schedule Your Consultation</h2>
          <p className="text-lg text-gray-600">Get in touch with us to begin your wellness journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="professional-card p-8">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Please describe your health concerns or appointment preferences..."
                  />
                </div>
                <Button type="submit" className="w-full btn-wellness">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="professional-card p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Available for emergencies 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="professional-card p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@nerellawellness.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="professional-card p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">Ramakrishna Math, Hyderabad</p>
                    <p className="text-sm text-gray-500">Telangana, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="professional-card p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
