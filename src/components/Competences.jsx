import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Plus, Minus } from 'lucide-react'; // Icons for + and -
import NavBar from './NavBar';
import Footer from './Footer';
import DevPromo from './DevPromo';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const AccordionItem = ({ title, content, imageUrl, isOpen, onClick }) => {
  const contentSpring = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: isOpen ? 200 : 0,
      opacity: isOpen ? 1 : 0,
    },
    config: { tension: 300, friction: 30 },
  });

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl mb-6">
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold text-xl"
      >
        {title}
        {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </button>
      <animated.div style={contentSpring}>
        <div className="p-6 flex flex-col md:flex-row">
          {imageUrl && <img src={imageUrl} alt={title} className="w-full md:w-1/3 mb-4 md:mb-0" />}
          <div className="md:ml-6">
            <p className="text-black">{content}</p>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

const FloatingText = ({ children }) => {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 1.5;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={1.8}
      color="#e94560"
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
};

const NosCompetences = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const competences = [
    {
      title: language === 'fr' ? 'Expertise Comptable' : 'Accounting Expertise',
      content: language === 'fr' ? `
        La tenue de la comptabilité et l’établissement du bilan représentent le métier de base de l’expert comptable. 
        Cette mission est adaptée à chaque entreprise.
        - mise en place d’un plan comptable adapté à votre entreprise
        - tenue de la comptabilité
        - mise en place d’organisations et méthodes comptables, manuel de procédures et de gestion;
        - établissement de situations périodiques, suivi, contrôle des comptabilités;
        - établissement des documents de synthèse et comptes annuels (bilan, compte de résultat, TAFIRE, annexes);
        - assistance et supervision comptable;
        - assistance juridique, fiscale et sociale
      ` : `
        Keeping accounts and preparing balance sheets are the core business of accountants.
        This service is adapted to each company.
        - Set up of a chart of accounts adapted to your company
        - Bookkeeping
        - Implementation of accounting methods and procedures, management procedures manual
        - Preparation of periodic financial reports, monitoring and control of accounts
        - Preparation of financial statements (balance sheet, income statement, annexes)
        - Accounting supervision and assistance
        - Legal, tax and social assistance
      `,
      imageUrl: 'https://static.poly.pizza/35c49926-a03a-4609-83a2-54a8d8e04ce8.webp',
    },
    {
      title: language === 'fr' ? 'Audit et Commissariat aux Comptes' : 'Audit and Statutory Auditing',
      content: language === 'fr' ? `
        Les missions d’audit et de commissariat aux comptes font partie des activités principales de notre bureau. 
        Elles concernent les secteurs suivants:
        - Audit des projets de développement
        - Audit des sociétés industrielles et commerciales
        - Audit des institutions de micro finances
        - Audit des banques, assurances et institutions de prévoyance sociale
        - Audit des structures étatiques ou gouvernementales
      ` : `
        Audit and statutory audit missions are part of our firm's main activities.
        They cover the following sectors:
        - Development project audits
        - Industrial and commercial companies audits
        - Microfinance institutions audits
        - Banks, insurance, and social security institutions audits
        - Government and state-owned entities audits
      `,
      imageUrl: '/images/audit.jpg',
    },
    {
      title: language === 'fr' ? 'Diagnostic et Management d\'entreprises' : 'Business Diagnosis and Management',
      content: language === 'fr' ? `
        Nous proposons un accompagnement modulable pour la création et la gestion d'entreprise:
        - Aide à la création d'entreprises
        - Etude de faisabilité / audit de rachat
        - Elaboration de business plan
        - Assistance en gestion des PME/PMI
        - Mise en place de SIG et outils de gestion
        - Comptabilité analytique et budgétaire
      ` : `
        We offer modular support for business creation and management:
        - Business creation assistance
        - Feasibility studies / acquisition audits
        - Business plan development
        - SME/SMI management support
        - Implementation of management information systems (MIS)
        - Analytical and budgetary accounting
      `,
      imageUrl: '/images/diagnostic-management.jpg',
    },
    {
      title: language === 'fr' ? 'Systèmes d\'Information' : 'Information Systems',
      content: language === 'fr' ? `
        Nos services couvrent:
        - Mise en place de systèmes d’information
        - Adaptation des processus aux nouvelles contraintes réglementaires
        - Mise en œuvre de solutions informatiques
        - Analyse et évolution des systèmes d’information
      ` : `
        Our services cover:
        - Implementation of information systems
        - Adaptation of processes to new regulatory constraints
        - Implementation of IT solutions
        - Information systems analysis and evolution
      `,
      imageUrl: '/images/systemes-information.jpg',
    },
    {
      title: language === 'fr' ? 'Formation et Renforcement des Capacités' : 'Training and Capacity Building',
      content: language === 'fr' ? `
        Nos modules de formation incluent:
        - Techniques comptables
        - Conseil en gestion et fiscalité
        - Informatique appliquée et organisation
        - Développement de projets
      ` : `
        Our training modules include:
        - Accounting techniques
        - Management and tax advice
        - Applied IT and organization
        - Project development
      `,
      imageUrl: '/images/formation.jpg',
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800'} transition-colors duration-500`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md">
        <NavBar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          language={language} 
          toggleLanguage={toggleLanguage} 
        />
      </header>

      <main className="pt-24 pb-20 container mx-auto">
        <section className="text-center mb-12">
          <Canvas>
            <FloatingText>
              {language === 'fr' ? 'Nos Compétences' : 'Our Skills'}
            </FloatingText>
          </Canvas>
        </section>

        <section className="text-center mb-8">
          <animated.p className="text-xl text-gray-700">
            {language === 'fr'
              ? 'Le cabinet AE2C a su développer et parfaire ses compétences au fil des années...'
              : 'AE2C has developed and perfected its skills over the years...'}
          </animated.p>
        </section>

        <section className="mt-8">
          {competences.map((competence, index) => (
            <AccordionItem
              key={index}
              title={competence.title}
              content={competence.content}
              imageUrl={competence.imageUrl}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </section>
      </main>

      <Footer />
      <DevPromo />
    </div>
  );
};

export default NosCompetences;
