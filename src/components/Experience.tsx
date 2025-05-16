import React from 'react';
import { experiences } from '../data/experience';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work <span className="text-teal-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            
            {/* Experience items */}
            {experiences.map((experience, index) => (
              <div key={index} className="mb-12 relative">
                <div className="flex">
                  {/* Timeline dot */}
                  <div className="absolute left-0 mt-1.5">
                    <div className="bg-white dark:bg-slate-800 p-1 rounded-full border-4 border-teal-500">
                      <Briefcase size={16} className="text-teal-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {experience.title}
                        </h3>
                        <span className="text-sm text-teal-500 dark:text-teal-400 font-medium mt-1 md:mt-0">
                          {experience.period}
                        </span>
                      </div>
                      
                      <p className="text-lg text-slate-700 dark:text-slate-300 mb-3">
                        {experience.company}
                      </p>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;