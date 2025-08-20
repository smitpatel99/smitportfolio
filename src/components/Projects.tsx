import React from 'react';
import { ExternalLink, Github, Globe, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Lens Legacy',
      description: 'LensLegacy is a stunning prebuilt WordPress Elementor website designed specifically for photographers to showcase their portfolio.',
      image: 'https://wdesignkit.com/images/uploads/wpdk-1/templates_images/LensLegacy%20_%20Photography%20Portfolio%20Figma%20Design%20Template%20kit-3350.png',
      tech: ['WordPress', 'CSS', 'BootStrap', 'JavaScript', 'jQuery'],
      liveUrl: 'https://etemplates.wdesignkit.com/lenslegacy/',
      githubUrl: 'https://wdesignkit.com/templates/kit/lens-legacy--elementor-template-kit/14042',
      icon: <Globe size={24} />
    },
    {
      id: 2,
      title: 'PlanPro Interior',
      description: 'Planpro is a prebuilt WordPress Elementor website designed for architecture and interior design firms. The website features a modern and sleek design with a focus on showcasing stunning architectural projects and interior design work.',
      image: 'https://wdesignkit.com/images/uploads/wpdk-1/templates_images/Template%20Cover%201%20(1)-3527.png',
      tech: ['WordPress', 'CSS', 'BootStrap', 'JavaScript', 'jQuery'],
      liveUrl: 'https://etemplates.wdesignkit.com/planpro/',
      githubUrl: '#',
      icon: <Globe size={24} />
    },
    {
      id: 3,
      title: 'ThinkAI',
      description: 'ThinkAi is a modern Gutenberg template kit for AI and machine learning websites. It highlights AI image generation, photo editing, pricing plans, testimonials, FAQs, and app download links, all in a sleek, professional design.',
      image: '/thinkai.jpg',
      tech: ['Woo Commerce', 'WordPress', 'CSS', 'BootStrap', 'JavaScript', 'jQuery'],
      liveUrl: 'https://etemplates.wdesignkit.com/think-ai/',
      githubUrl: '#',
      icon: <ShoppingCart size={24} />
    },
    {
      id: 4,
      title: 'Tech-Tide',
      description: 'Tech-Tide is a sleek and modern prebuilt WordPress Elementor website template kit. It features a clean and minimalist design with a focus on technology and innovation.',
      image: 'https://wdesignkit.com/images/uploads/wpdk-1/templates_images/TechTide%20_%20Digital%20and%20Marketing%20Agency%20Portfolio%20Figma%20Design%20Template-4299.png',
      tech: ['WordPress', 'CSS', 'BootStrap', 'JavaScript', 'jQuery'],
      liveUrl: 'https://etemplates.wdesignkit.com/techtide/',
      githubUrl: '#',
      icon: <ShoppingCart size={24} />
    },
    {
      id: 5,
      title: 'VerdiScape',
      description: 'The VerdiScape Template Kit for Elementor is a beautifully crafted design package tailored for landscaping, gardening, and outdoor service businesses.',
      image: 'https://wdesignkit.com/images/uploads/wpdk-1/templates_images/VerdiScape%20kit-9170.png',
      tech: ['WordPress', 'CSS', 'BootStrap', 'JavaScript', 'jQuery'],
      liveUrl: 'https://etemplates.wdesignkit.com/verdiscape/',
      githubUrl: '#',
      icon: <Globe size={24} />
    },
    {
      id: 6,
      title: 'TailTrim',
      description: 'TailTrim is a modern Elementor Template Kit designed for pet grooming services. It offers a clean, user-friendly layout, pre-designed pages, and customizable features to showcase services, attract pet owners, and build a professional online presence effortlessly.',
      image: 'https://wdesignkit.com/images/uploads/wpdk-1/templates_images/TailTrim%20Kit-1031.png',
      tech: ['WordPress', 'CSS', 'BootStrap', 'JavaScript', 'jQuery'],
      liveUrl: 'https://etemplates.wdesignkit.com/tailtrim/',
      githubUrl: '#',
      icon: <Globe size={24} />
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web design, user experience, and front-end development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-primary-500">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors group/link"
                  >
                    <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;