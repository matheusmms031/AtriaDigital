import styles from './styles.module.scss'
import { motion} from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../assets/Logo.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useState } from "react";
import { pagesConfigContext } from "../../Contexts/PagesContexts";

export default function Front() {
    const { updateSelectedPage } = useContext(pagesConfigContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.front}>
            <div className={styles.contents}>
                <div className={styles.title}>
                    <motion.div
                    style={{color:"white"}}
                        initial={{opacity:0, x:100}}
                        animate={{
                            opacity:1,
                            x:0,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: [0, 0.71, 0.2, 1.01],
                            delay:0.5
                          }}
                    >
                        <img src={Logo} alt="Logo Atria Digital" className={styles.logo}/>
                    </motion.div>
                </div>
                <motion.div
                    className={styles.navbar}
                        initial={{opacity:0, x:100}}
                        animate={{
                            opacity:1,
                            x:0,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: [0, 0.71, 0.2, 1.01],
                            delay:0.5
                          }}
                    >
                    <a onClick={() => { updateSelectedPage("Home") }} >
                        <span>HOME</span>
                    </a>
                    <a onClick={() => { updateSelectedPage("Sobre") }}>
                        <span>SOBRE</span>
                    </a>
                    <a onClick={() => { updateSelectedPage("Planos") }}>
                        <span>SOLUÇÕES</span>
                    </a>
                    <a onClick={() => { updateSelectedPage("Contato") }}>
                        <span>CONTATO</span>
                    </a>
                </motion.div>
                <div className={styles.boxsocial}>
                    <a href='https://www.instagram.com/' target="_blank">
                        <motion.div
                            className={styles.socialmedia}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 1.5,
                                ease: [0, 0.71, 0.2, 1.01],
                                delay: 0.5
                            }}
                        >
                                <InstagramIcon sx={{ fontSize: "1.5vmax", marginBottom: '0.1vmax' }} />
                        </motion.div>
                    </a>
                    <a href='https://central.2itelecom.hubsoft.com.br' target="_blank">
                        <motion.div
                            className={styles.socialmedia}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 1.5,
                                ease: [0, 0.71, 0.2, 1.01],
                                delay: 0.8
                            }}
                        >
                            <AccountCircleIcon sx={{ fontSize: "1.5vmax", marginBottom: '0.1vmax' }} />
                        </motion.div>
                    </a>
                </div>
            </div>
        </div>
    )
}