
import React from 'react';
import { Award, CheckCircle, Calendar, Users, Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AboutSection = ({ scrollToSection }) => {
  const achievements = [
    "MD General Medicine - Narayana Medical College",
    "Certified in Neuro Linguistic Programming",
    "Former Senior Consultant - MediCiti Institute",
    "Former Consultant - Apollo Clinic",
    "Currently practicing at Ramakrishna Math Hyderabad",
    "Expert in Diabetes & Lifestyle Medicine"
  ];

  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop"
                alt="Dr. Prathusha Nerella - Professional Healthcare"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">MD</div>
                <div className="text-sm text-gray-600">General Medicine</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 px-6 py-3">
                <Users className="h-4 w-4 mr-2" />
                Meet Dr. Prathusha Nerella
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Passionate About</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Your Wellness</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 12 years of dedicated experience in healthcare, Dr. Prathusha Nerella has established herself 
                as a pioneer in integrative medicine, combining traditional medical expertise with innovative holistic approaches.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Professional Journey & Achievements</h3>
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100 shadow-xl">
              <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                "My philosophy centers on treating the whole person, not just symptoms. I believe in empowering patients 
                with knowledge and tools for sustainable wellness, combining the best of modern medicine with time-tested 
                holistic approaches."
              </blockquote>
              <cite className="text-teal-600 font-bold mt-4 block text-lg">- Dr. Prathusha Nerella</cite>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection && scrollToSection('contact')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/drprathushanerella" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@pravehaintegrative" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/drprathushanerella/" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
