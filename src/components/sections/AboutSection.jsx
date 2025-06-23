
import React from 'react';
import { Award, MapPin, Clock, Instagram, Youtube, Facebook, Stethoscope, Heart, Brain, Users, CheckCircle, GraduationCap, Star, Shield } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const professionalHighlights = [
    {
      icon: GraduationCap,
      title: "Medical Education",
      items: ["MBBS, MD - General Medicine", "Narayana Medical College Graduate", "Specialized Training in Internal Medicine"]
    },
    {
      icon: Award,
      title: "Certifications",
      items: ["Certified by The Society of Neuro Linguistic Programming", "Advanced Diabetes Management Certification", "Positive Psychology Practitioner"]
    },
    {
      icon: Stethoscope,
      title: "Clinical Experience",
      items: ["12+ Years in General Medicine", "Expert in Diabetes Management", "Holistic Healthcare Specialist"]
    },
    {
      icon: Heart,
      title: "Specializations",
      items: ["Diabetes Care & Management", "Mental Wellness & Positive Psychology", "Lifestyle Medicine", "Preventive Healthcare"]
    }
  ];

  const careerJourney = [
    {
      period: "Current",
      position: "Senior Consultant",
      organization: "Ramakrishna Math, Hyderabad",
      description: "Leading comprehensive healthcare services with focus on integrative medicine and patient-centered care.",
      status: "current"
    },
    {
      period: "Previous",
      position: "Senior Consultant",
      organization: "MediCiti Institute of Medical Sciences",
      description: "Provided specialized care in general medicine with emphasis on diabetes management and lifestyle counseling.",
      status: "previous"
    },
    {
      period: "Previous",
      position: "Consultant Physician",
      organization: "Apollo Clinic",
      description: "Delivered primary healthcare services and developed expertise in preventive medicine and holistic wellness.",
      status: "previous"
    }
  ];

  const achievements = [
    "Over 10,000 patients successfully treated",
    "Pioneer in integrative diabetes management",
    "Expert in positive psychology applications in healthcare",
    "Advocate for lifestyle medicine and preventive care",
    "Regular contributor to health awareness programs",
    "Mentor for young healthcare professionals"
  ];

  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@drprathushanerella",
      url: "https://www.instagram.com/drprathushanerella",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      description: "Daily wellness tips & patient education"
    },
    {
      name: "YouTube",
      handle: "@pravehaintegrative",
      url: "https://www.youtube.com/@pravehaintegrative",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      description: "Educational health videos & webinars"
    },
    {
      name: "Facebook",
      handle: "drprathushanerella",
      url: "https://www.facebook.com/drprathushanerella/",
      icon: Facebook,
      color: "from-blue-500 to-blue-600",
      description: "Community health discussions"
    },
    {
      name: "Threads",
      handle: "@drprathushanerella",
      url: "https://www.threads.com/@drprathushanerella",
      icon: Users,
      color: "from-gray-600 to-gray-700",
      description: "Quick health insights & tips"
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 border border-teal-200 px-6 py-3 mb-8">
            <Users className="h-4 w-4 mr-2" />
            About Dr. Prathusha Nerella
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Dedicated to</span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Your Wellness Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dr. Prathusha Nerella brings over 12 years of medical expertise combined with a passion for holistic healing, 
            making her a trusted healthcare partner for thousands of patients seeking comprehensive wellness solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Left Column - Professional Information */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Professional Philosophy */}
            <Card className="premium-card p-8 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Medical Philosophy</h3>
                  <p className="text-teal-600 font-medium">Holistic • Compassionate • Evidence-Based</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "I believe in treating the whole person, not just the disease. Every patient deserves personalized care 
                  that addresses their unique physical, mental, and emotional needs. My approach combines the best of modern 
                  medicine with time-tested holistic practices to achieve optimal wellness outcomes."
                </blockquote>
                <cite className="text-teal-600 font-bold text-lg">- Dr. Prathusha Nerella, MD</cite>
              </div>
            </Card>

            {/* Professional Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {professionalHighlights.map((highlight, index) => (
                <Card key={index} className="premium-card p-6 hover-lift">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{highlight.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {highlight.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Career Journey */}
            <Card className="premium-card p-8 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
                  <p className="text-emerald-600 font-medium">Excellence in Healthcare Service</p>
                </div>
              </div>
              <div className="space-y-6">
                {careerJourney.map((position, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 last:border-l-0 last:pb-0">
                    <div className={`absolute -left-3 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                      position.status === 'current' ? 'bg-emerald-500' : 'bg-gray-400'
                    }`}></div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`${position.status === 'current' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'}`}>
                          {position.period}
                        </Badge>
                        {position.status === 'current' && (
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-emerald-600 text-sm font-medium">Currently Serving</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{position.position}</h4>
                      <p className="text-teal-600 font-semibold mb-3">{position.organization}</p>
                      <p className="text-gray-600 leading-relaxed">{position.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>

          {/* Right Column - Image & Achievements */}
          <div className="space-y-8">
            
            {/* Professional Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/55df00ec-e4d5-4b7c-b708-5ddfb1132566.png"
                  alt="Dr. Prathusha Nerella - Professional Healthcare Specialist"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Star className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Key Achievements */}
            <Card className="premium-card p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Key Achievements</h4>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-sm leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Current Stats */}
            <Card className="premium-card p-6 hover-lift">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Current Impact</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-teal-600 mb-1">10K+</div>
                  <div className="text-sm text-gray-600 font-medium">Patients Treated</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-blue-600 mb-1">12+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-purple-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Care Support</div>
                </div>
              </div>
            </Card>

          </div>
        </div>

        {/* Social Media & Contact Section */}
        <Card className="premium-card p-8 hover-lift">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Connect with Dr. Prathusha</h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest health tips, wellness insights, and medical education content 
              through Dr. Prathusha's active social media presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {socialPlatforms.map((platform, index) => (
              <a 
                key={index}
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex flex-col items-center space-y-3 p-6 bg-gradient-to-br ${platform.color} rounded-2xl hover:scale-105 transition-transform duration-300 text-white shadow-lg hover:shadow-xl`}
              >
                <platform.icon className="h-8 w-8" />
                <div className="text-center">
                  <span className="font-bold text-sm">{platform.handle}</span>
                  <p className="text-xs opacity-90 mt-1">{platform.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 hover:from-teal-700 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Your Consultation Today
            </Button>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default AboutSection;
