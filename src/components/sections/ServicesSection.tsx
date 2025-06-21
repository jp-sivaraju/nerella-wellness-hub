
import React from 'react';
import { Heart, Users, Award, Stethoscope } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServicesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
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

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Medical Services</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services tailored to your individual needs with evidence-based treatments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="professional-card p-6 lg:p-8 hover-lift group">
              <CardContent className="p-0 text-center space-y-4 lg:space-y-6">
                <div className="relative">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 lg:h-10 lg:w-10 ${service.color}`} />
                  </div>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{service.description}</p>
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
  );
};

export default ServicesSection;
