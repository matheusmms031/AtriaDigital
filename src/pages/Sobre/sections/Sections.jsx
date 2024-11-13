import BoxGeneric from "../../../components/BoxGeneric/BoxGeneric";
import styles from "../styles.module.scss";
import { motion } from "framer-motion";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
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
                    <span style={{ color: "#FF7B00" }}>Sobre</span> a Átria Digital
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
        <div className={styles.textContent2}>
            <div className={styles.boxtext2}>
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
                        As nossas <span style={{ color: "#FF7B00" }}>vantagens</span>
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
                        A Átria Digital possui vantagens incriveis para seus clientes, proporcionando internet rápida e segura, com uma velocidade de download e upload adequada para todos os tipos de uso.
                    </motion.p>
                </div>
                <div className={styles.columncard}>
                <div className={styles.card}>
                    <HighQualityIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                    <div className={styles.cardText}>
                        <h3>
                            Alta banda larga
                        </h3>
                        <p>
                            Nós disponibilizamos alta banda larga.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <HelpIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                    <div className={styles.cardText}>
                        <h3>
                            Suporte a semana inteira
                        </h3>
                        <p>
                            Suporte para nossos clientes na semana.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                <HomeIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                            <div className={styles.cardText}>
                                <h3>
                                    Atendimento a domicilio
                                </h3>
                                <p>
                                    Nossos técnicos estão sempre à disposição para ir a sua casa.
                                </p>
                            </div>
                </div>
                <div className={styles.card}>
                    <HighQualityIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                    <div className={styles.cardText}>
                        <h3>
                            Alta banda larga
                        </h3>
                        <p>
                            Nós disponibilizamos alta banda larga.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}