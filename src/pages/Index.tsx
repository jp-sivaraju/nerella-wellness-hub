
import React, { useState } from 'react';
import { Calendar, Stethoscope } from 'lucide-react';
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
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 wellness-gradient rounded-full flex items-center justify-center">
                <Stethoscope className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">Nerella Wellness Hub</h1>
                <p className="text-xs lg:text-sm text-teal-600 font-medium">Holistic Healing | Compassionate Care | Modern Wellness</p>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 py-2 ${
                    activeTab === item.id 
                      ? 'text-teal-600 border-b-2 border-teal-600' 
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/patient-registration')}
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200 py-2"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 wellness-gradient rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Nerella Wellness Hub</h3>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner in holistic health and wellness. Providing compassionate care with modern medical expertise.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Subscribe to wellness tips"
                  className="w-full max-w-xs px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-teal-400 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-teal-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="tel:+919876543210" className="hover:text-teal-400 transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nerellawellness.com" className="hover:text-teal-400 transition-colors">
                    info@nerellawellness.com
                  </a>
                </li>
                <li className="text-sm">Ramakrishna Math, Hyderabad</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-300">
              © 2024 Nerella Wellness Hub. All rights reserved. | Designed for comprehensive wellness excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
