import React from 'react';
import { Code, Cloud, Database, Settings, TestTube, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Automation Tools',
      icon: TestTube,
      skills: ['Selenium', 'TestNG', 'JUnit', 'Postman', 'RestAssured'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'CI/CD & DevOps',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Jenkins', 'Maven', 'Docker', 'GitHub Actions'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS EC2', 'AWS S3', 'AWS IAM'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['SQL', 'Oracle', 'JDBC'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Java (Primary)', 'Python (Basic)', 'JavaScript (Basic)'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Pharma & Validation',
      icon: Settings,
      skills: ['CSV', 'GAMP 5', 'SCADA', 'DCS', '21 CFR Part 11'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">
            Comprehensive expertise across automation, validation, and pharmaceutical compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < (skillIndex === 0 ? 5 : 4) ? 'bg-teal-500' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications or additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Domain Expertise</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Specialized in pharmaceutical software validation with deep understanding of regulatory compliance, 
              risk-based testing approaches, and validation lifecycle management in GxP environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;