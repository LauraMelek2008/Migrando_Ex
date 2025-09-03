import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

export const ThemeContext = ({ children }) => {  // ⬅️ agora o Provider tem o mesmo nome
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : null;
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Context.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => React.useContext(Context);
