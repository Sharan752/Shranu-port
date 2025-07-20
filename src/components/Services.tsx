import React from 'react';
import { Bot, Zap, Shield, Cloud, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'QA Automation Setup',
      description: 'End-to-end automation framework development using Selenium, TestNG, and modern CI/CD practices.',
      features: ['Framework Architecture', 'Test Script Development', 'Reporting & Analytics', 'Maintenance & Support'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Manual to Automated Migration',
      description: 'Transform existing manual test cases into robust automated test suites with comprehensive coverage.',
      features: ['Test Case Analysis', 'Automation Strategy', 'Implementation Plan', 'Training & Handover'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Cloud,
      title: 'API Testing & Automation',
      description: 'Comprehensive API testing solutions using Postman, RestAssured, and automated validation frameworks.',
      features: ['API Test Design', 'Automated Validation', 'Performance Testing', 'Documentation'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'CSV Documentation & Pharma Validation',
      description: 'Computer System Validation services ensuring compliance with GAMP 5, 21 CFR Part 11, and GxP standards.',
      features: ['Validation Plans', 'Risk Assessments', 'Test Protocols', 'Compliance Documentation'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: CheckCircle,
      title: 'CI/CD Integration & Pipeline Setup',
      description: 'Complete DevOps pipeline setup with automated testing, deployment, and monitoring capabilities.',
      features: ['Pipeline Design', 'Tool Integration', 'Automated Deployment', 'Monitoring Setup'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive QA automation and validation services tailored for pharmaceutical and regulated industries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your QA Process?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help optimize your testing strategy and ensure regulatory compliance 
              with modern automation solutions.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;