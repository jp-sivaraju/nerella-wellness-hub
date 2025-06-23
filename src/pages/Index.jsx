
import React from 'react';
import { Stethoscope, Heart, Brain, Leaf, Calendar, Clock, MapPin, Phone, Mail, Star, CheckCircle, Users, Award, Smile } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogSection from "@/components/sections/BlogSection";

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Diabetes Management",
      description: "Comprehensive care for Type 1 and Type 2 diabetes with personalized treatment plans and lifestyle guidance.",
      features: ["Blood sugar monitoring", "Medication management", "Nutritional counseling", "Lifestyle coaching"]
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Holistic approach to mental health combining positive psychology with evidence-based treatments.",
      features: ["Stress management", "Anxiety support", "Mindfulness training", "Cognitive behavioral therapy"]
    },
    {
      icon: Leaf,
      title: "Lifestyle Medicine",
      description: "Preventive healthcare focusing on nutrition, exercise, stress management, and healthy living habits.",
      features: ["Nutrition planning", "Exercise programs", "Sleep optimization", "Preventive care"]
    },
    {
      icon: Stethoscope,
      title: "General Practice",
      description: "Complete primary healthcare services for individuals and families with a focus on preventive care.",
      features: ["Regular check-ups", "Health screenings", "Vaccinations", "Family medicine"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Diabetes Management",
      rating: 5,
      text: "Dr. Prathusha's holistic approach transformed my diabetes management. I feel more energetic and confident about my health than ever before."
    },
    {
      name: "Rajesh Kumar",
      condition: "Mental Wellness",
      rating: 5,
      text: "The positive psychology techniques I learned here helped me overcome anxiety and find balance in my life. Truly life-changing experience."
    },
    {
      name: "Anitha Reddy",
      condition: "Lifestyle Medicine",
      rating: 5,
      text: "The personalized nutrition and lifestyle plan helped me lose weight and improve my overall health. Professional and caring service."
    }
  ];

  const stats = [
    { icon: Users, number: "2000+", label: "Patients Treated" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Smile, number: "98%", label: "Patient Satisfaction" },
    { icon: Heart, number: "24/7", label: "Care Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Nerella Wellness Hub</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Holistic Healthcare Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">About</a>
              <a href="#blog" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Contact</a>
              <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 border-teal-200 px-4 py-2">
                  🌿 Holistic Healthcare Approach
                </Badge>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Wellness</span> Starts Here
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Experience personalized, compassionate healthcare that combines modern medicine with holistic wellness practices. Dr. Prathusha Nerella brings expertise in diabetes management, mental wellness, and lifestyle medicine.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto">
                      <stat.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-100 to-blue-100">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face"
                  alt="Dr. Prathusha Nerella"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 border-teal-200 px-4 py-2 mb-6">
              🏥 Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide integrated healthcare services that address your physical, mental, and emotional well-being through evidence-based treatments and personalized care plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-gray-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto font-medium">
                    Learn more about {service.title.toLowerCase()} →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop"
                  alt="Dr. Prathusha Nerella in consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white text-teal-700 hover:bg-teal-50 border-teal-200 px-4 py-2">
                  👩‍⚕️ Meet Dr. Prathusha Nerella
                </Badge>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  Passionate About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Well-being</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 15 years of experience in healthcare, Dr. Prathusha Nerella combines traditional medical expertise with modern holistic approaches to provide comprehensive patient care.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Specializations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Diabetes Management", "Positive Psychology", "Lifestyle Medicine", "Preventive Care", "Mental Wellness", "Holistic Health"].map((spec, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <blockquote className="text-gray-700 italic">
                    "I believe in treating the whole person, not just the symptoms. Every patient deserves personalized care that addresses their unique needs and circumstances."
                  </blockquote>
                  <cite className="text-teal-600 font-medium mt-2 block">- Dr. Prathusha Nerella</cite>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 border-teal-200 px-4 py-2 mb-6">
              💬 Patient Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from patients who have transformed their health and well-being with our comprehensive care approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-teal-600">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="bg-white text-teal-700 hover:bg-teal-50 border-teal-200 px-4 py-2 mb-6">
              📞 Get in Touch
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards better health. Contact us today to schedule your consultation and discover how we can help you achieve your wellness goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-teal-600">Available 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@nerellawellness.com</p>
                    <p className="text-sm text-teal-600">24/7 Response</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4 sm:col-span-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">123 Wellness Street, Banjara Hills</p>
                    <p className="text-gray-600">Hyderabad, Telangana 500034</p>
                    <p className="text-sm text-teal-600">Free parking available</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Book Your Appointment</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors">
                    <option>Select a service</option>
                    <option>Diabetes Management</option>
                    <option>Mental Wellness</option>
                    <option>Lifestyle Medicine</option>
                    <option>General Practice</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your health concerns or questions..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nerella Wellness Hub</h3>
                  <p className="text-gray-400">Holistic Healthcare Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Dedicated to providing comprehensive, compassionate healthcare that addresses your physical, mental, and emotional well-being.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@nerellawellness.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>123 Wellness Street, Banjara Hills<br />Hyderabad, Telangana 500034</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nerella Wellness Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
