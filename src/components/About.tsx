import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: <Palette />, title: 'Web Design', description: 'Creating intuitive and beautiful user interfaces' },
    { icon: <Code />, title: 'Frontend Development', description: 'Building responsive and interactive web experiences' },
    { icon: <Users />, title: 'User Research', description: 'Understanding user needs through research and testing' },
    { icon: <Zap />, title: 'Prototyping', description: 'Rapid prototyping and iteration for better solutions' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate about creating meaningful design experiences
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 3.5 years of experience in web design, I specialize in creating 
              user-centered digital solutions that not only look great but also solve real problems. 
              My approach combines strategic thinking with creative execution to deliver exceptional results.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe that great design is about more than just aesthetics—it's about understanding 
              users, solving problems, and creating experiences that feel effortless and delightful. 
              Every project is an opportunity to learn, grow, and push the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Figma', 'React', 'jQuery', 'Bootstrap', ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/Dp_1.jpg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 group hover:bg-gray-50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h4>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;