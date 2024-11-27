import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { motion, useAnimation } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import { useContext, useEffect, useState} from "react";
import PlanCard from "../../components/PlanCard/PlanCard";
import HelpIcon from '@mui/icons-material/Help';
import stylesMobile from "./stylesMobile.module.scss";
import { pagesConfigContext } from "../../Contexts/PagesContexts";
import plan1 from "../../assets/fundoplan1.png";
import plan3 from "../../assets/fundoplan2.png";
import plan2 from "../../assets/newfundo1.jpg";
import plan4 from "../../assets/newfundo2.jpg";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import { useInView } from 'react-intersection-observer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ContactMobileGeneric from "../../components/ContactMobileGeneric/ContactMobileGeneric";
import { Dialog } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';

const theme = {
  palette:"#FF7B00"
}

const ScrollSection = ({ children, ...rest }) => {
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
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {

    const plans = [
        {
          title: "TURBO",
          banda: "600 MEGA",
          price: "R$ 120,000",
          img: plan1,
          ponto:false,
          qpontos:0,
          wifi6:false,
          sup24:true,
        },
        {
          title: "ULTRA",
          banda: "800 MEGA",
          price: "R$ 240,000",
          img: plan2,
          ponto:false,
          qpontos:0,
          wifi6:false,
          sup24:true,
        },
        {
          title: "MASTER",
          banda: "1 GIGA",
          price: "R$ 360,000",
          img: plan3,
          ponto:true,
          qpontos:1,
          wifi6:true,
          sup24:true,
          supmega:true,
        },
        {
          title: "PREMIUM",
          banda: "2 GIGA",
          price: "R$ 480,000",
          img: plan4,
          ponto:true,
          qpontos:2,
          wifi6:true,
          sup24:true,
          supmega:true,
        },
      ];

    const [open, setOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
  
    const handleClickOpen = (title) => {
      setOpen(true);
      setSelectedPlan(title);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
            <Dialog
                maxWidth="xl"
                fullWidth
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" ,display: "flex", alignItems: "center", justifyContent: "center" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                backgroundColor="transparent"
                PaperProps={{
                    style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    },
                }}
            >
        <ContactMobileGeneric />
      </Dialog>
                    <MobileNavbar/>
                <div className={stylesMobile.backgroundFirstBox}>
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
                            <HelpIcon sx={{ fontSize: "9vw", color: "#FF7B00" }} />
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
                            <HomeIcon sx={{ fontSize: "9vw", color: "#FF7B00" }} />
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
                            <HighQualityIcon sx={{ fontSize: "9vw", color: "#FF7B00" }} />
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
                    {plans.map((data, index) => (
                <ScrollSection
                  key={index}
                >
                  <PlanCard
                    onClick={() => handleClickOpen(data)}
                    title={data.title}
                    banda={data.banda}
                    fundoimg={data.img}
                    ponto={data.ponto}
                    qpontos={data.qpontos}
                    wifi6={data.wifi6}
                    sup24={data.sup24}
                    supmega={data.supmega}
                  />
                </ScrollSection>
            ))}
                </section>
                <div className={stylesMobile.iconwhat}>
                    <a href="https://api.whatsapp.com/send/?phone=+553123331401" target="_blank">
                        <Fab sx={{ bgcolor: theme.palette }} aria-label="add" size="largest">
                            <WhatsAppIcon sx={{ fontSize:"10vw", color:"white"}}/>
                        </Fab>
                    </a>
                </div>
            </div>
        </>
    );
}

