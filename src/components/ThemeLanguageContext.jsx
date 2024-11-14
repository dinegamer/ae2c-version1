// src/ThemeLanguageContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const ThemeLanguageContext = createContext();

// Fournisseur de contexte
export const ThemeLanguageProvider = ({ children }) => {
  // Gestion du mode sombre
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Gestion de la langue
  const [language, setLanguage] = useState('fr');

  // Fonction pour basculer le mode sombre
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  // Fonction pour basculer la langue
  const toggleLanguage = () => setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));

  // Optionnel : persister les préférences dans le localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    const savedLang = localStorage.getItem('language');

    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    }

    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    localStorage.setItem('language', language);
  }, [isDarkMode, language]);

  return (
    <ThemeLanguageContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        language,
        toggleLanguage,
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};
