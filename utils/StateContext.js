"use client"

import React, { useState } from 'react';

const StateContext = React.createContext();

export const StateProvider = ({ children }) => {

  const [sharedState, setSharedState] = useState({
    theme: 'dark',
  });

  const updateSharedState = (newState) => {
    setSharedState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <StateContext.Provider value={{ sharedState, updateSharedState }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
