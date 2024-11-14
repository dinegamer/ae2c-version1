import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Accueil from './components/Acceuil';
import About from './components/About';
import NosCompetences from './components/Competences';
import { ThemeLanguageProvider } from './components/ThemeLanguageContext';
import NosRessources from './components/Ressources';
import NosReferences from './components/References';
import ShamsDigitalBusinessCard from './components/ShamsDigitalBusinessCard';


// Placeholder for 3D elements (you'd use Three.js or similar in a real implementation)
import SearchResults from './components/SearchResults';
const ThreeDLogo = () => (
  <div style={{ width: 200, height: 200, background: '#e94560', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ color: 'white' }}>Ae2C</h1>
  </div>
);

// const Navbar = ({ currentLang, toggleLang, isDarkMode, toggleDarkMode }) => (
//   <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: isDarkMode ? '#1a1a2e' : '#f0f0f0' }}>
//     <div>
//       <Link to="/" style={{ color: isDarkMode ? 'white' : 'black', marginRight: '1rem' }}>Accueil</Link>
//       <Link to="/qui-sommes-nous" style={{ color: isDarkMode ? 'white' : 'black', marginRight: '1rem' }}>Qui sommes-nous</Link>
//       <Link to="/nos-competences" style={{ color: isDarkMode ? 'white' : 'black', marginRight: '1rem' }}>Nos compétences</Link>
//       <Link to="/nos-ressources" style={{ color: isDarkMode ? 'white' : 'black', marginRight: '1rem' }}>Nos ressources</Link>
//       <Link to="/nos-references" style={{ color: isDarkMode ? 'white' : 'black' }}>Nos références</Link>
//     </div>
//     <div>
//       <button onClick={toggleLang}>{currentLang === 'en' ? 'FR' : 'EN'}</button>
//       <button onClick={toggleDarkMode}>{isDarkMode ? '☀️' : '🌙'}</button>
//     </div>
//   </nav>
// );

const Home = ({ lang }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1>{lang === 'en' ? 'Welcome to Ae2C' : 'Bienvenue chez Ae2C'}</h1>
    <ThreeDLogo />
    <p>{lang === 'en' ? 'Your trusted accounting partner' : 'Votre partenaire comptable de confiance'}</p>
  </motion.div>
);


const QuiSommesNous = ({ lang }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1>{lang === 'en' ? 'About Us' : 'Qui sommes-nous'}</h1>
    <p>{lang === 'en' ? 'Ae2C is a leading accounting firm...' : 'Ae2C est un cabinet comptable de premier plan...'}</p>
  </motion.div>
);



// const NosRessources = ({ lang }) => (
//   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//     <h1>{lang === 'en' ? 'Our Resources' : 'Nos ressources'}</h1>
//     <p>{lang === 'en' ? 'We have a team of experienced professionals...' : 'Nous avons une équipe de professionnels expérimentés...'}</p>
//   </motion.div>
// );

// const NosReferences = ({ lang }) => (
//   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//     <h1>{lang === 'en' ? 'Our References' : 'Nos références'}</h1>
//     <p>{lang === 'en' ? 'Trusted by leading companies...' : 'Fait confiance par des entreprises de premier plan...'}</p>
//   </motion.div>
// );

const App = () => {
  const [lang, setLang] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLang = () => setLang(lang === 'en' ? 'fr' : 'en');
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeLanguageProvider>
    <Router>
      <div style={{ 
        minHeight: '100vh',
        background: isDarkMode ? 'linear-gradient(to bottom right, #1a1a2e, #16213e)' : 'linear-gradient(to bottom right, #f0f0f0, #e0e0e0)',
        color: isDarkMode ? 'white' : 'black',
        transition: 'background 0.3s ease'
      }}>
        {/* <Navbar currentLang={lang} toggleLang={toggleLang} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
        <Routes>
          <Route path="/" element={<Accueil lang={lang} />} />
          <Route path="/qui-sommes-nous" element={<About lang={lang} />} />
          <Route path="/nos-competences" element={<NosCompetences lang={lang} />} />
          <Route path="/nos-ressources" element={<NosRessources lang={lang} />} />
          <Route path="/nos-references" element={<NosReferences lang={lang} />} />
          <Route path="/search" component={SearchResults} /> {/* Route pour les résultats de recherche */}
          {/* } />
          <Route path="/nos-ressources" element={<NosRessources lang={lang} />} />
          <Route path="/nos-references" element={<NosReferences lang={lang} />} /> */}
        </Routes>
      </div>
    </Router>
    </ThemeLanguageProvider>
  );
};

export default App;