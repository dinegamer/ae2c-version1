import React from 'react';
import { Sun, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react'; // Utilisation de QRCodeCanvas

// Composant pour le recto de la carte
const BusinessCardFront = () => {
  return (
    <div className="w-[800px] h-[350px] bg-white shadow-2xl rounded-lg flex flex-col items-center justify-center p-8 relative" 
      style={{ 
        fontFamily: 'Poppins, sans-serif', 
        border: '1px solid #e0e0e0', // Ajoute une bordure grise subtile
        backgroundImage: 'url(/path-to-your-pattern.svg)', 
        backgroundSize: 'contain', 
        backgroundPosition: 'center',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Renforce l'ombre
      }}>
      <div className="text-5xl font-bold flex items-center mb-4">
        <Sun size={60} className="text-orange-600 mr-4 animate-spin-slow" />
        <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-red-500 text-transparent bg-clip-text">SHAMS DIGITAL</span>
      </div>
      <p className="text-lg text-gray-600 text-center max-w-[80%] tracking-wide leading-tight">
        Innovation digitale sur mesure pour booster votre entreprise
      </p>
      <div className="w-full h-1 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-500 my-6"></div>
    </div>
  );
};

// Composant pour le verso de la carte avec QR code et lien
const BusinessCardBack = () => {
  return (
    <div className="w-[800px] h-[350px] bg-white shadow-2xl rounded-lg flex flex-col justify-between p-8 relative" 
      style={{ 
        fontFamily: 'Poppins, sans-serif', 
        border: '1px solid #e0e0e0', // Bordure grise subtile
        backgroundImage: 'url(/path-to-your-pattern.svg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'bottom',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Renforce l'ombre
      }}>
      <div className="text-left space-y-3">
        <h2 className="text-3xl font-bold text-gray-900">Chamsoudine Thienta</h2>
        <p className="text-lg text-gray-600">CEO</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-md text-gray-700">
        <div className="flex items-center space-x-2">
          <Phone className="text-orange-600" size={24} />
          <p>223 73 44 92 30</p>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="text-orange-600" size={24} />
          <p>teenagerdine@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <Globe className="text-orange-600" size={24} />
          <a href="https://dinegamer.github.io/shamsPortfolio/" className="text-orange-600 hover:underline">shamsPortfolio</a>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="text-orange-600" size={24} />
          <p>Hamdallaye ACI 2000 / Baguineda gendarmerie</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 space-y-2">
        {/* Ajout du QR code dynamique */}
        <QRCodeCanvas value="https://dinegamer.github.io/shamsPortfolio/" size={80} />
        {/* Lien avec couleur plus harmonieuse */}
        <a href="https://dinegamer.github.io/shamsPortfolio/" className="text-orange-600 hover:underline">https://dinegamer.github.io/shamsPortfolio/</a>
      </div>
    </div>
  );
};

// Composant principal qui affiche les deux côtés de la carte
const ShamsDigitalBusinessCard = () => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center min-h-screen bg-gray-100 p-4">
      <BusinessCardFront />
      <BusinessCardBack />
    </div>
  );
};

export default ShamsDigitalBusinessCard;
