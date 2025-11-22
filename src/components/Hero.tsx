import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Yukendiran
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Software Engineering Student & Full-Stack Developer
            </p>
          </div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative, end-to-end solutions that address real-world problems 
            through technology. Experienced in full-stack development with expertise in modern web technologies, frameworks, and databases.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yukendirank"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yukendiran-k"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:krishnanyukiendiran@gmail.com"
              className="p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="pt-8">
            <a
              href="#about"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <span>Learn more about me</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;