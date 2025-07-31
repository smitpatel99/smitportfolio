import React from 'react';
import { ArrowDown, Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary-500">Smit Patel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Web Designer
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant digital experiences that connect brands with their audiences 
            through thoughtful design and seamless user interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2 group"
            >
              <Eye size={20} />
              View My Work
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-200 flex items-center gap-2">
              <a href="/Web_designer.pdf" className='inline-flex gap-2'>
              <Download size={20} />
              Download Resume
              </a>
              
            </button>
          </div>
        </div>
        
        <div className="animate-bounce mt-8">
          <button 
            onClick={scrollToProjects}
            className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;