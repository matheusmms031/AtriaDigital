import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Chip } from "@mui/material";
import video from "../../assets/1015(4).mp4"
import Carousel from "../../components/Carousel/Carousel";
import img1 from "../../assets/imagem1.jpeg"
import img2 from "../../assets/imagem2.jpg"
import img3 from "../../assets/imagem3.jpg"
import img4 from "../../assets/imagem4.jpg"

const images = [
    img1,
    img2,
    img3,
]

export default function Sobre() {

    return (
        <div className={styles.home}>
            <BoxGeneric>
                <section>
                    <div className={styles.contentWrapper}>
                        {/* AnimatePresence para animação de saída */}
                        <div className={styles.pageContent}>
                            <div className={styles.textContent}>
                                <div className={styles.boxtext}>
                                    <motion.div className={styles.titles}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 1.5,
                                        type: "spring",
                                        delay: 0.1,
                                    }}
                                    >
                                        <h1
                                            className={styles.mainHeading}
                                        >
                                            Sobre a AtriaDigital
                                        </h1>
                                        <p>Um pouco do que somos</p>
                                    </motion.div>
                                    <div className={styles.boxDescriptions}>
                                        <motion.p
                                            className={styles.description}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                type: "spring",
                                                delay: 0.2,
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                            tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget
                                            fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis
                                            purus ipsum, elementum eget elementum quis, blandit et ipsum.
                                            Maecenas sed nisi eget dui euismod accumsan.
                                        </motion.p>
                                        <motion.p
                                            className={styles.description}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                type: "spring",
                                                delay: 0.2,
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                            tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget
                                            fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis
                                            purus ipsum, elementum eget elementum quis, blandit et ipsum.
                                            Maecenas sed nisi eget dui euismod accumsan.
                                        </motion.p>
                                    </div>
                                </div>
                                <motion.video src={video} className={styles.video} autoPlay muted loop style={{ width: "30vmax", height: "18vmax", display: "block", position: "relative" }}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.2,
                                }}/>
                            </div>
                            <Carousel
                            images={images}
                            />
                        </div>
                    </div>
                </section>
            </BoxGeneric>
        </div>
    );
}
