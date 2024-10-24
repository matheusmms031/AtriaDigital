import MenuIcon from '@mui/icons-material/Menu'
import styles from './styles.module.scss'
import { useState } from 'react'
import { motion} from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useContext } from "react";
import { pagesConfigContext } from "../../Contexts/PagesContexts";

export default function AppBarGeneric(){

    const { updateSelectedPage } = useContext(pagesConfigContext);
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open:{
            opacity: [0,1],
            x: 0
        },
        close:{
            opacity: [0],
            marginLeft:0,
        }
    };

    
    return(
        <div className={styles.appbar}>
            <div className={styles.contents}>
                <div className={styles.options}>
                    <motion.div animate={isOpen ? {rotate:90}: {}}>
                        <MenuIcon sx={{fontSize: 40, color:'white'}} onClick={() => {setIsOpen(!isOpen)}}/>
                    </motion.div>
                    <motion.ul className={styles.ul}>
                        <motion.li className={styles.li} onClick={() => {updateSelectedPage("Home")}} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0}} exit={{display: 'none'}} initial={{opacity:0}}>HOME</motion.li>
                        <motion.li className={styles.li} onClick={() => {updateSelectedPage("Sobre")}} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0.1}} exit={{display: 'none'}} initial={{opacity:0}}>SOBRE</motion.li>
                        <motion.li className={styles.li} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0.2}} exit={{display: 'none'}} initial={{opacity:0}}>PLANOS</motion.li>
                        <motion.li className={styles.li} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0.3}} exit={{display: 'none'}} initial={{opacity:0}}>contato</motion.li>
                    </motion.ul>
                </div>
                <div className={styles.boxsocial}>
                    <motion.div
                        className={styles.socialmedia}
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
                        <span>Instagram</span>
                        <InstagramIcon sx={{fontSize:20}}/>
                    </motion.div>
                    <motion.div
                        className={styles.socialmedia}
                        initial={{opacity:0, x:100}}
                                animate={{
                                    opacity:1,
                                    x:0,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    delay:0.8
                                  }}
                    >
                        <span>Facebook</span>
                        <FacebookIcon sx={{fontSize:20}}/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}