import { createContext, useState } from "react";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Planos from "../pages/Planos/Planos";
import Contato from "../pages/Contato/Contato";

// Criar o contexto
export const pagesConfigContext = createContext();

// Provider do contexto
export function PagesConfigProvider({ children }) {
  const [pagesConfig, setPagesConfig] = useState({
    pagination: [
      { path: "/", element: <Home />, name: "Home" },
      { path: "/sobre", element: <Sobre />, name: "Sobre" },
      { path: "/planos", element: <Planos/>, name: "Planos" },
      { path: "/contato", element: <Contato/>, name:"Contato"}
    ],
    select: "Home" // Página inicial selecionada
  });

  // Função para atualizar a página selecionada
  const updateSelectedPage = (newPageName) => {
    setPagesConfig((prevConfig) => ({
      ...prevConfig,
      select: newPageName // Atualiza a página selecionada
    }));
  };

  return (
    <pagesConfigContext.Provider value={{ pagesConfig, updateSelectedPage }}>
      {children}
    </pagesConfigContext.Provider>
  );
}
