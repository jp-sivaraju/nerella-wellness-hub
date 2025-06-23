
import React from 'react';
import { Heart, Users, Award, Stethoscope, Brain, Shield, Activity, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServicesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive primary healthcare services for all ages with personalized treatment plans",
      icon: Stethoscope,
      color: "text-pink-600"
    },
    {
      title: "Diabetes Management",
      description: "Expert diabetes care with lifestyle interventions and continuous monitoring",
      icon: Heart,
      color: "text-rose-600"
    },
    {
      title: "Preventive Health",
      description: "Proactive health screenings and wellness programs to prevent illness before it starts",
      icon: Shield,
      color: "text-purple-600"
    },
    {
      title: "Mental Wellness",
      description: "Psychological support and positive psychology counseling for emotional well-being",
      icon: Brain,
      color: "text-fuchsia-600"
    },
    {
      title: "Lifestyle Medicine",
      description: "Evidence-based lifestyle interventions for optimal health and disease prevention",
      icon: Activity,
      color: "text-violet-600"
    },
    {
      title: "Holistic Health",
      description: "Integrated approach combining traditional medicine with complementary therapies",
      icon: Leaf,
      color: "text-emerald-600"
    },
    {
      title: "Physiotherapy",
      description: "Physical rehabilitation and movement therapy for injury recovery and mobility",
      icon: Users,
      color: "text-indigo-600"
    },
    {
      title: "Wellness Coaching",
      description: "Personalized guidance for achieving your health and wellness goals",
      icon: Award,
      color: "text-pink-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Wellness Services</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services designed to nurture your mind, body, and spirit
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="professional-card p-6 lg:p-8 hover-lift group text-center">
              <CardContent className="p-0 space-y-4 lg:space-y-6">
                <div className="relative">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
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
                  className="w-full btn-wellness-outline"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="btn-wellness"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
