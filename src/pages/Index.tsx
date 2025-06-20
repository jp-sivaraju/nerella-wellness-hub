import React, { useState } from 'react';
import { Calendar, Phone, Star, Play, ChevronRight, Heart, Users, Award, MapPin, Instagram, Youtube, Facebook, Stethoscope, Clock, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const services = [
    {
      title: "Diabetes Management",
      description: "Comprehensive diabetes care with personalized treatment plans and continuous monitoring",
      icon: Heart,
      color: "text-blue-600"
    },
    {
      title: "Lifestyle Medicine",
      description: "Evidence-based lifestyle interventions for optimal health and disease prevention",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Positive Psychology",
      description: "Mental wellness counseling focused on building resilience and positive mindset",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Holistic Health",
      description: "Integrated approach combining traditional medicine with complementary therapies",
      icon: Stethoscope,
      color: "text-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Hyderabad",
      rating: 5,
      text: "Dr. Prathusha's holistic approach helped me manage my diabetes effectively. Her positive psychology sessions transformed my outlook towards health and life.",
      condition: "Diabetes Management",
      image: "https://images.unsplash.com/photo-1507003211169?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      location: "Secunderabad",
      rating: 5,
      text: "Excellent doctor with deep knowledge and compassionate care. She doesn't just treat symptoms but addresses root causes with lifestyle modifications.",
      condition: "Lifestyle Consultation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c0cd?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Venkat Reddy",
      location: "Madhapur",
      rating: 5,
      text: "Best diabetes specialist in Hyderabad. Her personalized treatment plan and continuous support helped me achieve better blood sugar control and overall wellness.",
      condition: "Diabetes Care",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
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
    { id: 'contact', label: 'Contact Us' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 medical-gradient rounded-full flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
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
                  className={`text-sm font-medium transition-colors duration-200 py-2 ${
                    activeTab === item.id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/patient-registration')}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                Patient Registration
              </button>
            </div>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-medical"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                  <Award className="h-4 w-4 mr-1" />
                  12+ Years Experience • 10,000+ Patients Treated
                </Badge>
                <h1 className="heading-primary">
                  Dr. Prathusha Nerella
                  <span className="block text-2xl lg:text-3xl text-gradient mt-2 font-medium">
                    MBBS, MD | Senior General Physician
                  </span>
                </h1>
                <div className="space-y-3 text-body">
                  <p className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-blue-600" /> 
                    Diabetes & Lifestyle Medicine Expert
                  </p>
                  <p className="flex items-center">
                    <Heart className="h-5 w-5 mr-3 text-red-500" /> 
                    Positive Psychology Specialist
                  </p>
                  <p className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-green-600" /> 
                    Holistic Health Practitioner
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="btn-medical"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('services')}
                  className="btn-medical-outline"
                >
                  View Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10K+</div>
                  <div className="text-sm text-gray-600 font-medium">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=face"
                  alt="Dr. Prathusha Nerella"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 medical-gradient opacity-10 rounded-2xl transform rotate-2 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">About Dr. Prathusha Nerella</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing comprehensive healthcare with a holistic approach to wellness and positive living
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="professional-card p-8 space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 medical-gradient rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Professional Excellence</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  With over 12 years of experience in general medicine and specialized expertise in diabetes management, 
                  Dr. Prathusha Nerella combines evidence-based medical knowledge with holistic approaches to provide 
                  comprehensive healthcare solutions tailored to each patient's unique needs.
                </p>
              </div>

              <div className="professional-card p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Current & Previous Experience</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Currently at Ramakrishna Math Hyderabad</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-medium">Former at MediCiti Institute of Medical Sciences</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700 font-medium">Former at Apollo Clinic</span>
                  </div>
                </div>
              </div>

              <div className="professional-card p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Education & Certifications</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium">MBBS, MD - General Physician</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium">Studied at Narayana Medical College</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium">Certified by The Society of Neuro Linguistic Programming</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Heart, title: "Diabetes Care", desc: "Specialized diabetes management and lifestyle modification", color: "bg-red-50 text-red-600" },
                { icon: Users, title: "Lifestyle Expert", desc: "Comprehensive lifestyle and wellness counseling", color: "bg-blue-50 text-blue-600" },
                { icon: Award, title: "Positive Psychology", desc: "Mental wellness and positive mindset development", color: "bg-green-50 text-green-600" },
                { icon: Stethoscope, title: "Holistic Health", desc: "Complete mind-body wellness approach", color: "bg-purple-50 text-purple-600" }
              ].map((item, index) => (
                <Card key={index} className="professional-card p-6 text-center hover-lift">
                  <div className={`w-16 h-16 ${item.color.split(' ')[0]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`h-8 w-8 ${item.color.split(' ')[1]}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services tailored to your individual needs with evidence-based treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="professional-card p-8 hover-lift group">
                <CardContent className="p-0 text-center space-y-6">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-10 w-10 ${service.color}`} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => scrollToSection('contact')}
                    className="w-full btn-medical-outline"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reels Section - Made Smaller */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Health Education Videos</h2>
            <p className="text-lg text-gray-600">Watch our latest health tips and medical insights</p>
          </div>

          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                {
                  id: 1,
                  title: "Diabetes Management Tips",
                  thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=400&fit=crop",
                  url: "https://www.instagram.com/reel/DKHnfO5SXC5/"
                },
                {
                  id: 2,
                  title: "Healthy Lifestyle Habits",
                  thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
                  url: "https://www.instagram.com/reel/DKw1A5sS0xc/"
                },
                {
                  id: 3,
                  title: "Positive Psychology Tips",
                  thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=400&fit=crop",
                  url: "https://www.instagram.com/reel/DKrtOQnSDQk/"
                },
                {
                  id: 4,
                  title: "Holistic Health Approach",
                  thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=400&fit=crop",
                  url: "https://www.instagram.com/reel/DKj_laPywpc/"
                },
                {
                  id: 5,
                  title: "Mind-Body Wellness",
                  thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
                  url: "https://www.instagram.com/reel/DKZnQRyylmh/"
                },
                {
                  id: 6,
                  title: "Stress Management",
                  thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=400&fit=crop",
                  url: "https://www.instagram.com/reel/DKMyPI0SmJz/"
                }
              ].map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <Card className="professional-card overflow-hidden hover-lift">
                    <div className="relative aspect-[3/4] bg-gray-100">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <button
                          onClick={() => window.open(video.url, '_blank')}
                          className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all"
                        >
                          <Play className="h-6 w-6 text-blue-600 ml-1" />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-semibold text-gray-900 text-sm">{video.title}</h4>
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
      <section id="testimonials" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Patient Testimonials</h2>
            <p className="text-xl text-gray-600">What our patients say about their healthcare experience</p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="professional-card p-8 h-full">
                    <CardContent className="p-0 space-y-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                          {testimonial.condition}
                        </Badge>
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
      <section id="contact" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch to schedule your consultation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="professional-card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Ramakrishna Math, Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="professional-card p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Consultation Hours</h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>By Appointment Only</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="professional-card p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your health concerns"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full btn-medical"
                >
                  Book Consultation
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 medical-gradient rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dr. Prathusha Nerella</h3>
                  <p className="text-sm text-gray-400">Healthcare Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Providing comprehensive healthcare with a holistic approach to wellness and positive living in Hyderabad.
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
                <button 
                  onClick={() => navigate('/patient-registration')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Patient Registration
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Dr. Prathusha</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a 
                  href="https://www.instagram.com/drprathushanerella" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:scale-105 transition-transform"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a 
                  href="https://www.youtube.com/@pravehaintegrative" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-red-600 rounded-lg hover:scale-105 transition-transform"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
                <a 
                  href="https://www.facebook.com/drprathushanerella/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg hover:scale-105 transition-transform"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a 
                  href="https://www.threads.com/@drprathushanerella" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="h-5 w-5 font-bold text-white">@</div>
                  <span className="text-sm font-medium">Threads</span>
                </a>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ramakrishna Math, Hyderabad
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 98765 43210
                </p>
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
