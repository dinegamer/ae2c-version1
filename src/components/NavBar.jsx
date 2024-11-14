import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const NavBar = ({ isDarkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      highlightText(searchTerm);
    }
  };

  const highlightText = (term) => {
    const regex = new RegExp(term, 'gi'); // Crée une regex pour le terme de recherche
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div, span'); // Sélectionne les éléments où effectuer la recherche

    elements.forEach((el) => {
      const innerHTML = el.innerHTML;
      const newHTML = innerHTML.replace(regex, (match) => `<mark>${match}</mark>`); // Remplace les termes trouvés par une version avec <mark> pour surbrillance
      el.innerHTML = newHTML;
    });

    // Défile jusqu'à la première occurrence marquée
    const firstMark = document.querySelector('mark');
    if (firstMark) {
      firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <button onClick={toggleLanguage}>
          {language === 'en' ? 'FR' : 'EN'}
        </button>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div>
        {[
          { name: 'Accueil', path: '/' },
          { name: 'Qui sommes-nous', path: '/qui-sommes-nous' },
          { name: 'Nos compétences', path: '/nos-competences' },
          { name: 'Nos ressources', path: '/nos-ressources' },
          { name: 'Nos références', path: '/nos-references' }
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{
              margin: '0 10px',
              color: isDarkMode ? 'white' : 'black',
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={language === 'fr' ? 'Rechercher...' : 'Search...'}
            style={{
              padding: '5px 10px',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: isDarkMode ? 'white' : 'black',
              color: isDarkMode ? 'white' : 'black',
              backgroundColor: isDarkMode ? '#333' : '#f9f9f9',
              marginRight: '10px'
            }}
          />
          <button type="submit" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <Search size={24} color={isDarkMode ? 'white' : 'black'} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
