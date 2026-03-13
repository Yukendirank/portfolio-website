import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Business Systems',
      institution: 'Mailam Engineering College',
      location: 'Tamil Nadu',
      period: 'Current',
      gpa: 'Currently Pursuing'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: '',
      institution: 'Government Higher Secondary School Panayapuram',
      location: 'Tamil Nadu',
      period: 'Completed',
      gpa: 'Completed'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      field: '',
      institution: 'Government High School',
      location: 'Thirukkanur, Puducherry',
      period: 'Completed',
      gpa: 'Completed'
    }
  ];

  const certifications = [
    'Azure Fundamentals - Microsoft',
    'AWS Cloud Practitioner',
    'Value-Added Course in Web 3.0 - VEI Technologies',
    'Value-Added Course in Full Stack Development - VEI Technologies'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-3">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                  {edu.field && (
                    <p className="text-lg text-blue-600 font-medium mb-2">{edu.field}</p>
                  )}
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">{edu.institution}</p>
                  <p className="text-sm">{edu.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </span>
                    <span className="text-sm font-medium text-blue-600">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="mr-3 text-teal-600" size={28} />
              Certifications
            </h3>
            <div className="bg-teal-50 p-6 rounded-xl">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{cert}</span>
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

export default Education;