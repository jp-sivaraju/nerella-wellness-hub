
import React from 'react';
import { Stethoscope, Heart, Brain, Leaf, Calendar, Clock, MapPin, Phone, Mail, Star, CheckCircle, Users, Award, Smile, Instagram, Youtube, Facebook, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogSection from "@/components/sections/BlogSection";

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Diabetes Management",
      description: "Comprehensive diabetes care combining medical expertise with holistic lifestyle approaches for optimal blood sugar control.",
      features: ["Advanced glucose monitoring", "Personalized medication plans", "Nutritional counseling", "Lifestyle modification"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "Mental Wellness & Positive Psychology",
      description: "Evidence-based mental health care integrating positive psychology principles for complete emotional well-being.",
      features: ["Stress management techniques", "Anxiety & depression support", "Mindfulness & meditation", "Cognitive behavioral therapy"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Leaf,
      title: "Integrative Lifestyle Medicine",
      description: "Holistic preventive healthcare focusing on nutrition, exercise, sleep optimization, and sustainable healthy habits.",
      features: ["Personalized nutrition plans", "Exercise prescriptions", "Sleep optimization", "Preventive health screening"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Stethoscope,
      title: "General Practice & Family Medicine",
      description: "Comprehensive primary healthcare for individuals and families with emphasis on preventive care and early intervention.",
      features: ["Complete health assessments", "Chronic disease management", "Family health planning", "Vaccination programs"],
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Diabetes Management",
      rating: 5,
      text: "Dr. Prathusha's integrated approach to diabetes care has been life-changing. Her combination of medical expertise and holistic wellness strategies helped me achieve better blood sugar control than I've had in years. The positive psychology techniques she taught me transformed not just my health, but my entire outlook on life.",
      location: "Hyderabad"
    },
    {
      name: "Rajesh Kumar",
      condition: "Mental Wellness",
      rating: 5,
      text: "After struggling with anxiety for years, Dr. Prathusha's positive psychology approach gave me the tools I needed to thrive. Her compassionate care and evidence-based techniques helped me build resilience and find genuine happiness. I'm grateful for her holistic approach to mental health.",
      location: "Secunderabad"
    },
    {
      name: "Anitha Reddy",
      condition: "Lifestyle Medicine",
      rating: 5,
      text: "The personalized lifestyle medicine program designed by Dr. Prathusha completely transformed my health. Her scientific approach to nutrition and wellness helped me lose weight sustainably and improve my energy levels. She truly practices what she preaches about holistic health.",
      location: "Banjara Hills"
    }
  ];

  const stats = [
    { icon: Users, number: "10,000+", label: "Patients Treated", description: "Lives transformed through holistic care" },
    { icon: Award, number: "12+", label: "Years Experience", description: "Expertise in integrated healthcare" },
    { icon: Smile, number: "98%", label: "Patient Satisfaction", description: "Consistently excellent care ratings" },
    { icon: Heart, number: "24/7", label: "Care Support", description: "Always available for urgent needs" }
  ];

  const achievements = [
    "MD General Medicine - Narayana Medical College",
    "Certified in Neuro Linguistic Programming",
    "Former Senior Consultant - MediCiti Institute",
    "Former Consultant - Apollo Clinic",
    "Currently practicing at Ramakrishna Math Hyderabad",
    "Expert in Diabetes & Lifestyle Medicine"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-200/30 to-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Modern Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Nerella Wellness Hub</h1>
                <p className="text-sm text-gray-600 font-medium">Dr. Prathusha Nerella • Holistic Healthcare</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#blog" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="flex justify-center lg:justify-start">
                  <Badge className="bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 border border-teal-200 px-6 py-3 text-sm font-medium shadow-lg">
                    <Sparkles className="h-4 w-4 mr-2" />
                    12+ Years Excellence • 10,000+ Lives Transformed
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Dr. Prathusha</span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Nerella</span>
                </h1>
                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700">
                    Integrative Healthcare Specialist
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Combining modern medicine with holistic wellness approaches for comprehensive healthcare that treats the whole person, not just symptoms.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <Shield className="h-6 w-6 text-teal-600" />
                    <span className="text-gray-700 font-medium">Diabetes Management Expert</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <Heart className="h-6 w-6 text-red-500" />
                    <span className="text-gray-700 font-medium">Positive Psychology Certified</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <Brain className="h-6 w-6 text-purple-600" />
                    <span className="text-gray-700 font-medium">Mental Wellness Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <Leaf className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 font-medium">Lifestyle Medicine Pioneer</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg backdrop-blur-sm bg-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-gray-200/50">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="relative">
                  <img
                    src="/lovable-uploads/55df00ec-e4d5-4b7c-b708-5ddfb1132566.png"
                    alt="Dr. Prathusha Nerella - Leading Healthcare Specialist"
                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Available Today</span>
                    <p className="text-xs text-gray-600">Ramakrishna Math, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 border border-teal-200 px-6 py-3 mb-8">
              <Stethoscope className="h-4 w-4 mr-2" />
              Comprehensive Healthcare Services
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Integrated Wellness</span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dr. Prathusha Nerella's comprehensive approach combines evidence-based medicine with holistic wellness practices, 
              ensuring personalized care that addresses your physical, mental, and emotional well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto font-semibold group/btn">
                    Learn more about {service.title.toLowerCase()}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop"
                  alt="Dr. Prathusha Nerella - Professional Healthcare"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Award className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">MD</div>
                  <div className="text-sm text-gray-600">General Medicine</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 px-6 py-3">
                  <Users className="h-4 w-4 mr-2" />
                  Meet Dr. Prathusha Nerella
                </Badge>
                <h2 className="text-4xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Passionate About</span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Your Wellness</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 12 years of dedicated experience in healthcare, Dr. Prathusha Nerella has established herself 
                  as a pioneer in integrative medicine, combining traditional medical expertise with innovative holistic approaches.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Professional Journey & Achievements</h3>
                <div className="grid grid-cols-1 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                      <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100 shadow-xl">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "My philosophy centers on treating the whole person, not just symptoms. I believe in empowering patients 
                  with knowledge and tools for sustainable wellness, combining the best of modern medicine with time-tested 
                  holistic approaches."
                </blockquote>
                <cite className="text-teal-600 font-bold mt-4 block text-lg">- Dr. Prathusha Nerella</cite>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/drprathushanerella" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.youtube.com/@pravehaintegrative" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/drprathushanerella/" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 px-6 py-3 mb-8">
              <Star className="h-4 w-4 mr-2" />
              Patient Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Real Results,</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Real Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how Dr. Prathusha's comprehensive care approach has transformed lives and helped patients achieve 
              optimal health and wellness through personalized treatment plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="border-t pt-6">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-teal-600 font-medium">{testimonial.condition}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
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
      <section id="contact" className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Nerella Wellness Hub</h3>
                  <p className="text-gray-400">Dr. Prathusha Nerella • Holistic Healthcare Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Dedicated to providing comprehensive, compassionate healthcare that addresses your physical, 
                mental, and emotional well-being through evidence-based medicine and holistic approaches.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Dr. Prathusha</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Health Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact & Location</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
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
                  <span>Ramakrishna Math<br />Hyderabad, Telangana</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nerella Wellness Hub. All rights reserved. • Dr. Prathusha Nerella, MD</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
