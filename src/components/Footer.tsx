import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Yukendiran K
            </h3>
            <p className="text-gray-400 mt-2">Software Engineering Student & Full-Stack Developer</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>using React.js & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Yukendiran K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;