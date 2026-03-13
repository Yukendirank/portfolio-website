import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Computer Vision & Data Visualization Essentials Intern',
      company: 'Genesys',
      location: 'Remote',
      period: 'Recently Completed',
      description: [
        'Explored techniques to evaluate model accuracy and performance',
        'Gained exposure to core computer vision concepts and image preprocessing',
        'Tech Stack: Python, NumPy, Matplotlib'
      ]
    }
  ];

  const achievements = [
    'Strong problem-solving skills',
    'Quick learner and team player',
    'Good communication and analytical skills',
    'Participated in workshop competition at Karpagam Vinayagar College of Engineering and Technology',
    'Showcased an innovative project at the Project Expo conducted by the Information Technology Department, Mailam Engineering College'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional experience and notable accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="mr-3 text-blue-600" size={28} />
              Internship Experience
            </h3>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <span className="font-semibold text-blue-600">{exp.company}</span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="mr-3 text-teal-600" size={28} />
              Strengths & Achievements
            </h3>
            <div className="bg-teal-50 p-8 rounded-2xl">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;