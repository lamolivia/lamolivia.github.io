import React, { createContext, useState, useEffect, useContext } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windowContext, setWindowContext] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  }); // 768px as a common mobile breakpoint

  const updateWindowStatus = () => {
    setWindowContext({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowStatus);

    return () => {
      window.removeEventListener("resize", updateWindowStatus);
    };
  }, []);

  return (
    <WindowContext.Provider value={windowContext}>
      {children}
    </WindowContext.Provider>
  );
};

// Custom hook to access mobile mode state
export const useWindowContext = () => useContext(WindowContext);
