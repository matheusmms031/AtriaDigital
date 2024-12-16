import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import video from "../../assets/1015(4).mp4";
import Carousel from "../../components/Carousel/Carousel";
import { Ahistoria, Missao, SobreAtria } from "./sections/Sections";

export default function Sobre() {
    const [pageSelect, setPageSelect] = useState("Sobre");

    const pages = {
        "Sobre": SobreAtria,
        "Historia": Ahistoria,
        "Missão": Missao,
    };

    const PageComponent = pages[pageSelect];

    const variants = {
        select: {backgroundColor: "#FF7B00", color: "#fff"},
        notSelect: {backgroundColor: "#fff", color: "#FF7B00"}
    };

    return (
        <div className={styles.home}>
            <BoxGeneric>
                <motion.div className={styles.contentWrapper}
                >
                    <motion.ul className={styles.sobreMenu}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        delay: 0.3,
                    }}>
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{
                                duration: 1.5,
                                type: "spring",
                                delay: 0.3,
                            }}>
                            <motion.li
                                style={{ borderRadius: "30px 0px 0px 30px" }}
                                onClick={() => setPageSelect("Sobre")}
                                whileHover={{ backgroundColor: "#FF7B00", color: "#fff" }}
                                variants={variants}
                                animate={pageSelect === "Sobre"? "select" : "notSelect" }
                            >
                                Sobre a Átria
                            </motion.li>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,}}
                            animate={{ opacity: 1,}}
                            transition={{
                                duration: 1.5,
                                type: "spring",
                                delay: 0.3,
                            }}>
                            <motion.li
                                whileHover={{ backgroundColor: "#FF7B00", color: "#fff" }}
                                onClick={() => setPageSelect("Missão")}
                                variants={variants}
                                animate={pageSelect === "Missão"? "select" : "notSelect" }
                            >
                                Missão
                            </motion.li>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,}}
                            animate={{ opacity: 1,}}
                            transition={{
                                duration: 1.5,
                                type: "spring",
                                delay: 0.3,
                            }}>
                            <motion.li
                                whileHover={{ backgroundColor: "#FF7B00", color: "#fff" }}
                                style={{ borderRadius: "0px 30px 30px 0px" }}
                                onClick={() => setPageSelect("Historia")}
                                variants={variants}
                                animate={pageSelect === "Historia"? "select" : "notSelect" }
                            >
                                Vantagens
                            </motion.li>
                        </motion.div>
                    </motion.ul>

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
