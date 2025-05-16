import React from 'react';
import { Github, Linkedin, Instagram, Youtube , ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-teal-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <h1 className="inline-block font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white mb-4 animated-text">
          <span className="relative">
            Frontend Developer & <br className="md:hidden" />
            <span className="text-teal-500">UI/UX Designer</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
          I build exceptional, responsive websites and web applications that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 transform hover:scale-105"
          >
            View My Work <ArrowRight size={16} />
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-transparent border border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 text-slate-900 dark:text-white font-medium rounded-lg transition-colors duration-300 hover:text-teal-500 dark:hover:text-teal-400"
          >
            Contact Me
          </a>
        </div>

        <div className="flex space-x-4 mb-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <Youtube size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Instagram size={20} />
          </a>
        </div>

        <div className="absolute bottom-1  transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-teal-500 shadow-md"
            aria-label="Scroll down"
          >
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;