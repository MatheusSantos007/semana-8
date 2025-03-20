import { createContext, useState, useEffect } from "react";

export const InstituicoesContext = createContext();

export const InstituicoesProvider = ({ children }) => {
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/paraiba")
      .then((res) => res.json())
      .then((data) => setInstituicoes(data))
      .catch((err) => console.error("Erro ao carregar dados:", err));
  }, []);

  return (
    <InstituicoesContext.Provider value={{ instituicoes, setInstituicoes }}>
      {children}
    </InstituicoesContext.Provider>
  );
};
