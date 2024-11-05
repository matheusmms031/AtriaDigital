import MenuIcon from '@mui/icons-material/Menu'
import styles from './styles.module.scss'
import { useState } from 'react'
import { motion } from "framer-motion";
import { useContext } from "react";
import { pagesConfigContext } from "../../Contexts/PagesContexts";

export default function AppBarGeneric() {

    const { updateSelectedPage } = useContext(pagesConfigContext);
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: {
            opacity: [1],
            x: 0,
            marginTop:"1.5vmax"
        },
        close: {
            opacity: [0],
            marginLeft: 0,
            height: 0,
            marginTop:0,
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 },
        },
        tap: {
            scale: 0.9,
            transition: { duration: 0.2 },
        }
    };

    return (
        <div className={styles.appbar}>
            <div className={styles.contents}>
                <div className={styles.options}>
                    <motion.div animate={isOpen ? { rotate: 90 } : {}}>
                        <MenuIcon sx={{ fontSize: "2vmax", color: 'white' }} onClick={() => { setIsOpen(!isOpen) }} />
                    </motion.div>
                    <motion.ul className={styles.ul}>
                        <motion.li 
                            className={styles.li} 
                            onClick={() => { updateSelectedPage("Home") }} 
                            variants={variants} 
                            animate={isOpen ? "open" : "close"} 
                            transition={{ duration: 0.5, delay: 0  }} 
                            exit={{ display: 'none' }} 
                            initial={{ opacity: 0 }}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            HOME
                        </motion.li>
                        <motion.li 
                            className={styles.li} 
                            onClick={() => { updateSelectedPage("Sobre") }} 
                            variants={variants} 
                            animate={isOpen ? "open" : "close"} 
                            transition={{ duration: 0.9, delay: 0.1  }} 
                            exit={{ display: 'none' }} 
                            initial={{ opacity: 0 }}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            SOBRE
                        </motion.li>
                        <motion.li 
                            className={styles.li} 
                            onClick={() => { updateSelectedPage("Planos") }} 
                            variants={variants} 
                            animate={isOpen ? "open" : "close"} 
                            transition={{ duration: 1.3, delay: 0.2  }} 
                            exit={{ display: 'none' }} 
                            initial={{ opacity: 0 }}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            PLANOS
                        </motion.li>
                        <motion.li 
                            className={styles.li} 
                            onClick={() => { updateSelectedPage("Contato") }} 
                            variants={variants} 
                            animate={isOpen ? "open" : "close"} 
                            transition={{ duration: 1.5, delay: 0.3  }} 
                            exit={{ display: 'none' }} 
                            initial={{ opacity: 0 }}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            CONTATO
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    )
}
