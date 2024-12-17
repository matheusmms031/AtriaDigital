import styles from "./PlanCard.module.scss";
import { motion } from "framer-motion";
import features from "../../assets/features.png";
import RouterIcon from '@mui/icons-material/Router';
import WifiIcon from '@mui/icons-material/Wifi';
import fundo from "../../assets/fundoplan1.png";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpIcon from '@mui/icons-material/Help';

const PlanCard = ({ title='teste', banda='banda', onClick, fundoimg = fundo, wifi6=false, ponto=false,qpontos=0,sup24=false,wifi7=false, supmega=false, solucao="Solução", ippublico=false, ...rest}) => {
    return (
        <div className={styles.planCard} {...rest}
        onClick={onClick}>
            <div style={{display:'flex',width:"100%",height:"100%",flexDirection:"column", backgroundColor:"#0000003f", borderRadius:"1vmax"}}>
                <img src={fundoimg} className={styles.fundo}/>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <div style={{ display: 'flex', gap: '0.3vw' }}>
                        <motion.div
                            className={styles.assets}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span>{banda}</span>
                        </motion.div>
                    </div>
                    <div className={styles.options}>
                    {wifi6 && 
                        <motion.div
                            className={styles.option}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                                <WifiIcon sx={{color:"#ffffff"}} /> <span>Wi-Fi 6</span>
                        </motion.div>
                    }
                    {wifi7 && 
                        <motion.div
                            className={styles.option}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                                <WifiIcon sx={{color:"#ffffff"}}/> <span>Wi-Fi 7</span>
                        </motion.div>
                    }
                    {ponto && 
                        <motion.div
                            className={styles.option}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                                <RouterIcon sx={{color:"#ffffff"}}/> <span>{qpontos} Ponto{qpontos > 1 ? "s":""} adiciona{ qpontos > 1 ? "is" : "l"}</span>
                        </motion.div>
                    }
                    {sup24 && 
                        <motion.div
                            className={styles.option}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                                <HelpIcon sx={{color:"#ffffff"}}/> <span>Suporte 24 horas</span>
                        </motion.div>
                    }
                    {supmega && 
                        <motion.div
                            className={styles.option}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                                <SupportAgentIcon sx={{color:"#ffffff"}}/> <span>Atendimento rápido</span>
                        </motion.div>
                    }
                    {ippublico && 
                        <motion.div
                            className={styles.option}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                                <RouterIcon sx={{color:"#ffffff"}}/> <span>IP Público e NAT Aberto</span>
                        </motion.div>
                    }
                    
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PlanCard;
