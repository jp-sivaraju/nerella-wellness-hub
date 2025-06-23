
import React from 'react';
import { Award, Heart, Users, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Dr. Prathusha Nerella
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Prathusha Nerella is a dedicated healthcare professional with over 12 years of experience 
              in providing comprehensive medical care and wellness solutions. She specializes in holistic 
              health approaches that treat the whole person, not just symptoms.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Her expertise spans general medicine, diabetes management, preventive healthcare, and mental 
              wellness. Dr. Nerella is passionate about empowering patients with knowledge and tools for 
              optimal health and well-being.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="professional-card p-4">
                <CardContent className="p-0 text-center">
                  <Award className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">12+ Years</h4>
                  <p className="text-sm text-gray-600">Experience</p>
                </CardContent>
              </Card>
              <Card className="professional-card p-4">
                <CardContent className="p-0 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">10,000+</h4>
                  <p className="text-sm text-gray-600">Patients Treated</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
              alt="Medical consultation"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
