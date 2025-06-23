
import React from 'react';
import { Heart, Stethoscope, Brain, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = ({ scrollToSection }) => {
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

  return (
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
  );
};

export default ServicesSection;
