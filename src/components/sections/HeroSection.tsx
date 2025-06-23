
import React from 'react';
import { Calendar, ChevronRight, Shield, Heart, Users, Award, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="section-padding bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-pink-50 text-pink-700 border-pink-200">
                  <Award className="h-4 w-4 mr-2" />
                  12+ Years Experience • 10,000+ Patients Treated
                </Badge>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Dr. Prathusha Nerella
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gradient font-semibold">
                  Nerella Wellness Hub
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gradient font-medium">
                  Holistic Healing | Compassionate Care | Modern Wellness
                </p>
              </div>
              <div className="space-y-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Shield className="h-6 w-6 text-pink-600 flex-shrink-0" /> 
                  <span>Comprehensive Health & Wellness Solutions</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Heart className="h-6 w-6 text-rose-500 flex-shrink-0" /> 
                  <span>Personalized Care for Mind, Body & Spirit</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Users className="h-6 w-6 text-purple-600 flex-shrink-0" /> 
                  <span>Expert Medical Team with Holistic Approach</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="btn-wellness w-full sm:w-auto px-8 py-4 text-lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="btn-wellness-outline w-full sm:w-auto px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-pink-600 mb-2">12+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-rose-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up order-1 lg:order-2">
            <div className="relative z-10 flex justify-center">
              <img
                src="/lovable-uploads/55df00ec-e4d5-4b7c-b708-5ddfb1132566.png"
                alt="Dr. Prathusha Nerella - Nerella Wellness Hub"
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl shadow-2xl"
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
