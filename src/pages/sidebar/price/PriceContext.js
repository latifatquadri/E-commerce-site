import React, { createContext, useState } from 'react';

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const togglePriceRange = (priceRange) => {
    setSelectedPriceRanges((prevRanges) => {
      if (prevRanges.includes(priceRange)) {
        return prevRanges.filter((range) => range !== priceRange);
      } else {
        return [...prevRanges, priceRange];
      }
    });
  };

  return (
    <PriceContext.Provider value={{ selectedPriceRanges, togglePriceRange }}>
      {children}
    </PriceContext.Provider>
  );
};
