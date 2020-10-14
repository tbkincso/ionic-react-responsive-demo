import React, { createContext, useContext, useState, useEffect } from "react";

export const WindowDimensionsCtx = createContext(null);

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const WindowDimensionsProvider = ({ children }: any) => {
  const [dimensions, setDimensions] = useState(windowDims());
  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDims());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WindowDimensionsCtx.Provider value={dimensions as any}>
      {children}
    </WindowDimensionsCtx.Provider>
  );
};

export default WindowDimensionsProvider;

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsCtx);
};
