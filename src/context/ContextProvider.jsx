import { createContext, useContext, useState } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeThumb, setActiveThumb] = useState(0);

  const handleActiveThumb = idx => setActiveThumb(idx);

  return (
    <stateContext.Provider
      value={{
        activeThumb,
        handleActiveThumb,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
