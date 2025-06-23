
import React, { useState } from 'react';
import { Calendar, Phone, Star, Play, ChevronRight, Heart, Users, Award, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const services = [
    {
      title: "Diabetes Management",
      description: "Comprehensive diabetes care with personalized treatment plans",
      icon: Heart,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Lifestyle Consultation",
      description: "Expert guidance for healthy living and lifestyle modifications",
      icon: Users,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Positive Psychology",
      description: "Mental wellness and positive mindset development",
      icon: Award,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Holistic Health",
      description: "Complete mind-body wellness approach to healthcare",
      icon: Heart,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Hyderabad",
      rating: 5,
      text: "Dr. Prathusha's holistic approach helped me manage my diabetes effectively. Her positive psychology sessions transformed my outlook towards health.",
      condition: "Diabetes Management"
    },
    {
      name: "Priya Sharma",
      location: "Secunderabad",
      rating: 5,
      text: "Excellent doctor with deep knowledge. She doesn't just treat symptoms but addresses root causes. Highly recommend for lifestyle diseases.",
      condition: "Lifestyle Consultation"
    },
    {
      name: "Venkat Reddy",
      location: "Madhapur",
      rating: 5,
      text: "Best diabetes specialist in Hyderabad. Her personalized treatment plan and continuous support helped me achieve better blood sugar control.",
      condition: "Diabetes Care"
    }
  ];

  const videoReels = [
    {
      id: 1,
      title: "Diabetes Management Tips",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop",
      url: "https://www.instagram.com/reel/DKHnfO5SXC5/"
    },
    {
      id: 2,
      title: "Healthy Lifestyle Habits",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      url: "https://www.instagram.com/reel/DKw1A5sS0xc/"
    },
    {
      id: 3,
      title: "Positive Psychology Tips",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=600&fit=crop",
      url: "https://www.instagram.com/reel/DKrtOQnSDQk/"
    },
    {
      id: 4,
      title: "Holistic Health Approach",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=600&fit=crop",
      url: "https://www.instagram.com/reel/DKj_laPywpc/"
    },
    {
      id: 5,
      title: "Mind-Body Wellness",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      url: "https://www.instagram.com/reel/DKZnQRyylmh/"
    },
    {
      id: 6,
      title: "Stress Management",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=600&fit=crop",
      url: "https://www.instagram.com/reel/DKMyPI0SmJz/"
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'registration', label: 'Patient Registration' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr. Prathusha Nerella</h1>
                <p className="text-xs text-gray-600">MBBS, MD - Diabetes & Lifestyle Expert</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeTab === item.id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  12+ Years Experience • 10,000+ Patients Treated
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Dr. Prathusha Nerella
                  <span className="block text-2xl lg:text-3xl text-blue-600 mt-2">
                    MBBS, MD | Sr. General Physician
                  </span>
                </h1>
                <div className="space-y-2 text-lg text-gray-600">
                  <p className="flex items-center"><Award className="h-5 w-5 mr-2 text-blue-600" /> Diabetes & Lifestyle Expert</p>
                  <p className="flex items-center"><Heart className="h-5 w-5 mr-2 text-green-600" /> Positive Psychologist</p>
                  <p className="flex items-center"><Users className="h-5 w-5 mr-2 text-purple-600" /> Holistic Health Expert</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('services')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  View Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10K+</div>
                  <div className="text-sm text-gray-600">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=face"
                  alt="Dr. Prathusha Nerella"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl transform rotate-3 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Dr. Prathusha Nerella</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing comprehensive healthcare with a holistic approach to wellness and positive living
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Professional Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  With over 12 years of experience in general medicine and specialized expertise in diabetes management, 
                  Dr. Prathusha Nerella combines traditional medical knowledge with modern holistic approaches to provide 
                  comprehensive healthcare solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Current & Previous Experience:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Currently at Ramakrishna Math Hyderabad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Former at MediCiti Institute of Medical Sciences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Former at Apollo Clinic</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Education & Certifications:</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">• MBBS, MD - General Physician</p>
                  <p className="text-gray-700">• Studied at Narayana Medical College</p>
                  <p className="text-gray-700">• Certified by The Society of Neuro Linguistic Programming</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Diabetes Care</h4>
                <p className="text-sm text-gray-600">Specialized diabetes management and lifestyle modification</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Lifestyle Expert</h4>
                <p className="text-sm text-gray-600">Comprehensive lifestyle and wellness counseling</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Positive Psychology</h4>
                <p className="text-sm text-gray-600">Mental wellness and positive mindset development</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Holistic Health</h4>
                <p className="text-sm text-gray-600">Complete mind-body wellness approach</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services tailored to your individual needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => scrollToSection('contact')}
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Health Tips & Insights</h2>
            <p className="text-xl text-gray-600">Watch our latest health education videos</p>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videoReels.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[9/16] bg-gray-100">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button
                          onClick={() => window.open(video.url, '_blank')}
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <Play className="h-8 w-8 text-gray-900 ml-1" />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-xl text-gray-600">What our patients say about their experience</p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                        <Badge variant="secondary" className="text-xs">{testimonial.condition}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch to schedule your consultation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Ramakrishna Math, Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Consultation Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your health concerns"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                >
                  Book Consultation
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Registration Section */}
      <section id="registration" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patient Registration</h2>
            <p className="text-xl text-gray-600">Register as a new patient for personalized care</p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                  <input
                    type="number"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical History</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe any existing medical conditions, allergies, or medications you are currently taking"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your current health concerns or reason for consultation"
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
              >
                Register as Patient
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dr. Prathusha Nerella</h3>
                  <p className="text-sm text-gray-400">Healthcare Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Providing comprehensive healthcare with a holistic approach to wellness and positive living.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/drprathushanerella" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@pravehaintegrative" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/drprathushanerella/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p>📍 Ramakrishna Math, Hyderabad</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ consultation@drprathushanerella.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Prathusha Nerella. All rights reserved. | Designed for comprehensive healthcare excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
