import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = ({ language }) => {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-4">{language === 'fr' ? 'Contact' : 'Contact'}</h3>
          <p className="mb-2 flex items-center"><MapPin className="mr-2" /> Torokorobougou Rue 112 Porte 998</p>
          <p className="mb-2 flex items-center"><Phone className="mr-2" /> (+223) 20 28 23 81 / 66 71 57 97</p>
          <p className="mb-2 flex items-center"><Mail className="mr-2" /> cae2c@ae2cmali.com</p>
          <p className="flex items-center"><Globe className="mr-2" /> <a href="http://www.ae2cmali.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">www.ae2cmali.com</a></p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">{language === 'fr' ? 'Liens utiles' : 'Useful Links'}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-primary flex items-center">
                CGU
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary flex items-center">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary flex items-center">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary flex items-center">
                Webmail
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4">{language === 'fr' ? 'Suivez-nous' : 'Follow Us'}</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-primary transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p>&copy; 2024 AE2C. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
      </div>
    </footer>
  );
};

export default Footer;
