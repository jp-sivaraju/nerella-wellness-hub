
import React from 'react';
import { Calendar, Phone, Shield, Heart, Brain, Leaf, ArrowRight, Sparkles, Users, Award, Smile } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = ({ scrollToSection }) => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Patients Treated", description: "Lives transformed through holistic care" },
    { icon: Award, number: "12+", label: "Years Experience", description: "Expertise in integrated healthcare" },
    { icon: Smile, number: "98%", label: "Patient Satisfaction", description: "Consistently excellent care ratings" },
    { icon: Heart, number: "24/7", label: "Care Support", description: "Always available for urgent needs" }
  ];

  return (
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
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => scrollToSection && scrollToSection('contact')}
                >
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
  );
};

export default HeroSection;
