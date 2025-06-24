import React from 'react';
import { Heart, Users, Award, Stethoscope, Brain, Shield, Activity, Leaf, ArrowLeft, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import PDFExportButton from '@/components/ui/pdf-export-button';

const ServicesShowcase = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive primary healthcare services for all ages with personalized treatment plans and preventive care strategies.",
      icon: Stethoscope,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      features: ["Health Checkups", "Chronic Disease Management", "Preventive Care", "Health Screenings"],
      duration: "30-45 minutes",
      price: "₹500 - ₹800"
    },
    {
      title: "Diabetes Management",
      description: "Expert diabetes care with lifestyle interventions, medication management, and continuous monitoring for optimal blood sugar control.",
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      features: ["Blood Sugar Monitoring", "Medication Management", "Lifestyle Counseling", "Complication Prevention"],
      duration: "45-60 minutes",
      price: "₹600 - ₹1000"
    },
    {
      title: "Preventive Health",
      description: "Proactive health screenings and wellness programs designed to prevent illness before it starts through early detection.",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      features: ["Annual Health Checkups", "Cancer Screenings", "Vaccination Programs", "Risk Assessment"],
      duration: "60-90 minutes",
      price: "₹800 - ₹1500"
    },
    {
      title: "Mental Wellness",
      description: "Psychological support and positive psychology counseling for emotional well-being and mental health optimization.",
      icon: Brain,
      color: "text-fuchsia-600",
      bgColor: "bg-fuchsia-50",
      features: ["Stress Management", "Anxiety Treatment", "Depression Support", "Positive Psychology"],
      duration: "45-60 minutes",
      price: "₹700 - ₹1200"
    },
    {
      title: "Lifestyle Medicine",
      description: "Evidence-based lifestyle interventions for optimal health, disease prevention, and improved quality of life.",
      icon: Activity,
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      features: ["Nutrition Planning", "Exercise Programs", "Sleep Optimization", "Stress Reduction"],
      duration: "60-75 minutes",
      price: "₹800 - ₹1300"
    },
    {
      title: "Holistic Health",
      description: "Integrated approach combining traditional medicine with complementary therapies for complete wellness.",
      icon: Leaf,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      features: ["Mind-Body Integration", "Natural Therapies", "Energy Healing", "Wellness Coaching"],
      duration: "75-90 minutes",
      price: "₹900 - ₹1500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <PDFExportButton 
                elementId="services-content"
                filename="dr-prathusha-services"
                title="Export Services PDF"
              />
              <Button 
                onClick={() => navigate('/contact')}
                className="btn-wellness"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div id="services-content">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-gradient">Wellness Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our range of healthcare services designed to nurture your mind, body, and spirit. 
              Each service is tailored to provide personalized care that addresses your unique health needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">12+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Services Offered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="professional-card hover-lift group">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-lg font-semibold text-gray-900">{service.price}</p>
                      </div>
                      <Button 
                        className="btn-wellness-outline"
                        onClick={() => navigate('/contact')}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards better health with our comprehensive wellness services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="btn-wellness"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/')}
                className="btn-wellness-outline"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesShowcase;
