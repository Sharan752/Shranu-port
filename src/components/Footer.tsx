import React from 'react';
import { Heart, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'QA Automation Setup',
    'API Testing & Automation',
    'CSV Documentation',
    'CI/CD Integration',
    'Manual to Automated Migration'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">Sharan Basava</div>
            <p className="text-gray-300 mb-6 max-w-md">
              QA Automation Engineer specializing in pharmaceutical domain validation, 
              ensuring compliance with regulatory standards and delivering high-quality software solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:sharanbasava752@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+919113807024"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://github.com/Sharan752"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>© 2025 Sharan Basava. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>and React</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>QA Automation Engineer</span>
              <span>•</span>
              <span>Pharma Domain Expert</span>
              <span>•</span>
              <span>CSV Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;