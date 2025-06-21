
import React from 'react';
import { Calendar, ChevronRight, Shield, Heart, Users, Award, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="section-padding bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <Badge className="bg-teal-50 text-teal-700 border-teal-200 mx-auto lg:mx-0">
                <Award className="h-4 w-4 mr-1" />
                12+ Years Experience • 10,000+ Patients Treated
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Dr. Prathusha Nerella
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gradient mt-2 font-medium">
                  Nerella Wellness Hub
                </span>
                <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gradient mt-2 lg:mt-4 font-medium">
                  Holistic Healing | Compassionate Care | Modern Wellness
                </span>
              </h1>
              <div className="space-y-3 text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                <p className="flex items-center justify-center lg:justify-start">
                  <Shield className="h-5 w-5 mr-3 text-teal-600 flex-shrink-0" /> 
                  Comprehensive Health & Wellness Solutions
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <Heart className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" /> 
                  Personalized Care for Mind, Body & Spirit
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <Users className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" /> 
                  Expert Medical Team with Holistic Approach
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="btn-wellness w-full sm:w-auto"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="btn-wellness-outline w-full sm:w-auto"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-600">12+</div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600">10K+</div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">98%</div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up order-1 lg:order-2">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/55df00ec-e4d5-4b7c-b708-5ddfb1132566.png"
                alt="Dr. Prathusha Nerella - Nerella Wellness Hub"
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 wellness-gradient opacity-10 rounded-2xl transform rotate-2 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
