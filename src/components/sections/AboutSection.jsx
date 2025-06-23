
import React from 'react';
import { Award, MapPin, Clock, Instagram, Youtube, Facebook } from 'lucide-react';
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">About Dr. Prathusha Nerella</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing comprehensive healthcare with a holistic approach to wellness and positive living
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Professional Information */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            
            {/* Professional Excellence Card */}
            <div className="professional-card p-6 lg:p-8 space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 medical-gradient rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Professional Excellence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                With over 12 years of experience in general medicine and specialized expertise in diabetes management, 
                Dr. Prathusha Nerella combines evidence-based medical knowledge with holistic approaches to provide 
                comprehensive healthcare solutions tailored to each patient's unique needs.
              </p>
            </div>

            {/* Experience & Education Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Current & Previous Experience */}
              <div className="professional-card p-6 lg:p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Experience</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Currently at Ramakrishna Math Hyderabad</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Former at MediCiti Institute of Medical Sciences</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Former at Apollo Clinic</span>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="professional-card p-6 lg:p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Education</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium text-sm lg:text-base">MBBS, MD - General Physician</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium text-sm lg:text-base">Studied at Narayana Medical College</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium text-sm lg:text-base">Certified by The Society of Neuro Linguistic Programming</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Media Section */}
            <div className="professional-card p-6 lg:p-8 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-pink-600" />
                </div>
                <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Follow Dr. Prathusha</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <a 
                  href="https://www.instagram.com/drprathushanerella" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 lg:space-x-3 p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:scale-105 transition-transform text-white"
                >
                  <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="text-xs lg:text-sm font-medium">@drprathushanerella</span>
                </a>
                <a 
                  href="https://www.youtube.com/@pravehaintegrative" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 lg:space-x-3 p-3 bg-red-600 rounded-lg hover:scale-105 transition-transform text-white"
                >
                  <Youtube className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="text-xs lg:text-sm font-medium">@pravehaintegrative</span>
                </a>
                <a 
                  href="https://www.facebook.com/drprathushanerella/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 lg:space-x-3 p-3 bg-blue-600 rounded-lg hover:scale-105 transition-transform text-white"
                >
                  <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="text-xs lg:text-sm font-medium">drprathushanerella</span>
                </a>
                <a 
                  href="https://www.threads.com/@drprathushanerella" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 lg:space-x-3 p-3 bg-gray-700 rounded-lg hover:scale-105 transition-transform text-white"
                >
                  <div className="h-4 w-4 lg:h-5 lg:w-5 font-bold">@</div>
                  <span className="text-xs lg:text-sm font-medium">@drprathushanerella</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Specializations */}
          <div className="space-y-6">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center lg:text-left">Specializations</h3>
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {[
                { icon: 'Heart', title: "Diabetes Care", desc: "Specialized diabetes management and lifestyle modification", color: "bg-red-50 text-red-600" },
                { icon: 'Users', title: "Lifestyle Expert", desc: "Comprehensive lifestyle and wellness counseling", color: "bg-blue-50 text-blue-600" },
                { icon: 'Award', title: "Positive Psychology", desc: "Mental wellness and positive mindset development", color: "bg-green-50 text-green-600" },
                { icon: 'Stethoscope', title: "Holistic Health", desc: "Complete mind-body wellness approach", color: "bg-purple-50 text-purple-600" }
              ].map((item, index) => (
                <Card key={index} className="professional-card p-4 lg:p-6 text-center hover-lift">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 ${item.color.split(' ')[0]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <div className={`h-7 w-7 lg:h-8 lg:w-8 ${item.color.split(' ')[1]} font-bold`}>
                      {item.icon === 'Heart' ? '♥' : item.icon === 'Users' ? '👥' : item.icon === 'Award' ? '🏆' : '🩺'}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{item.title}</h4>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
