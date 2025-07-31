import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Designer',
      company: 'Posimyth Innovations',
      location: 'Ahmedabad, IN',
      period: 'Feb 2022 - Present',
      achievements: [
        'Mentored junior designers and established design system standards across the organization',
        'Collaborated with cross-functional teams to deliver pixel-perfect, responsive web applications'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in web design and development, showcasing growth and achievements.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row md:items-start gap-6 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-200"></div>
                
                {/* Content */}
                <div className="md:ml-16 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-primary-500 font-medium">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <Award size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;