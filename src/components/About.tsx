import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      type: 'work',
      title: 'QA Executive Engineer',
      organization: 'Shilpa Medicare Pvt Ltd',
      period: '2021 - 2025',
      description: 'Leading QA automation initiatives in pharmaceutical software validation, ensuring compliance with CSV, GAMP 5, and 21 CFR Part 11 standards.',
      icon: Briefcase
    },
    {
      type: 'education',
      title: 'B.E. Mechanical Engineering',
      organization: 'Don Bosco Institute of Technology',
      period: '2013 - 2017',
      description: 'Strong foundation in engineering principles with focus on problem-solving and analytical thinking.',
      icon: GraduationCap
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate QA Automation Engineer with deep expertise in pharmaceutical domain validation and modern automation frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm Sharan Basava, a dedicated QA Automation Engineer with 4+ years of hands-on experience in the pharmaceutical domain. 
                My core strengths lie in automating QA processes, ensuring compliance with regulatory standards, and working within Agile/Scrum environments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Throughout my career, I've specialized in pharmaceutical software validation, implementing robust automation frameworks that ensure 
                compliance with critical standards like CSV, GAMP 5, and 21 CFR Part 11. I'm passionate about delivering high-quality software with precision and efficiency.
              </p>
              <div className="flex flex-wrap gap-3">
                {['CSV Validation', 'GAMP 5', '21 CFR Part 11', 'Agile/Scrum', 'Test Automation'].map((skill) => (
                  <span key={skill} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Experience & Education</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${item.type === 'work' ? 'bg-teal-100' : 'bg-blue-100'}`}>
                      <Icon className={`w-6 h-6 ${item.type === 'work' ? 'text-teal-600' : 'text-blue-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-teal-600 font-medium mb-2">{item.organization}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;