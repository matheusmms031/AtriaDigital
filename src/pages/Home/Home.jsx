import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import styles from "./styles.module.scss";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { motion, useAnimation } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import { useContext, useEffect, useState } from "react";
import PlanCard from "../../components/PlanCard/PlanCard";
import HelpIcon from '@mui/icons-material/Help';
import stylesMobile from "./stylesMobile.module.scss";
import { pagesConfigContext } from "../../Contexts/PagesContexts";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import plan1 from "../../assets/image5.jpeg";
import plan3 from "../../assets/imageteste2.jpeg";
import plan2 from "../../assets/imageteste.jpeg";
import plan4 from "../../assets/imageteste3.jpeg";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import { useInView } from 'react-intersection-observer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ContactMobileGeneric from "../../components/ContactMobileGeneric/ContactMobileGeneric";
import { Dialog } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';


const theme = {
    palette: "#e8e120"
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
            title: "Para Pequenos Negócios",
            banda: "600 MEGA",
            price: "R$ 120,000",
            img: plan1,
            ponto: false,
            qpontos: 0,
            wifi6: true,
            sup24: true,
            details: [
                "Sem fidelidade: Contrate sem compromissos de longo prazo.",
                "Primeiro mês grátis, sem custo de mensalidade.",
                "Conexão via tecnologia xPON para máxima estabilidade.",
                "Roteador Wi-Fi 6 de alta performance incluso.",
                "Monitoramento remoto da rede, garantindo disponibilidade proativa.",
                "Atendimento técnico especializado com resolução em até 6 horas.",
                "Manutenção preventiva anual, mantendo sua rede sempre atualizada.",
                "Consultoria inicial personalizada para adaptar a rede às necessidades específicas do negócio."
            ],
            desc: ({ ...rest }) => {
                return (
                    <span {...rest}>
                        Pensado para pequenos negócios que precisam de estabilidade e performance para crescer.
                    </span>
                );
            }
        },
        {
            title: "Conectividade Refinada",
            banda: "800 MEGA",
            price: "R$ 240,000",
            img: plan2,
            ponto: true,
            qpontos: 1,
            wifi6: true,
            sup24: true,
            details: [
                "Tecnologia xPON para garantir estabilidade de ponta e conexão contínua.",
                "Roteador Wi-Fi 6 de última geração, assegurando cobertura uniforme e velocidade em múltiplos dispositivos.",
                "Atendimento técnico especializado com resolução em até 6 horas.",
                "Monitoramento inteligente da rede com ajustes proativos para evitar interrupções.",
                "Consulta inicial personalizada, para adaptar a rede às necessidades do cliente."
            ],
            desc: ({ ...rest }) => {
                return (
                    <span {...rest}>
                        Conectividade sob medida para residências que demandam estabilidade e velocidade com sofisticação.
                    </span>
                );
            }
        },
        {
            title: "Experiência Exclusiva",
            banda: "1 GIGA",
            price: "R$ 360,000",
            img: plan3,
            ponto: true,
            qpontos: 1,
            wifi6: true,
            sup24: true,
            supmega: true,
            details: [
                "Conexão via xGpon, uma das tecnologias mais avançadas do mercado, para oferecer máxima estabilidade e eficiência.",
                "Roteador Wi-Fi 6 Plus, projetado para grandes residências, otimizando alcance e desempenho.",
                "Atendimento técnico especializado com resolução em até 4 horas, priorizando a conveniência do cliente.",
                "App de controle de rede exclusivo, com relatórios de desempenho e gestão simplificada de dispositivos conectados.",
                "Backup de conexão para continuidade do serviço mesmo em situações emergenciais.",
                "Personalização completa da rede residencial por especialistas em conectividade."
            ],
            desc: ({ ...rest }) => {
                return (
                    <span {...rest}>
                        Velocidade e performance para residências conectadas e sofisticadas, ideal para famílias que utilizam diversos dispositivos simultaneamente.
                    </span>
                );
            }
        },
        {
            title: "Conectividade sem Limites",
            banda: "2 GIGA",
            price: "R$ 480,000",
            img: plan4,
            ponto: true,
            qpontos: 2,
            wifi6: true,
            sup24: true,
            supmega: true,
            details: [
                "Tecnologia xGpon de ponta, proporcionando velocidades ultra rápidas e baixa latência.",
                "Wi-Fi 7 com suporte a múltiplos dispositivos simultâneos e cobertura otimizada para residências de até 600m².",
                "Até 03 pontos de rede mesh cabeados para garantir a melhor experiência em qualquer ambiente da residência.",
                "Atendimento VIP com técnico especializado em até 3 horas no local, com total discrição e profissionalismo.",
                "Kit premium de conectividade, incluindo cabos de alta performance e acessórios exclusivos.",
                "Monitoramento em tempo real da rede, com ajustes automáticos para garantir máxima performance.",
                "Consultoria tecnológica personalizada, com mapeamento da residência para otimizar a distribuição da rede.",
                "Gerente de contas dedicado, garantindo suporte exclusivo e atendimento prioritário."
            ],
            desc: ({ ...rest }) => {
                return (
                    <span {...rest}>
                        Desenvolvido para atender às necessidades de residências sofisticadas e conectadas, entregando velocidades impressionantes, cobertura total e suporte de excelência.
                    </span>
                );
            }
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
                                <span style={{ color: "#e8e120" }}>Olá,<br/> Vila da Serra</span>
                            </motion.h1>
                            <motion.div
                                className={styles.subtitle}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    type: "spring",
                                    delay: 0.1,
                                }}
                            >
                                <span>
                                    
                                CHEGAMOS
                                </span>
                            </motion.div>
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
                    </motion.section>
                </BoxGeneric>
            </div>
            <div className={stylesMobile.home}>
                <Dialog
                    maxWidth="xl"
                    fullWidth
                    style={{ backgroundColor: "rgba(0, 0, 0, 0)", display: "flex", alignItems: "center", justifyContent: "center" }}
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
                <MobileNavbar />
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
                                Serviço de <span style={{ color: "#e8e120" }}>luxo</span> e <span style={{ color: "#e8e120" }}>qualidade</span>
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
                                    <KeyboardDoubleArrowRightIcon sx={{ fontSize: "7vw", color: "#000000" }} />
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
                                <HelpIcon sx={{ fontSize: "9vw", color: "#e8e120" }} />
                                <div className={stylesMobile.cardText}>
                                    <h3>
                                    Atendimento Disponível 24 horas
                                    </h3>
                                    <p>
                                    Nossa equipe está pronta para atender você a qualquer dia, garantindo suporte rápido e eficaz quando você precisar.
                                    </p>
                                </div>
                            </div>
                        </ScrollSection>
                        <ScrollSection>
                            <div className={stylesMobile.card}>
                                <HomeIcon sx={{ fontSize: "9vw", color: "#e8e120" }} />
                                <div className={stylesMobile.cardText}>
                                    <h3>
                                    Atendimento VIP no Local
                                    </h3>
                                    <p>
                                    Técnicos especializados disponíveis em até 3 horas para resolver qualquer demanda diretamente no seu domicílio.
                                    </p>
                                </div>
                            </div>
                        </ScrollSection>
                        <ScrollSection>
                            <div className={stylesMobile.card}>
                                <HighQualityIcon sx={{ fontSize: "9vw", color: "#e8e120" }} />
                                <div className={stylesMobile.cardText}>
                                    <h3>
                                    Conexão de Alta Velocidade
                                    </h3>
                                    <p>
                                    Velocidades impressionantes, perfeitas para streaming, automação residencial e trabalho remoto.
                                    </p>
                                </div>
                            </div>
                        </ScrollSection>
                        <ScrollSection>
                            <div className={stylesMobile.card}>
                                <LiveTvIcon sx={{ fontSize: "9vw", color: "#e8e120" }} />
                                <div className={stylesMobile.cardText}>
                                    <h3>
                                        Suporte Premium para Dispositivos
                                    </h3>
                                    <p>
                                    Conexão otimizada para múltiplos dispositivos e streaming em 4K ou 8K, garantindo qualidade sem interrupções.
                                    </p>
                                </div>
                            </div>
                        </ScrollSection>
                        <ScrollSection>
                            <div className={stylesMobile.card}>
                                <DeviceHubIcon sx={{ fontSize: "9vw", color: "#e8e120" }} />
                                <div className={stylesMobile.cardText}>
                                    <h3>
                                        Cobertura Total com Tecnologia Mesh
                                    </h3>
                                    <p>
                                        Rede Wi-Fi avançada com pontos mesh cabeados para conexão estável e cobertura impecável em toda a residência.
                                    </p>
                                </div>
                            </div>
                        </ScrollSection>
                        <ScrollSection>
                            <div className={stylesMobile.card}>
                                <SignalCellularAltIcon sx={{ fontSize: "9vw", color: "#e8e120" }} />
                                <div className={stylesMobile.cardText}>
                                    <h3>
                                    Tecnologia de Ponta e Sem Fidelidade
                                    </h3>
                                    <p>
                                    Infraestrutura moderna com xGpon e Wi-Fi 6 e 7, aliada à flexibilidade de planos sem contratos longos e 1º mês grátis.
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
                        <Fab sx={{ bgcolor: theme.palette, padding:"3vw" }} aria-label="add" size="largest">
                            <WhatsAppIcon sx={{ fontSize: "10vw", color: "black" }} />
                        </Fab>
                    </a>
                </div>
            </div>
        </>
    );
}

