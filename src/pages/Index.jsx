
import React, { useState } from 'react';
import { Calendar, Stethoscope, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import VideoReelsSection from '@/components/sections/VideoReelsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Wellness Blog' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center">
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-gray-900">Nerella Wellness Hub</h1>
                <p className="text-sm text-teal-600 font-medium">Dr. Prathusha Nerella • Holistic Care</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 py-2 px-1 relative ${
                    activeTab === item.id 
                      ? 'text-teal-600' 
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></div>
                  )}
                </button>
              ))}
              <button
                onClick={() => navigate('/patient-registration')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Patient Registration
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection scrollToSection={scrollToSection} />
      <VideoReelsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center">
                  <Stethoscope className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nerella Wellness Hub</h3>
                  <p className="text-teal-400 text-sm">Dr. Prathusha Nerella</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Your trusted partner in holistic health and wellness. Providing compassionate care with modern medical expertise for over 12 years.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Subscribe to wellness newsletter"
                  className="w-full max-w-sm px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
                <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-colors">About Dr. Nerella</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-teal-400 transition-colors">Patient Reviews</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-teal-400 transition-colors">Schedule Consultation</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="tel:+919876543210" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nerellawellness.com" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    info@nerellawellness.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">Ramakrishna Math, Hyderabad</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Nerella Wellness Hub. All rights reserved. | Dr. Prathusha Nerella - Comprehensive Wellness Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
