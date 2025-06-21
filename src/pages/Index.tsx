
import React, { useState } from 'react';
import { Calendar, Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import VideoReelsSection from '@/components/sections/VideoReelsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

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
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 medical-gradient rounded-full flex items-center justify-center">
                <Stethoscope className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">Dr. Prathusha Nerella</h1>
                <p className="text-xs lg:text-sm text-gray-600">MBBS, MD - Diabetes & Lifestyle Expert</p>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-8">
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
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection scrollToSection={scrollToSection} />
      <VideoReelsSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © 2024 Dr. Prathusha Nerella. All rights reserved. | Designed for comprehensive healthcare excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
