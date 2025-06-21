
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Hyderabad",
      rating: 5,
      text: "Dr. Prathusha's holistic approach helped me manage my diabetes effectively. Her positive psychology sessions transformed my outlook towards health and life.",
      condition: "Diabetes Management",
      image: "https://images.unsplash.com/photo-1507003211169?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      location: "Secunderabad",
      rating: 5,
      text: "Excellent doctor with deep knowledge and compassionate care. She doesn't just treat symptoms but addresses root causes with lifestyle modifications.",
      condition: "Lifestyle Consultation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c0cd?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Venkat Reddy",
      location: "Madhapur",
      rating: 5,
      text: "Best diabetes specialist in Hyderabad. Her personalized treatment plan and continuous support helped me achieve better blood sugar control and overall wellness.",
      condition: "Diabetes Care",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Patient Testimonials</h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">What our patients say about their healthcare experience</p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="professional-card p-6 lg:p-8 h-full">
                  <CardContent className="p-0 space-y-4 lg:space-y-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</h4>
                        <p className="text-xs lg:text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                        {testimonial.condition}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
