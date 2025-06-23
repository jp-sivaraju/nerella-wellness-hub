
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Diabetes Management",
      rating: 5,
      text: "Dr. Prathusha's integrated approach to diabetes care has been life-changing. Her combination of medical expertise and holistic wellness strategies helped me achieve better blood sugar control than I've had in years. The positive psychology techniques she taught me transformed not just my health, but my entire outlook on life.",
      location: "Hyderabad"
    },
    {
      name: "Rajesh Kumar",
      condition: "Mental Wellness",
      rating: 5,
      text: "After struggling with anxiety for years, Dr. Prathusha's positive psychology approach gave me the tools I needed to thrive. Her compassionate care and evidence-based techniques helped me build resilience and find genuine happiness. I'm grateful for her holistic approach to mental health.",
      location: "Secunderabad"
    },
    {
      name: "Anitha Reddy",
      condition: "Lifestyle Medicine",
      rating: 5,
      text: "The personalized lifestyle medicine program designed by Dr. Prathusha completely transformed my health. Her scientific approach to nutrition and wellness helped me lose weight sustainably and improve my energy levels. She truly practices what she preaches about holistic health.",
      location: "Banjara Hills"
    }
  ];

  return (
    <section className="relative py-32 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 px-6 py-3 mb-8">
            <Star className="h-4 w-4 mr-2" />
            Patient Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Real Results,</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Real Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how Dr. Prathusha's comprehensive care approach has transformed lives and helped patients achieve 
            optimal health and wellness through personalized treatment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="border-t pt-6">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-teal-600 font-medium">{testimonial.condition}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
