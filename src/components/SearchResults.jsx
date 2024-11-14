import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8">Résultats de recherche pour : {query}</h2>
      {/* Vous pouvez afficher ici les résultats de recherche */}
      <p>Affichez ici les résultats correspondant à la recherche "{query}".</p>
    </div>
  );
};

export default SearchResults;
