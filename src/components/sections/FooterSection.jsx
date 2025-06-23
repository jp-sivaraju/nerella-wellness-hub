
import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Nerella Wellness Hub</h3>
                <p className="text-gray-400">Dr. Prathusha Nerella • Holistic Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Dedicated to providing comprehensive, compassionate healthcare that addresses your physical, 
              mental, and emotional well-being through evidence-based medicine and holistic approaches.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Dr. Prathusha</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Health Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nerellawellness.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Ramakrishna Math<br />Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nerella Wellness Hub. All rights reserved. • Dr. Prathusha Nerella, MD</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
