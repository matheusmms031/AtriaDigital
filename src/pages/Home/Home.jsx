import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { motion, useAnimation } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import { useContext, useEffect } from "react";
import PlanCard from "../../components/PlanCard/PlanCard";
import HelpIcon from '@mui/icons-material/Help';
import stylesMobile from "./stylesMobile.module.scss";
import { pagesConfigContext } from "../../Contexts/PagesContexts";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import { useInView } from 'react-intersection-observer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const ScrollSection = ({ children }) => {
    // Controla a animação
    const controls = useAnimation();
    // Ref para observar a visibilidade do elemento
    const [ref, inView] = useInView({
        triggerOnce: false, // Animação ocorre apenas uma vez
        threshold: 0.1 // Inicia quando 10% do elemento está visível
    });

    // Inicia a animação quando o elemento está visível
    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' }
            });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {

    const { updateSelectedPage } = useContext(pagesConfigContext);

    return (
        <>
            <div className={styles.home}>
                <BoxGeneric>
                    <motion.section className={styles.contentWrapper}
                        initial={{backdropFilter: "blur(0px)", backgroundColor:"#0000000"}}
                        animate={{backdropFilter: "blur(5px)", backgroundColor: "#00000049"}}
                        transition={{
                            duration: 1.5,
                            type: "ease-out",
                        }}
                    >
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
                                metropolitana é na Átria
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

                                Bem-vindo à Átria Digital, onde conectividade é sinônimo de excelência. Somos uma empresa de telecomunicações especializada em oferecer internet de fibra óptica para os bairros mais sofisticados de Belo Horizonte.

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
                    </motion.section>
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
                                Serviço de <span style={{color:"#FF7B00"}}>luxo</span> e <span style={{color:"#FF7B00"}}>qualidade</span>
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
                                Bem-vindo à Átria Digital, onde conectividade é sinônimo de excelência. Somos uma empresa de telecomunicações especializada em oferecer internet de fibra óptica para os bairros mais sofisticados de Belo Horizonte.
                            </motion.p>
                        <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            delay: 0.3,
                        }}
                        >
                                <motion.a className={stylesMobile.buttontitles}
                                href="#planos"
                                >
                                    <span>Assine agora</span>
                                    <KeyboardDoubleArrowRightIcon sx={{ fontSize: "7vw", color: "#fffff" }} />
                                </motion.a>
                        </motion.div>
                        </div>
                    </BoxGeneric>
                </div>
                <section className={stylesMobile.box}>
                    <ScrollSection>
                        <div className={stylesMobile.boxText}>
                            <h2>
                                A sua experiência é importante
                            </h2>
                            <p>
                                Nossos clientes possuem vantagens especiais para tratar de seus assuntos conosco.
                            </p>
                        </div>
                    </ScrollSection>
                    <div className={stylesMobile.boxContent}>
                    <ScrollSection>
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
                        </ScrollSection>
                        <ScrollSection>
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
                        </ScrollSection>
                        <ScrollSection>
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
                        </ScrollSection>
                    </div>
                </section>
                <ScrollSection>
                <section className={stylesMobile.box}>
                    <div className={stylesMobile.boxText}>
                        <h2>
                            A Átria também é para empresas
                        </h2>
                        <p>
                            Além de domicilios também cobrimos ambientes empresariais de qualquer tipo.
                        </p>
                    </div>
                </section>
                </ScrollSection>
                <section className={stylesMobile.box} id="planos">
                <ScrollSection>
                    <div className={stylesMobile.boxText}>
                        <h2>
                            Dê uma olhada nos nossos planos
                        </h2>
                        <p>
                            Veja os nossos melhores planos para você e escolha aquele o qual mais te satisfaz
                        </p>
                    </div>
                    </ScrollSection>
                    <ScrollSection>
                    <PlanCard
                        price={`R$ 299.99`}
                        title={"Básico"}
                        bandwidth={`500 MEGA`}
                        features={["Suporte 24/7", "Wi-Fi Grátis", "Instalação Grátis"]}
                    />
                    </ScrollSection>
                    <ScrollSection>
                    <PlanCard
                        price={`R$ 299.99`}
                        title={"Básico"}
                        bandwidth={`500 MEGA`}
                        features={["Suporte 24/7", "Wi-Fi Grátis", "Instalação Grátis"]}
                    />
                    </ScrollSection>
                    <ScrollSection>
                    <PlanCard
                        price={`R$ 299.99`}
                        title={"Básico"}
                        bandwidth={`500 MEGA`}
                        features={["Suporte 24/7", "Wi-Fi Grátis", "Instalação Grátis"]}
                    />
                    </ScrollSection>
                </section>
            </div>
        </>
    );
}

