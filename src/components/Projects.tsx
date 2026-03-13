import React from 'react';
import { ExternalLink, Github, Coins, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CropCast',
      description: 'A comprehensive web-based application that uses Google Gemini AI to predict crop yields based on weather conditions, soil properties, and farming practices. This intelligent platform helps farmers make data-driven decisions to optimize their agricultural output and improve productivity.',
      technologies: ['Google Gemini AI', 'React.js', 'TypeScript', 'Weather API', 'Data Analytics', 'Tailwind CSS'],
      icon: <Coins className="text-green-600" size={32} />,
      color: 'green',
      liveUrl: 'https://cropcast-ten.vercel.app',
      githubUrl: 'https://github.com/Yukendirank/Cropcast.git'
    },
    {
      title: 'TravelAI',
      description: 'This project represents a modern, AI-powered travel planning application that combines cutting-edge technology with user-friendly design to create personalized travel experiences. The platform streamlines travel planning by generating customized itineraries tailored to user preferences, budget, and interests.',
      technologies: ['React.js', 'JavaScript', 'Google Gemini API', 'AI Integration', 'Responsive Design'],
      icon: <MapPin className="text-blue-600" size={32} />,
      color: 'blue',
      liveUrl: 'https://travel-ai-mauve.vercel.app',
      githubUrl: 'https://github.com/Yukendirank/TravelAI.git'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50',
      green: 'bg-green-50',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getTechColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 ${getColorClasses(project.color)} rounded-xl mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${getTechColorClasses(project.color)} rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 text-white rounded-lg transition-colors duration-200 ${
                    project.color === 'blue' 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;