import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Plus, Minus } from 'lucide-react';
import NavBar from './NavBar';
import Footer from './Footer';
import DevPromo from './DevPromo';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

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

// AccordionItem Component for each reference card
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentSpring = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 },
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
        <div className="p-6">
          <p className="text-black">{content}</p>
        </div>
      </animated.div>
    </div>
  );
};

const NosReferences = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [openIndex, setOpenIndex] = useState(0);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Data for references
  const references = [
    {
      title: 'Audit',
      content: `
        Projet de Développement:
        - Projet d’Appui à la Décentralisation et au Développement Economique Régional – PADDER
        - Programme National de Lutte contre le Paludisme – Fonds Global – PNLP/GF
        - AVSF/AFAVUCO
        - Projet du Plan d’Action de Gestion des Zones Humides – PAZU ALPHALOG / ASS GROUPE DEVELOPPEMENT
        - PACMO PRODEJ
        - APCAM / AGRITERRA, APCAM/ BANQUE MONDIAL
        - Réseau Plaidoyer Lobbying – RPL
        - FENASCOM, RMAP+
        - OPIB, ASDAP
        - Commissariat au Développement Institutionnel – CDI
        - Population International Services – PSI (Evaluation financière, comptable et organisationnelle)
      `,
    },
    {
      title: 'Sociétés commerciales et industrielles',
      content: `
        - Société Nationale Importation et Exportation de la Mauritanie – SONIMEX
        - Société d’Exploitation de Sables et de Gravier du Mali – SESG
        - Centre d’Appui à la Microfinance et au Développement – CAMID
        - JEMENI
        - Caisse « Kanu Jiginè » de KAMANI – Région de Koro
      `,
    },
    {
      title: 'Gestion de projet',
      content: `
        - African Development Foundation – ADF (Partenaire technique)
        - Agence pour la Promotion et l’Emploi des Jeunes – APEJ (Partenaire technique pour la finalisation des plans d’affaires et le suivi des projets financés)
      `,
    },
    {
      title: 'Commissariat aux comptes',
      content: `
        Sociétés commerciales, industrielles et projets de développement:
        - YIRIWA SA, Office de Classement du Coton du Mali – OCC
        - BSIC Mali SA (Banque Sahélo Saharienne pour l’Investissement et le Commerce) (Co Commissaire aux comptes)
        - BICIM Mali (Banque Internationale pour le commerce et l’Industrie au Mali)
        - Rodrigues & Chamacho Construçoes Mali SAU
        - Banque pour le Commerce et l’Industrie « BCI », 2008 (Relecture du manuel de procédures)
        - Société Financière Rurale « SRF » SA de Tjili, Haoussa, Gourma, Sahel (Audit comptable et financier)
      `,
    },
    {
      title: 'Renforcement des capacités',
      content: `
        - Formation en technique de passation de marchés des ONG partenaires de Christian AID
        - Formation des ONG en comptabilité et techniques de montage de plan d’affaires
        - Formation en techniques comptables et d’analyse financière des IMF
        - Formation sur le logiciel TOMPRO pour la gestion des projets
      `,
    },
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
              {language === 'fr' ? 'Nos Références' : 'Our References'}
            </FloatingText>
          </Canvas>
        </section>

        {/* Animated paragraph */}
        <section className="text-center mb-8">
          <animated.p className="text-xl text-gray-700">
            {language === 'fr'
              ? 'Le cabinet AE2C a su développer et parfaire ses compétences au fil des années grâce à la confiance de ses partenaires...'
              : 'AE2C has developed and refined its skills over the years thanks to the trust of its partners...'}
          </animated.p>
        </section>

        {/* Reference Cards */}
        <section className="mt-8">
          {references.map((reference, index) => (
            <AccordionItem
              key={index}
              title={reference.title}
              content={reference.content}
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

export default NosReferences;
