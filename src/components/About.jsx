import React, { useState, useRef } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import NavBar from './NavBar';
import Footer from './Footer';
import DevPromo from './DevPromo';
import { Goal, BookOpen, Briefcase, FileText, PieChart, Users, Sun, Moon, Globe, Car, MapPin, Facebook, Instagram, Twitter, Phone } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';

// Slogan flottant avec la même animation que dans la page d'accueil
// const FloatingSlogan = ({ children }) => {
//   const spring = useSpring({
//     from: { transform: 'translateY(20px)', opacity: 0 },
//     to: { transform: 'translateY(0)', opacity: 1 },
//     config: config.molasses,
//   });

//   return (
//     <animated.h1 style={spring} className="text-4xl font-bold text-center mb-8 text-black">
//       {children}
//     </animated.h1>
//   );
// };
const FloatingSlogan = ({ children }) => {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 1.5; // Ajusté la position verticale
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={2}
      color="#e94560"
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
};

// Paragraphe animé identique à celui de la page d'accueil
const AnimatedParagraph = ({ children }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.molasses,
  });

  return <animated.p style={spring} className="text-lg text-gray-700 leading-relaxed">{children}</animated.p>;
};

// Composant pour les cards animées
const ServiceCard = ({ title, description, icon: Icon, language }) => {
  const [hovered, setHovered] = useState(false);

  // Animation spring pour le scale et la rotation
  const spring = useSpring({
    transform: hovered ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0deg)',
    config: config.wobbly,
  });

  // Animation spring pour la couleur du gradient
  const gradientSpring = useSpring({
    background: hovered
      ? 'linear-gradient(135deg, rgba(255,99,71,0.6), rgba(255,160,122,0.6))'
      : 'linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05))', // Arrière-plan légèrement contrasté
  });

  return (
    <animated.div
      style={{ ...spring, ...gradientSpring }}
      className="relative bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center shadow-lg mb-6">
          <Icon className="text-white w-10 h-10 animate-bounce" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        {/* <button className="px-4 py-2 mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow duration-300">
          {language === 'fr' ? 'En savoir plus' : 'Learn more'}
        </button> */}
      </div>
      <div className="absolute -top-5 -right-5 w-24 h-24 bg-pink-400 opacity-30 blur-2xl rounded-full"></div>
      <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-orange-400 opacity-30 blur-2xl rounded-full"></div>
    </animated.div>
  );
};

// Contenu de la page "Qui sommes-nous"
const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  // Données pour les cards
  const objectivesAndTeam = [
    {
      title: language === 'fr' ? 'Nos objectifs' : 'Our Objectives',
      description: language === 'fr' ? "Contribuer au renforcement des capacités managériales et de gestion des entreprises africaines. Participer à la consolidation d’initiatives créatrices indispensables à leur survie et leur développement." : "Strengthen the managerial and operational capacities of African companies. Contribute to the consolidation of creative initiatives essential for their survival and development.",
      icon: Goal,
    },
    {
      title: language === 'fr' ? 'Notre équipe' : 'Our Team',
      description: language === 'fr' ? "Mettre à la disposition des acteurs économiques un pool de compétences pluridisciplinaires : entreprises publiques et privées, ONG, etc." : "Provide economic actors with a multidisciplinary team: public and private companies, NGOs, etc.",
      icon: Users,
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800'} transition-colors duration-500`}>
      {/* NavBar */}
      <NavBar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      <main className="container mx-auto px-6 py-16">

        {/* Slogan animé */}
         <section  >
          <Canvas>
          <FloatingSlogan >
            {language === 'fr' ? "Un cabinet d'audit et comptabilité pas comme les autres" : "A different kind of audit and accounting firm"}
          </FloatingSlogan>
          </Canvas>
        </section>

        {/* Paragraphe principal */}
        <section className="mb-12">
          <AnimatedParagraph>
            {language === 'fr'
              ? "AE2C est un cabinet d’audit, d’expertise comptable, de conseil et d’études de droit malien à vocation internationale. Le cabinet AE2C est inscrit à l’Ordre des Comptables Agréés et Experts-Comptables Agréés du Mali. AE2C a pour ambition d’aider les dirigeants d’entreprise à décider en toute sécurité et d’accompagner les entrepreneurs à chaque étape de leur activité."
              : "AE2C is an audit, accounting, consulting, and legal studies firm with a Malian and international focus. The firm is registered with the Order of Certified Public Accountants and Chartered Accountants of Mali. AE2C aims to help business leaders make secure decisions and support entrepreneurs at every stage of their activities."}
          </AnimatedParagraph>
        </section>

        {/* Section Nos Objectifs / Notre Équipe */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {objectivesAndTeam.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              language={language}
            />
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* DevPromo */}
      <DevPromo />
    </div>
  );
};

export default About;
