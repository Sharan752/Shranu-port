import React from 'react';
import { ChevronDown, Github, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
            SB
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Sharan Basava
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            QA Automation Engineer | Pharma Domain | CSV Expert
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Dedicated QA professional with 4+ years of hands-on experience in pharmaceutical software validation and automation, 
            ensuring compliance with regulatory standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Quick Contact Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:sharanbasava752@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
              <Mail size={24} />
            </a>
            <a href="tel:+919113807024" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
              <Phone size={24} />
            </a>
            <a href="https://github.com/Sharan752" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-teal-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;