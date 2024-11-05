import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import video from "../../assets/1015(4).mp4"
import Carousel from "../../components/Carousel/Carousel";

// Array de imagens para o carrossel


export default function Sobre() {
    // O componente Sobre é responsável por renderizar a página "Sobre"

    return (
        <div className={styles.home}>
            {/* BoxGeneric é provavelmente um componente de layout reutilizável */}
            <BoxGeneric>
                <section>
                    <div className={styles.contentWrapper}>
                        {/* AnimatePresence é usado para animações de saída, mas não está sendo utilizado aqui */}
                        <div className={styles.pageContent}>
                            <div className={styles.textContent}>
                                <div className={styles.boxtext}>
                                    {/* Título animado usando framer-motion */}
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
                                        {/* Parágrafos de descrição animados */}
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
                                            A AtriaDigital é uma empresa de telecomunicações dedicada a fornecer internet de fibra óptica de alta velocidade para bairros de luxo em Belo Horizonte. Com um compromisso de qualidade e excelência, a AtriaDigital entende as demandas de clientes que buscam estabilidade, rapidez e uma experiência de navegação premium. 
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
                                            Ao focar em regiões específicas, a AtriaDigital personaliza suas soluções para atender às necessidades tecnológicas dos clientes mais exigentes, acompanhando o avanço de tecnologias como automação residencial, streaming em múltiplos dispositivos e ambientes de trabalho remoto.
                                        </motion.p>
                                    </div>
                                </div>
                                {/* Vídeo animado */}
                                <motion.video src={video} className={styles.video} autoPlay muted loop style={{ width: "30vmax", height: "18vmax", display: "block", position: "relative" }}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.2,
                                }}/>
                            </div>
                            {/* Este é o espaço onde o carrossel deve ficar */}
                            {/* Nota: O componente Carousel está importado mas não está sendo utilizado */}
                        </div>
                    </div>
                </section>
            </BoxGeneric>
        </div>
    );
}

