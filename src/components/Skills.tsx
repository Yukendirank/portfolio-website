import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java (Beginner)', 'JavaScript'],
      color: 'blue',
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      color: 'teal',
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
      color: 'orange',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Microsoft Azure', 'Vercel', 'Postman'],
      color: 'purple',
    },
    {
      title: 'Other Skills',
      skills: ['Data Manipulation', 'Pattern Recognition', 'Problem Solving'],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 bg-blue-50',
      teal: 'from-teal-500 to-teal-600 bg-teal-50',
      orange: 'from-orange-500 to-orange-600 bg-orange-50',
      purple: 'from-purple-500 to-purple-600 bg-purple-50',
      green: 'from-green-500 to-green-600 bg-green-50',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const [gradientClasses, bgClass] = colorClasses.split(' bg-');

            return (
              <div
                key={index}
                className={`p-8 bg-${bgClass} rounded-2xl hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className={`text-xl font-bold mb-6 text-transparent bg-gradient-to-r ${gradientClasses} bg-clip-text`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <span className="text-gray-800 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;