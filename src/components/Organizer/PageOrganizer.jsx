import { pagesConfigContext } from "../../Contexts/PagesContexts";
import { useContext, useEffect, useState } from "react";

export function PageOrganizer() {
  const pagesConfig = useContext(pagesConfigContext);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    // Atualiza o elemento selecionado sempre que o pagesConfig mudar
    const currentPage = pagesConfig[0]['pagination'].find((array) => array.name === pagesConfig[0]['select']);
    console.log(currentPage)
    if (currentPage) {
      setSelectedElement(currentPage.element);
    }
  }, [pagesConfig]); // O useEffect será acionado sempre que o pagesConfig mudar

  return (
    <>
      {selectedElement}
    </>
  );
}
