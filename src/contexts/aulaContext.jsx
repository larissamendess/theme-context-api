import { createContext, useState } from "react";

export const AulaContext = createContext();

export const AulaContextProvider = ({ children }) => {
  const [mudarTema, setMudarTema] = useState(false);

  return (
    <AulaContext.Provider value={{ mudarTema, setMudarTema }}>
      {children}
    </AulaContext.Provider>
  );
};
