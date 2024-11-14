import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box, OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/web';
import * as THREE from 'three';
import { AlertCircle, BookOpen, Briefcase, FileText, PieChart, Users, Sun, Moon, Globe, Car, MapPin, Facebook, Instagram, Twitter, Phone, Banknote } from 'lucide-react';
import PartnerSlider from './PartnerSlider';
import NavBar from './NavBar';
import Footer from './Footer';
import DevPromo from './DevPromo';
// import { AlertCircle, BookOpen, Briefcase, FileText, PieChart, Users, Sun, Moon, Globe, Car, MapPin, Phone } from 'lucide-react';

// Composant pour le modèle 3D
const AIModel = () => {
  const { scene } = useGLTF('/Desk.glb');
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[0.6, 0.6, 0.6]} position={[0, -3.5, 0]} />;
};

const SecondAIModel = () => {
  const gltf = useGLTF('/cube.glb');
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // This is just an example; you can customize the animation as needed
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={[8, 8, 8]} position={[0, -1, 0]} />;
};
const FloatingText = ({ children }) => {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 1.5; // Ajusté la position verticale
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={0.5}
      color="#e94560"
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
};
const Map = () => {
  return (
    <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=2.3343,48.8583,2.3593,48.8733&layer=mapnik"
      ></iframe>
    </div>
  );
};


// Composant pour l'animation du texte
const AnimatedText = ({ children }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.molasses,
  });
  return <animated.div style={spring}>{children}</animated.div>;
};

// Composant pour le parallax
const Parallax = ({ children, speed = 1 }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ transform: `translateY(${scrollY * speed}px)` }}>
      {children}
    </div>
  );
};

// Composant Logo 3D animé
const AnimatedLogo = () => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
  });
  return (
    <mesh ref={mesh}>
      <Text font="/path/to/your/font.ttf" fontSize={1.5} color="#e94560">
        AE2C
      </Text>
    </mesh>
  );
};

// Composant pour les éléments flottants en arrière-plan
const FloatingElements = () => {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });
  return (
    <group ref={group}>
      <Box args={[0.5, 0.5, 0.5]} position={[2, 1, -2]}>
        <meshStandardMaterial color="#0f3460" opacity={0.7} transparent />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[-2, -1, 1]}>
        <meshStandardMaterial color="#e94560" opacity={0.7} transparent />
      </Box>
      <Box args={[0.2, 0.2, 0.2]} position={[1, -2, 2]}>
        <meshStandardMaterial color="#ff9a3c" opacity={0.7} transparent />
      </Box>
    </group>
  );
};

// Composants Card simplifiés
const Card = ({ children, className, ...props }) => (
  <div className={`bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>{children}</div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={className} {...props}>{children}</div>
);

// Composant pour les cartes de services
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
        {/* Icône avec un fond de gradient */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center shadow-lg mb-6">
          <Icon className="text-white w-10 h-10 animate-bounce" />
        </div>

        {/* Titre avec couleur noire */}
        <h3 className="text-2xl font-semibold mb-4 text-black">
          {title}
        </h3>

        {/* Description avec couleur noire */}
        <p className="text-black mb-4">
          {description}
        </p>

        {/* Bouton d'action */}
        <button
          className="px-4 py-2 mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow duration-300"
        >
          {language === 'fr' ? "En savoir plus" : "Learn more"}
        </button>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute -top-5 -right-5 w-24 h-24 bg-pink-400 opacity-30 blur-2xl rounded-full"></div>
      <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-orange-400 opacity-30 blur-2xl rounded-full"></div>
    </animated.div>
  );
};


// Composant principal Accueil
const Accueil = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  const buttonSpring = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.05 });
        await next({ scale: 1 });
      }
    },
    config: config.wobbly,
  });
  const services = [
    { title: language === 'fr' ? "Expertise Comptable et Financière" : "Accounting and Financial Expertise", description: language === 'fr' ? "La tenue de la comptabilité et l'établissement du bilan représentent le métier de base de l'expert comptable. Cette mission est adaptée à chaque entreprise." : "Bookkeeping and balance sheet preparation are the core business of the chartered accountant. This mission is tailored to each company.", icon: BookOpen },
    { title: language === 'fr' ? "Audit et Commissariat aux comptes" : "Audit and Statutory Auditing", description: language === 'fr' ? "Les missions d'audit et de commissariat aux comptes font partie des activités principales de notre bureau. Elles concernent plusieurs secteurs." : "Audit and statutory auditing missions are part of our office's main activities. They concern several sectors.", icon: Briefcase },
    { title: language === 'fr' ? "Analyse Financière" : "Financial Analysis", description: language === 'fr' ? "Notre équipe d'experts réalise des analyses financières approfondies pour guider vos décisions stratégiques." : "Our team of experts conducts in-depth financial analyses to guide your strategic decisions.", icon: PieChart },
    { title: language === 'fr' ? "Conseil en Gestion" : "Management Consulting", description: language === 'fr' ? "Nous offrons des conseils personnalisés pour optimiser la gestion de votre entreprise et améliorer sa performance." : "We offer personalized advice to optimize your company's management and improve its performance.", icon: Users },
    { title: language === 'fr' ? "Fiscalité d'Entreprise" : "Corporate Taxation", description: language === 'fr' ? "Notre expertise en fiscalité vous aide à naviguer dans les complexités du système fiscal et à optimiser votre situation." : "Our tax expertise helps you navigate the complexities of the tax system and optimize your situation.", icon: Banknote },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800'} transition-colors duration-500`}>      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md">
       <NavBar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      </header>

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <AIModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
           
           <FloatingText>
              {language === 'fr' ? "Laissez-nous l'audit et la comptabilité et concentrez-vous sur vos affaires" : "Leave the audit and accounting to us and focus on your business"}
            
            </FloatingText>
          </Canvas>
          
          <div className="text-center z-10">
            
            <p className="text-2xl mb-8 font-experimental">
              {language === 'fr' ? "Nous sommes à vos côtés pour réussir ensemble" : "We're by your side to succeed together"}
            </p>
            <animated.button
              style={buttonSpring}
              className={`px-8 py-4 bg-gradient-to-r from-primary to-secondary ${isDarkMode ? 'text-white' : 'text-gray-900'} rounded-full font-bold hover:from-secondary hover:to-primary transition-all shadow-lg`}
            >
              {language === 'fr' ? "Contactez-nous" : "Contact us"}
            </animated.button>
          </div>
        </section>
        
        <div className="text-center z-10">
          
        <div className="flex w-full max-w-4xl"  >
          <Canvas className="w-1/2" style={{ position: 'relative',  left: 0, width: '100%', height: '100%' }} >
            <ambientLight intensity={0.5} />
            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <SecondAIModel />
              
            </Suspense>
          </Canvas>
          
          <div className="w-1/2 flex flex-col items-start justify-center p-4">
           
            <AnimatedText>
              <p className="text-xl">
                {language === 'fr' 
                  ? "Le cabinet AE2C est inscrit à l'Ordre des Comptables Agréés et Experts-Comptables Agréés du Mali. AE2C a pour ambition d'aider les dirigeants d'entreprise à décider en toute sécurité et d'accompagner les entrepreneurs à chaque étape de leur activité."
                  : "AE2C is registered with the Order of Certified Public Accountants and Chartered Accountants of Mali. AE2C's ambition is to help business leaders make decisions safely and support entrepreneurs at every stage of their activity."}
              </p>
            </AnimatedText>
          </div>
          </div>
          </div>
         


          <section className="py-20 container mx-auto">
  <h2 className="text-4xl font-bold text-center mb-12">{language === 'fr' ? 'Nos Services' : 'Our Services'}</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        description={service.description}
        icon={service.icon}
        language={language}  
      />
    ))}
  </div>
</section>


        <section className="py-20 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{language === 'fr' ? 'Où nous trouver' : 'Where to find us'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Map />
            <div>
              <h3 className="text-2xl font-bold mb-4">{language === 'fr' ? 'Coordonnées' : 'Contact Information'}</h3>
              <p className="mb-2"><MapPin className="inline mr-2" /> 123 Rue de la Comptabilité, 75001 Paris, France</p>
              <p className="mb-2"><Phone className="inline mr-2" /> +33 1 23 45 67 89</p>
              <h3 className="text-2xl font-bold mt-8 mb-4">{language === 'fr' ? 'Suivez-nous' : 'Follow us'}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-secondary"><Facebook /></a>
                <a href="#" className="text-primary hover:text-secondary"><Instagram /></a>
                <a href="#" className="text-primary hover:text-secondary"><Twitter /></a>
                {/* <a href="#" className="text-primary hover:text-secondary"><TikTok /></a> */}
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingElements />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </section>

        <section className="py-20 container mx-auto">
          <PartnerSlider/>
        </section>
      </main>

      <Footer language={language} />
      <DevPromo />
    </div>
  );
};

export default Accueil;
