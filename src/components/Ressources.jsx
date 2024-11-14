import React, { useRef, useState } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useSpring, animated } from 'react-spring';
import NavBar from './NavBar';
import Footer from './Footer';
import DevPromo from './DevPromo';

// FloatingText Component for the Title
const FloatingText = ({ children }) => {
  const textRef = useRef();
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 1.5;
    }
  });

  return (
    <Text ref={textRef} fontSize={1.8} color="#e94560" anchorX="center" anchorY="middle">
      {children}
    </Text>
  );
};

// Component for the Manager with animated appearance
const Manager = ({ name, description, imageUrl }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 300, friction: 40 },
    delay: 200,
  });

  return (
    <animated.div style={springProps} className="flex flex-col md:flex-row items-center mb-16">
      <img src={imageUrl} alt={name} className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-8" />
      <div className="text-left">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </animated.div>
  );
};

// Component for team members with image and description animations
const TeamMember = ({ name, role, imageUrl, delay }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 250, friction: 30 },
    delay,
  });

  return (
    <animated.div style={springProps} className="text-center mb-12">
      <img src={imageUrl} alt={name} className="w-48 h-48 object-cover rounded-full mx-auto mb-4 transition-all duration-500 transform hover:scale-110" />
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-lg text-gray-600">{role}</p>
    </animated.div>
  );
};

const NosRessources = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  // List of team members
  const departmentHeads = [
    { name: 'Illiassa Cissé', role: 'Directeur du Département Audit-Organisations et Système d’Information', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2020/03/Illiassa-Ciss%C3%A9-300x300.jpg', delay: 200 },
    { name: 'Djibril Doucouré', role: 'Directeur du Département Étude-Développement et Suivi Évaluation', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2020/03/Djibril-Doucour%C3%A9-300x300.jpeg', delay: 300 },
    { name: 'Fatoumata Sissoko', role: 'Responsable Qualité et Renforcement de Capacité', imageUrl: '/images/fatoumata-sissoko.jpg', delay: 400 },
   
  ];
  const technicalTeam = [
    { name: 'Souleymane Coulibaly', role: 'Chef de mission', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2020/03/Souleymane-Coulibaly.jpg', delay: 500 },
    { name: 'Issouf Niare', role: 'Chef de mission', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Issouf-NIARE.jpg', delay: 600 },
    { name: 'Issa Coulibaly', role: 'Administratif/Communications', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Issa.jpg', delay: 700 },
    { name: 'Hanou Dicko', role: 'Chef de mission', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2020/03/Hanou-Dicko.jpg', delay: 800 },
    { name: 'Amadou Niang', role: 'Responsable finances', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Niang.jpg', delay: 900 },
    { name: 'Sambou Dembélé', role: 'Responsable développement de projets', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Sambou-Demb%C3%A9l%C3%A9.jpg', delay: 1000 },
    { name: 'Siaka Camara', role: 'Responsable Suivi et Evaluation', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Siaka-CAMARA.jpg', delay: 1100 },
    { name: 'Ahmed Ouattara', role: 'Auditeur Senior', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2020/05/Ahmed-OUATTARA.jpg', delay: 1200 },
    { name: 'Mariam Maiga', role: 'Secrétaire', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Mariam-MAIGA.jpg', delay: 1300 },
    { name: 'François Niare', role: 'Comptable', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Fran%C3%A7ois-NIARE.jpg', delay: 1400 },
    { name: 'Maimouna Kone', role: 'Comptable', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Maimouna-KONE.jpg', delay: 1500 },
    { name: 'Mahamadou Temo', role: 'Responsable suivi évaluation', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/10/Mahamadou-TEMO.jpg', delay: 1600 },
    { name: 'Adama Toure', role: 'Assistant Administratif', imageUrl: 'https://ae2cmali.com/wp-content/uploads/2019/11/Adama-Tour%C3%A9.jpg', delay: 1700 },
  ];
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800'} transition-colors duration-500`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md">
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} language={language} toggleLanguage={toggleLanguage} />
      </header>

      <main className="pt-24 pb-20 container mx-auto">
        {/* Floating title */}
        <section className="text-center mb-12">
          <Canvas>
            <FloatingText>
              {language === 'fr' ? 'Nos Ressources' : 'Our Resources'}
            </FloatingText>
          </Canvas>
        </section>

        {/* Manager Presentation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{language === 'fr' ? 'Le Gérant associé' : 'Managing Partner'}</h2>
          <Manager
            name="Boubacar KANTE"
            imageUrl="https://ae2cmali.com/wp-content/uploads/2019/10/Boubacar-KANTE-300x300.jpg"
            description={
              language === 'fr'
                ? "Monsieur Boubacar KANTE, le Gérant de AE2C, est Expert Comptable Diplômé régime français. Il justifie de 22 ans d'expérience riche et variée, dont plus de 14 ans dans le secteur bancaire et 10 ans dans l'audit de projets de développement."
                : "Mr. Boubacar KANTE, the Managing Partner of AE2C, is a Certified Public Accountant with over 22 years of experience, including 14 years in banking and 10 years in development project auditing."
            }
          />
        </section>

        {/* Team Members */}
        <section>
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'fr' ? 'Directeurs de Départements et Responsable Qualité' : 'Department Heads and Quality Manager'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departmentHeads.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} delay={member.delay} />
          ))}
        </div>
      </section>

      {/* Section Équipe Technique */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          {language === 'fr' ? 'Équipe Technique' : 'Technical Team'}
        </h2>
        <p className="text-center mb-12">
          {language === 'fr'
            ? 'Le bureau dispose également d’un directeur de mission, de quatre chefs de mission, d’une quinzaine d’auditeurs confirmés et assistants et d’un spécialiste en suivi évaluation et collecte des données. Notre bureau est partenaire agréé de la Société TOMATE pour la commercialisation de ses produits (Tompro – Tom Marché – Tom Stock).'
            : 'The office also has a mission director, four mission leaders, about fifteen experienced auditors and assistants, and a specialist in monitoring, evaluation, and data collection. Our office is an accredited partner of Société TOMATE for the commercialization of its products (Tompro – Tom Marché – Tom Stock).'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalTeam.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} delay={member.delay} />
          ))}
        </div>
      </section>
      </main>

      <Footer />
      <DevPromo />
    </div>
  );
};

export default NosRessources;
