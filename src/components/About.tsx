import React from 'react';
import  { education } from '../data/experience';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-teal-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Get to know more about my journey, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Halo! Saya Dendra De Tama, seorang siswa SMK TI Bali Global Denpasar jurusan Rekayasa Perangkat Lunak. Saya memiliki minat besar dalam pengembangan web dan desain UI/UX, dengan keahlian dalam bahasa pemrograman seperti React, Golang, dan Python untuk membangun website yang fungsional dan responsif, serta Figma untuk menciptakan tampilan antarmuka yang menarik dan intuitif.
              </p>
              <p>
                Saya berkomitmen untuk menciptakan solusi digital yang inovatif dan user-friendly, serta terus mengembangkan kemampuan saya melalui berbagai proyek dan pembelajaran mandiri. Bagi saya, teknologi bukan hanya alat, tetapi juga sarana untuk mempermudah hidup dan menciptakan pengalaman pengguna yang lebih baik. Saya percaya bahwa dengan kombinasi antara desain yang baik dan pengkodean yang solid, kita bisa menciptakan produk digital yang berdampak positif.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Education & Certifications
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700"
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {edu.period}
                  </p>
                  {edu.description && (
                    <p className="text-slate-600 dark:text-slate-400">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
              
              <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Certifications
                </h4>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>UI DESIGN FOR BEGINER (BTWEdutech)</li>
                  <li>Apps Developers (Timedoor Acadeym)</li>
                  <li>Finalis UI/UX Udayana (ITCC)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;