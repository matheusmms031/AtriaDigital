import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { motion } from "framer-motion";
import { useContext } from "react";
import HelpIcon from '@mui/icons-material/Help';
import stylesMobile from "./stylesMobile.module.scss";
import { pagesConfigContext } from "../../Contexts/PagesContexts";

export default function Home() {

    const { updateSelectedPage } = useContext(pagesConfigContext);

    return (
        <>
            <div className={styles.home}>
                <BoxGeneric>
                    <section className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <motion.h1
                                className={styles.mainHeading}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.1,
                                }}
                            >
                                A <span style={{ color: "#FF7B00" }}>melhor conexão</span> da região
                                <br />
                                metropolitana é na Atria
                            </motion.h1>
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
                        <div className={styles.iconWrapper}>
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        delay: 0.5,
                                    }}
                                >
                                    <NavigateNextTwoToneIcon
                                        sx={{ fontSize: 90, color: "white" }}
                                        onClick={() => { updateSelectedPage("Sobre") }}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                </BoxGeneric>
            </div>
            <div className={stylesMobile.home}>
                <div className={stylesMobile.backgroundFirstBox}>
                    <BoxGeneric className={stylesMobile.firstbox}>
                        <div className={stylesMobile.FirstboxText}>
                            <h1>
                                Serviço de luxo e qualidade
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Donec tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget fermentum ac, pulvinar eget eros. Nullam at venenatis tellus.
                            </p>
                        </div>
                    </BoxGeneric>
                </div>
                <section className={stylesMobile.box}>
					<div className={stylesMobile.boxText}>
						<h2>
						A sua experiência é importante
						</h2>
						<p>
						Nossos clientes possuem vantagens especiais para tratar de seus assuntos conosco.
						</p>
					</div>
					<div className={stylesMobile.boxContent}>
						<div className={stylesMobile.card}>
                            <HelpIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                            <div className={stylesMobile.cardText}>
                                <h3>
                                    Suporte a semana inteira
                                </h3>
                                <p>
                                    Nós damos suporte toda a semana para nossos clientes.
                                </p>
                            </div>
						</div>
                        <div className={stylesMobile.card}>
                            <HelpIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                            <div className={stylesMobile.cardText}>
                                <h3>
                                    Suporte a semana inteira
                                </h3>
                                <p>
                                    Nós damos suporte toda a semana para nossos clientes.
                                </p>
                            </div>
						</div>
                        <div className={stylesMobile.card}>
                            <HelpIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                            <div className={stylesMobile.cardText}>
                                <h3>
                                    Suporte a semana inteira
                                </h3>
                                <p>
                                    Nós damos suporte toda a semana para nossos clientes.
                                </p>
                            </div>
						</div>
					</div>
                </section>
            </div>
        </>
    );
}
