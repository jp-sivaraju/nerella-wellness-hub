
import React from 'react';
import { Heart, Calendar, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NavigationSection = ({ scrollToSection }) => {
  return (
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
            <Button 
              className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection && scrollToSection('contact')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationSection;
