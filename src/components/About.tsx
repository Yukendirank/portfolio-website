import React from 'react';
import { Code, Database, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate software engineer with hands-on experience in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a motivated and detail-oriented React & .NET Full Stack Developer from Villupuram, Tamil Nadu, India,
              with hands-on experience in building responsive and scalable web applications using React.js, ASP.NET Core,
              Web API, and SQL. My journey in technology is driven by a passion for creating innovative solutions that
              solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science and Business Systems at Mailam Engineering College,
              I have a strong foundation in RESTful API development, database integration, and modern frontend practices.
              I'm passionate about writing clean, maintainable code and eager to contribute to real-world enterprise
              applications in a collaborative environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
              <div className="p-3 bg-blue-600 text-white rounded-lg">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                <p className="text-gray-700">Proficient in React.js, ASP.NET Core, Node.js, Express.js, and RESTful API development</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-teal-50 rounded-xl">
              <div className="p-3 bg-teal-600 text-white rounded-lg">
                <Database size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Management</h3>
                <p className="text-gray-700">Experience with MongoDB, SQL, and database integration techniques</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl">
              <div className="p-3 bg-orange-600 text-white rounded-lg">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer Tools & Workflow</h3>
                <p className="text-gray-700">Experienced with Git, Vercel deployment, Postman API testing, and modern development practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;