import { useContext, useEffect, useState } from "react";
import { pagesConfigContext } from "../../Contexts/PagesContexts";


export function PageOrganizer() {
  const { pagesConfig } = useContext(pagesConfigContext);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    // Verifica qual página está selecionada e atualiza o componente correspondente
    const currentPage = pagesConfig.pagination.find(
      (page) => page.name === pagesConfig.select
    );

    if (currentPage) {
      setSelectedElement(currentPage.element);
    }
    // Cleanup para remover o evento quando o componente for desmontado
  }, [pagesConfig]); // Atualiza sempre que pagesConfig mudar

  return <>{selectedElement}</>;
}
