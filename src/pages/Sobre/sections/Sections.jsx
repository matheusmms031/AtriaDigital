import BoxGeneric from "../../../components/BoxGeneric/BoxGeneric";
import styles from "../styles.module.scss";
import { motion } from "framer-motion";
import video from "../../../assets/1015(4).mp4";

export function SobreAtria() {
    return (
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
                        <h1 className={styles.mainHeading}>
                            Sobre a Átria Digital
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
                            A Átria Digital é uma empresa de telecomunicações dedicada a fornecer internet de fibra óptica de alta velocidade para bairros de luxo em Belo Horizonte. Com um compromisso de qualidade e excelência, a Átria Digital entende as demandas de clientes que buscam estabilidade, rapidez e uma experiência de navegação premium.
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
                            Ao focar em regiões específicas, a Átria Digital personaliza suas soluções para atender às necessidades tecnológicas dos clientes mais exigentes, acompanhando o avanço de tecnologias como automação residencial, streaming em múltiplos dispositivos e ambientes de trabalho remoto.
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
                    }} />
            </div>
            )
}

export function Ahistoria() {
    return (
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
                        <h1 className={styles.mainHeading}>
                            As nossas vantagens
                        </h1>
                        <p>Algumas das regalias de ser Átria</p>
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
    </div>
    )
}