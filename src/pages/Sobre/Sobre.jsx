import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import video from "../../assets/1015(4).mp4";
import Carousel from "../../components/Carousel/Carousel";
import { Ahistoria, SobreAtria } from "./sections/Sections";

export default function Sobre() {
    const [pageSelect, setPageSelect] = useState("Sobre");

    const pages = {
        "Sobre": SobreAtria,
        "Historia": Ahistoria
    };

    const PageComponent = pages[pageSelect];

    return (
        <div className={styles.home}>
            <BoxGeneric>
                <motion.div className={styles.contentWrapper}
                    initial={{ backdropFilter: "blur(0px)", backgroundColor: "#0000000" }}
                    animate={{ backdropFilter: "blur(5px)", backgroundColor: "#00000049" }}
                    transition={{
                        duration: 1.5,
                        type: "ease-out",
                    }}
                >
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

                        <div className={styles.pageContent}>
                            <AnimatePresence mode="wait">
                                {PageComponent && (
                                    <motion.div
                                        key={pageSelect}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
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
                </motion.div>
            </BoxGeneric>
        </div>
    );
}
