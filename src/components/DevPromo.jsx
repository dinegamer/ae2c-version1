import React from 'react';
import { Mail, Globe } from 'lucide-react';

const DevPromo = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg backdrop-blur-md mt-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Développement web par <span className="text-primary">Shams Digital</span>
      </h2>
      <p className="text-gray-300 mb-4">
        Vous cherchez à optimiser votre présence digitale ou développer des solutions sur mesure ? Contactez-nous pour discuter de vos besoins et objectifs.
      </p>
      <div className="flex space-x-4">
        <a href="mailto:teenagerdine@gmail.com" className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors">
          <Mail /> <span>Email : teenagerdine@gmail.com</span>
        </a>
        <a href="https://dinegamer.github.io/shamsPortfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors">
          <Globe /> <span>Portfolio</span>
        </a>
      </div>
    </div>
  );
};

export default DevPromo;
