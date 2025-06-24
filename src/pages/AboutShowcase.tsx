
import React from 'react';
import { Award, MapPin, Clock, Instagram, Youtube, Facebook, ArrowLeft, Calendar, Stethoscope, Heart, Users, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';

const AboutShowcase = () => {
  const navigate = useNavigate();

  const achievements = [
    { icon: Award, title: "12+ Years Experience", desc: "Extensive experience in general medicine and specialized care" },
    { icon: Heart, title: "10,000+ Patients Treated", desc: "Successfully treated thousands of patients with personalized care" },
    { icon: Users, title: "Holistic Approach", desc: "Combining traditional medicine with modern wellness practices" },
    { icon: Shield, title: "98% Success Rate", desc: "High success rate in patient satisfaction and treatment outcomes" }
  ];

  const qualifications = [
    "MBBS - Bachelor of Medicine and Bachelor of Surgery",
    "MD - Doctor of Medicine (General Physician)",
    "Certified by The Society of Neuro Linguistic Programming",
    "Advanced Training in Lifestyle Medicine",
    "Specialized Certification in Diabetes Management",
    "Positive Psychology Practitioner Certification"
  ];

  const experience = [
    {
      role: "Senior Consultant",
      organization: "Ramakrishna Math Hospital, Hyderabad",
      period: "2020 - Present",
      description: "Leading comprehensive healthcare initiatives and patient care programs"
    },
    {
      role: "Associate Consultant",
      organization: "MediCiti Institute of Medical Sciences",
      period: "2018 - 2020",
      description: "Specialized in diabetes management and lifestyle medicine"
    },
    {
      role: "General Physician",
      organization: "Apollo Clinic",
      period: "2015 - 2018",
      description: "Primary healthcare and preventive medicine practice"
    }
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
            <Button 
              onClick={() => navigate('/contact')}
              className="btn-wellness"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  12+ Years of Excellence in Healthcare
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Meet <span className="text-gradient">Dr. Prathusha Nerella</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  A dedicated healthcare professional committed to providing comprehensive, 
                  compassionate care through a holistic approach that addresses the mind, body, and spirit.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dr. Prathusha combines evidence-based medical knowledge with holistic healing practices, 
                  ensuring each patient receives personalized treatment that goes beyond just treating symptoms.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/55df00ec-e4d5-4b7c-b708-5ddfb1132566.png"
                  alt="Dr. Prathusha Nerella"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 wellness-gradient opacity-10 rounded-2xl transform rotate-3 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Education & Qualifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Prathusha's extensive education and continuous learning ensure the highest quality of care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="professional-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Medical Education</h3>
                </div>
                <div className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{qualification}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="professional-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Specializations</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "General Medicine",
                    "Diabetes Care",
                    "Lifestyle Medicine", 
                    "Mental Wellness",
                    "Preventive Health",
                    "Holistic Healing"
                  ].map((specialization, index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium text-green-800">{specialization}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A career dedicated to advancing healthcare through innovation and compassionate patient care
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="professional-card p-8 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                          <p className="text-lg text-blue-600 font-medium">{exp.organization}</p>
                        </div>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 mt-2 md:mt-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Connect with Dr. Prathusha</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow her journey and get health tips through social media platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://www.instagram.com/drprathushanerella" 
              target="_blank" 
              rel="noopener noreferrer"
              className="professional-card p-6 hover-lift group text-center block"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instagram</h4>
              <p className="text-sm text-gray-600">@drprathushanerella</p>
            </a>

            <a 
              href="https://www.youtube.com/@pravehaintegrative" 
              target="_blank" 
              rel="noopener noreferrer"
              className="professional-card p-6 hover-lift group text-center block"
            >
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Youtube className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">YouTube</h4>
              <p className="text-sm text-gray-600">@pravehaintegrative</p>
            </a>

            <a 
              href="https://www.facebook.com/drprathushanerella/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="professional-card p-6 hover-lift group text-center block"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Facebook className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Facebook</h4>
              <p className="text-sm text-gray-600">drprathushanerella</p>
            </a>

            <a 
              href="https://www.threads.com/@drprathushanerella" 
              target="_blank" 
              rel="noopener noreferrer"
              className="professional-card p-6 hover-lift group text-center block"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="text-white font-bold text-xl">@</div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Threads</h4>
              <p className="text-sm text-gray-600">@drprathushanerella</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Experience Compassionate Healthcare
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your consultation with Dr. Prathusha and start your journey towards optimal health and wellness.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/contact')}
            className="btn-wellness"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutShowcase;
