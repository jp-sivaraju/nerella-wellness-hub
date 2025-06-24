
import React from 'react';
import { Star, ArrowLeft, Quote, MapPin, Calendar, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import PDFExportButton from '@/components/ui/pdf-export-button';

const TestimonialsShowcase = () => {
  const navigate = useNavigate();

  const detailedTestimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Hyderabad",
      age: 45,
      rating: 5,
      text: "Dr. Prathusha's holistic approach helped me manage my diabetes effectively. Her positive psychology sessions transformed my outlook towards health and life. I've been able to reduce my medication dosage and feel more energetic than I have in years.",
      condition: "Type 2 Diabetes",
      treatmentDuration: "8 months",
      image: "https://images.unsplash.com/photo-1507003211169?w=100&h=100&fit=crop&crop=face",
      beforeAfter: "HbA1c reduced from 9.2% to 6.8%"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Secunderabad",
      age: 38,
      rating: 5,
      text: "Excellent doctor with deep knowledge and compassionate care. She doesn't just treat symptoms but addresses root causes with lifestyle modifications. My anxiety levels have significantly decreased through her integrated approach.",
      condition: "Anxiety & Lifestyle Issues",
      treatmentDuration: "6 months",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c0cd?w=100&h=100&fit=crop&crop=face",
      beforeAfter: "Anxiety score reduced by 70%"
    },
    {
      id: 3,
      name: "Venkat Reddy",
      location: "Madhapur",
      age: 52,
      rating: 5,
      text: "Best diabetes specialist in Hyderabad. Her personalized treatment plan and continuous support helped me achieve better blood sugar control and overall wellness. The lifestyle counseling sessions were life-changing.",
      condition: "Diabetes & Hypertension",
      treatmentDuration: "1 year",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      beforeAfter: "BP normalized, weight loss of 15kg"
    },
    {
      id: 4,
      name: "Sunitha Rao",
      location: "Banjara Hills",
      age: 29,
      rating: 5,
      text: "Dr. Prathusha helped me through my pregnancy with gestational diabetes. Her caring approach and expert guidance ensured both my baby and I stayed healthy throughout. Highly recommend her holistic care.",
      condition: "Gestational Diabetes",
      treatmentDuration: "6 months",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=face",
      beforeAfter: "Healthy delivery, normalized glucose"
    },
    {
      id: 5,
      name: "Anil Krishna",
      location: "Gachibowli",
      age: 41,
      rating: 5,
      text: "After struggling with stress-related health issues for years, Dr. Prathusha's integrated approach combining medicine with mental wellness techniques gave me my life back. Her positive psychology sessions are amazing.",
      condition: "Stress & Metabolic Issues",
      treatmentDuration: "10 months",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      beforeAfter: "Stress levels reduced, energy increased"
    },
    {
      id: 6,
      name: "Kavitha Nair",
      location: "Jubilee Hills",
      age: 35,
      rating: 5,
      text: "Dr. Prathusha's comprehensive wellness approach helped me overcome chronic fatigue and hormonal imbalances. Her attention to detail and personalized care plan made all the difference in my recovery journey.",
      condition: "Hormonal Imbalance",
      treatmentDuration: "7 months",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      beforeAfter: "Hormones balanced, fatigue eliminated"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Patients" },
    { number: "12+", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
                elementId="testimonials-content"
                filename="dr-prathusha-testimonials"
                title="Export Testimonials PDF"
              />
              <a href="tel:+919876543210" className="text-sm text-blue-600 font-medium hover:text-blue-700">
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </header>

      <div id="testimonials-content">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Patient <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Real experiences from patients who have transformed their health and lives through 
              Dr. Prathusha Nerella's holistic wellness approach.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Detailed Patient Reviews</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read comprehensive testimonials from patients across different health conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="professional-card hover-lift group">
                  <CardContent className="p-8 space-y-6">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                      <p className="text-gray-600 italic leading-relaxed pl-6">"{testimonial.text}"</p>
                    </div>

                    {/* Patient Info */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.location} • Age {testimonial.age}
                        </div>
                      </div>
                    </div>

                    {/* Treatment Details */}
                    <div className="space-y-3">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        {testimonial.condition}
                      </Badge>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          Treatment: {testimonial.treatmentDuration}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          Result: {testimonial.beforeAfter}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Wellness Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of patients who have transformed their health with Dr. Prathusha Nerella's holistic approach.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/patient-registration')}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Book Your Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsShowcase;
