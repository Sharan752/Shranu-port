import React, { useState } from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Selenium Test Framework - POM with Maven/Jenkins',
      description: 'Comprehensive automation framework using Page Object Model design pattern with Maven build management and Jenkins CI/CD integration.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Selenium', 'Maven', 'Jenkins', 'TestNG'],
      category: 'Automation',
      challenges: 'Cross-browser compatibility and parallel execution',
      results: '70% reduction in test execution time'
    },
    {
      title: 'API Test Suite with Postman & RestAssured',
      description: 'Automated API testing solution with comprehensive validation, data-driven testing, and detailed reporting capabilities.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Postman', 'RestAssured', 'API Testing', 'Java'],
      category: 'API',
      challenges: 'Complex authentication and response validation',
      results: '90% API coverage with automated regression'
    },
    {
      title: 'Batch Validation DB Automation via JDBC',
      description: 'Database validation automation for pharmaceutical batch processing systems ensuring data integrity and compliance.',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['JDBC', 'Oracle', 'Validation', 'Java'],
      category: 'Database',
      challenges: 'Real-time data validation and performance optimization',
      results: '95% data accuracy validation automation'
    },
    {
      title: 'QA Pipeline using GitHub → Jenkins → Docker',
      description: 'Complete CI/CD pipeline for automated testing with containerized environments and seamless deployment workflow.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['GitHub Actions', 'Jenkins', 'Docker', 'CI/CD'],
      category: 'DevOps',
      challenges: 'Container orchestration and environment consistency',
      results: 'Zero-downtime deployments with 50% faster delivery'
    },
    {
      title: 'Cloud Testing Setup on AWS EC2',
      description: 'Scalable cloud-based testing infrastructure on AWS with auto-scaling capabilities and cost optimization.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['AWS', 'EC2', 'S3', 'Cloud Testing'],
      category: 'Cloud',
      challenges: 'Resource optimization and security configuration',
      results: '60% cost reduction with improved scalability'
    },
    {
      title: 'CSV Lifecycle Documentation Tracker',
      description: 'Comprehensive Computer System Validation documentation management system ensuring regulatory compliance throughout the lifecycle.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['CSV', 'GAMP 5', 'Validation', 'Documentation'],
      category: 'Validation',
      challenges: 'Complex regulatory requirements and audit trails',
      results: '100% compliance with 21 CFR Part 11 standards'
    }
  ];

  const categories = ['All', 'Automation', 'API', 'Database', 'DevOps', 'Cloud', 'Validation'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 mb-8">
            Showcase of key projects demonstrating expertise in QA automation and pharmaceutical validation
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                    <ExternalLink size={16} />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                    <Github size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 font-medium">Challenge</p>
                      <p className="text-gray-700">{project.challenges}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 font-medium">Result</p>
                      <p className="text-teal-600 font-medium">{project.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Sharan752"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;