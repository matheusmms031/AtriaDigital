import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { motion } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import { useContext } from "react";
import PlanCard from "../../components/PlanCard/PlanCard";
import HelpIcon from '@mui/icons-material/Help';
import stylesMobile from "./stylesMobile.module.scss";
import { pagesConfigContext } from "../../Contexts/PagesContexts";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";

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
                                
                                Bem-vindo à AtriaDigital, onde conectividade é sinônimo de excelência. Somos uma empresa de telecomunicações especializada em oferecer internet de fibra óptica para os bairros mais sofisticados de Belo Horizonte.

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
                                        sx={{ fontSize: 90, color: "white"}}
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
                    <MobileNavbar/>
                    <BoxGeneric className={stylesMobile.firstbox}>
                        <div className={stylesMobile.FirstboxText}>
                            <motion.h1
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.1,
                                }}
                            >
                                Serviço de luxo e qualidade
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.2,
                                }}
                            >
                                Bem-vindo à AtriaDigital, onde conectividade é sinônimo de excelência. Somos uma empresa de telecomunicações especializada em oferecer internet de fibra óptica para os bairros mais sofisticados de Belo Horizonte.
                            </motion.p>
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
                            <HomeIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                            <div className={stylesMobile.cardText}>
                                <h3>
                                    Atendimento a domicilio
                                </h3>
                                <p>
                                    Nossos técnicos estão sempre à disposição para ir a sua casa.
                                </p>
                            </div>
                        </div>
                        <div className={stylesMobile.card}>
                            <HighQualityIcon sx={{ fontSize: 40, color: "#FF7B00" }} />
                            <div className={stylesMobile.cardText}>
                                <h3>
                                    Alta banda larga
                                </h3>
                                <p>
                                    Nós disponibilizamos alta banda larga para todos os nossos clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={stylesMobile.box}>
                    <div className={stylesMobile.boxText}>
                        <h2>
                            A Atria também é para empresas
                        </h2>
                        <p>
                            Além de domicilios também cobrimos ambientes empresariais de qualquer tipo.
                        </p>
                    </div>
                </section>
                <section className={stylesMobile.box}>
                    <div className={stylesMobile.boxText}>
                        <h2>
                            Dê uma olhada nos nossos planos
                        </h2>
                        <p>
                            Veja os nossos melhores planos para você e escolha aquele o qual mais te satisfaz
                        </p>
                    </div>
                    <PlanCard
                        price={`R$ 299.99`}
                        title={"Básico"}
                        bandwidth={`500 MEGA`}
                        features={["Suporte 24/7", "Wi-Fi Grátis", "Instalação Grátis"]}
                    />
                    <PlanCard
                        price={`R$ 299.99`}
                        title={"Básico"}
                        bandwidth={`500 MEGA`}
                        features={["Suporte 24/7", "Wi-Fi Grátis", "Instalação Grátis"]}
                    />
                    <PlanCard
                        price={`R$ 299.99`}
                        title={"Básico"}
                        bandwidth={`500 MEGA`}
                        features={["Suporte 24/7", "Wi-Fi Grátis", "Instalação Grátis"]}
                    />
                </section>
            </div>
        </>
    );
}
