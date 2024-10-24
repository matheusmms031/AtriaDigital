import { useContext, useEffect, useState } from "react";
import { pagesConfigContext } from "../../Contexts/PagesContexts";


export function PageOrganizer() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pagesConfig } = useContext(pagesConfigContext);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down"); // Scroll para baixo
    } else {
      setScrollDirection("up"); // Scroll para cima
    }

    setLastScrollY(currentScrollY); // Atualiza a última posição do scroll
  };

  useEffect(() => {
    // Verifica qual página está selecionada e atualiza o componente correspondente
    const currentPage = pagesConfig.pagination.find(
      (page) => page.name === pagesConfig.select
    );

    if (currentPage) {
      setSelectedElement(currentPage.element);
    }
    window.addEventListener("scroll", handleScroll);

    // Cleanup para remover o evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pagesConfig, lastScrollY]); // Atualiza sempre que pagesConfig mudar

  return <>{selectedElement}</>;
}
