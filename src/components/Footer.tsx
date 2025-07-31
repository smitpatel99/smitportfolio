import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/smitpatel99', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/smit-patel-264b94220/', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/smitpatel_2502', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              Smit<span className="text-primary-500">.</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Crafting elegant digital experiences that connect brands with their audiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200 transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Made with <Heart size={16} className="text-red-500" /> by Smit Patel
              </p>
              <p className="text-gray-500 text-sm mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            This portfolio was built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;