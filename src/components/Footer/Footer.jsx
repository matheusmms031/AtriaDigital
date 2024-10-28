import styles from './styles.module.scss';
import { pagesConfigContext } from "../../Contexts/PagesContexts";
import { useContext } from 'react';

export default function Footer() {
    const { pagesConfig, updateSelectedPage } = useContext(pagesConfigContext);
    const { pagination, select } = pagesConfig;

    // Encontrar o índice da página atual na lista
    const currentIndex = pagination.findIndex(page => page.name === select);

    // Calcular índices da próxima e da anterior página com comportamento de "ciclo"
    const nextIndex = (currentIndex + 1) % pagination.length;
    const previousIndex = (currentIndex - 1 + pagination.length) % pagination.length;

    // Determinar o nome das páginas anterior e próxima
    const nextPageName = pagination[nextIndex].name;
    const previousPageName = pagination[previousIndex].name;

    return (
        <div className={styles.box}>
            <span onClick={() => updateSelectedPage(previousPageName)}>{previousPageName}</span>
            <span onClick={() => updateSelectedPage(nextPageName)}>{nextPageName}</span>
        </div>
    );
}
