import BoxGeneric from "../../../components/BoxGeneric/BoxGeneric";
import styles from "../styles.module.scss";
import { motion } from "framer-motion";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import RouterIcon from '@mui/icons-material/Router';

export function SobreAtria() {
    return (
        <motion.div className={styles.textContent}
        initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        delay: 0.1,
                    }}>
            <div className={styles.boxtext}>
                <motion.div className={styles.titles}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        delay: 0.2,
                    }}
                >
                    <h1 className={styles.mainHeading}>
                    <span style={{ color: "#e8e120" }}>Sobre</span> a Átria Digital
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
                            delay: 0.3,
                        }}
                    >
                        A Átria Digital é mais do que uma empresa de telecomunicações somos a escolha de quem exige o máximo em conectividade. Especializada em oferecer internet via fibra óptica de altíssima velocidade, atendemos exclusivamente aos bairros mais nobres de Belo Horizonte, entregando uma experiência incomparável em tecnologia e atendimento.
                    </motion.p>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            delay: 0.4,
                        }}
                    >
                        Nosso compromisso com a qualidade e a excelência vai além de fornecer conexão rápida e estável. Entendemos as necessidades de um público exigente que valoriza desempenho superior, privacidade e exclusividade. Por isso, nossas soluções são projetadas para atender às demandas de residências e negócios de alto padrão, acompanhando as inovações tecnológicas que definem o estilo de vida moderno.
                    </motion.p>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            delay: 0.5,
                        }}
                    >
                        Com foco em tecnologias avançadas, a Átria Digital oferece uma conectividade feita sob medida. Atuamos para que cada cliente não apenas tenha acesso à melhor internet, mas também vivencie um atendimento diferenciado e proativo, alinhado aos mais altos padrões de sofisticação e confiabilidade.
                        Na Átria Digital, conectamos mais do que redes: conectamos você ao futuro.
                    </motion.p>
                </div>
            </div>
        
        </motion.div>
    )
}
export function Missao() {
    return (
        <motion.div className={styles.textContent}
        initial={{ opacity: 0,}}
                    animate={{ opacity: 1,}}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        delay: 0.1,
                    }}>

            <div className={styles.boxtext}>
                <motion.div className={styles.titles}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        delay: 0.2,
                    }}
                >
                    <h1 className={styles.mainHeading}>
                    <span style={{ color: "#e8e120" }}>Missão</span> da Átria Digital
                    </h1>
                    <p>Nosso maior objetivo</p>
                </motion.div>
                <div className={styles.boxDescriptions}>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            delay: 0.3,
                        }}
                    >
                        Na Átria Digital, nossa missão é redefinir os padrões de conectividade e tecnologia, proporcionando uma experiência que vai além da simples oferta de serviços de internet. Combinamos inovação, excelência e atendimento exclusivo para atender às necessidades de um público exigente e sofisticado, garantindo que cada cliente tenha acesso ao melhor da tecnologia global.
                    </motion.p>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            delay: 0.4,
                        }}
                    >
                        Somos movidos pelo compromisso de conectar pessoas, residências e negócios com soluções inteligentes e personalizadas, utilizando as tecnologias mais avançadas, como xGpon e Wi-Fi 7, para entregar velocidades incomparáveis e máxima estabilidade. Nosso foco está em oferecer não apenas uma conexão de alta performance, mas também um suporte diferenciado que coloca nossos clientes no centro de tudo o que fazemos.
                    </motion.p>
                </div>
            </div>
        </motion.div>
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
                        As nossas <span style={{ color: "#e8e120" }}>vantagens</span>
                    </h1>
                    <p>Algumas das regalias de ser Átria</p>
                </motion.div>
                <div className={styles.columncard}>
                <motion.div className={styles.card}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 0.3,
                }}
                >
                    <HighQualityIcon sx={{ fontSize: 40, color: "#e8e120" }} />
                    <div className={styles.cardText}>
                        <h3>
                            Conexão de Alta Velocidade
                        </h3>
                        <p>
                        Velocidades impressionantes, perfeitas para streaming, automação residencial e trabalho remoto.
                        </p>
                    </div>
                </motion.div>
                <motion.div className={styles.card}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 0.4,
                }}>
                    <HelpIcon sx={{ fontSize: 40, color: "#e8e120" }} />
                    <div className={styles.cardText}>
                        <h3>
                            Atendimento Disponível 24 horas
                        </h3>
                        <p>
                            Nossa equipe está pronta para atender você a qualquer dia, garantindo suporte rápido e eficaz quando você precisar.
                        </p>
                    </div>
                </motion.div>
                <motion.div className={styles.card}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 0.5,
                }}>
                <HomeIcon sx={{ fontSize: 40, color: "#e8e120" }} />
                            <div className={styles.cardText}>
                                <h3>
                                                                    
                                Atendimento VIP no Local
                                </h3>
                                <p>
                                Técnicos especializados disponíveis em até 3 horas para resolver qualquer demanda diretamente no seu domicílio.
                                </p>
                            </div>
                </motion.div>
                <motion.div className={styles.card}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 0.6,
                }}>
                    <LiveTvIcon sx={{ fontSize: 40, color: "#e8e120" }} />
                    <div className={styles.cardText}>
                        <h3>
                        Suporte Premium para Dispositivos
                        </h3>
                        <p>
                        Conexão otimizada para múltiplos dispositivos e streaming em 4K ou 8K, garantindo qualidade sem interrupções.
                        </p>
                    </div>
                </motion.div>
                <motion.div className={styles.card}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 0.6,
                }}>
                    <RssFeedIcon sx={{ fontSize: 40, color: "#e8e120" }} />
                    <div className={styles.cardText}>
                        <h3>
                        Cobertura Total com Tecnologia Mesh
                        </h3>
                        <p>
                        Rede Wi-Fi avançada com pontos mesh cabeados para conexão estável e cobertura impecável em toda a residência.
                        </p>
                    </div>
                </motion.div>
                <motion.div className={styles.card}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 0.6,
                }}>
                    <RouterIcon sx={{ fontSize: 40, color: "#e8e120" }} />
                    <div className={styles.cardText}>
                        <h3>
                        Tecnologia de Ponta e Sem Fidelidade
                        </h3>
                        <p>
                        Infraestrutura moderna com xGpon e Wi-Fi 6 e 7, aliada à flexibilidade de planos sem contratos longos e 1º mês grátis.
                        </p>
                    </div>
                </motion.div>
            </div>
            </div>
        </div>
    )
}