import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Ahistoria, SobreAtria } from "./sections/Sections";

export default function Sobre() {
    const [pageSelect, setPageSelect] = useState("Sobre");

    // Objeto de páginas mapeadas
    const pages = {
        "Sobre": SobreAtria,
        "Historia": Ahistoria
    };

    // Pegue o componente correto com base na seleção
    const PageComponent = pages[pageSelect];

    return (
        <div className={styles.home}>
            <BoxGeneric>
                <section>
                    <div className={styles.contentWrapper}>
                        <ul className={styles.sobreMenu}>
                            <motion.li
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.5,
                                }}
                                onClick={() => setPageSelect("Sobre")}
                            >
                                Sobre a Atria
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.8,
                                }}
                                onClick={() => setPageSelect("Historia")}
                            >
                                A história
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 1.1,
                                }}
                            >
                                Fazer parte
                            </motion.li>
                        </ul>

                        {/* AnimatePresence para animação de saída */}
                        <div className={styles.pageContent}>
                            <AnimatePresence mode="wait">
                                {PageComponent && (
                                    <motion.div
                                        key={pageSelect}  // chave única para identificar o componente
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}  // animação de saída
                                        transition={{
                                            duration: 0.5,
                                            type: "spring",
                                        }}
                                    >
                                        <PageComponent />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </BoxGeneric>
        </div>
    );
}
