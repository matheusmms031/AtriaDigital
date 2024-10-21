import MenuIcon from '@mui/icons-material/Menu'
import styles from './styles.module.scss'
import { useState,useRef } from 'react'
import { motion} from "framer-motion";
import { useDimensions } from './script.jsx';


export default function AppBarGeneric(){
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
    }

    
    return(
        <div className={styles.appbar}>
            <motion.div animate={isOpen ? {rotate:90}: {}}>
                <MenuIcon sx={{fontSize: 40, color:'white'}} onClick={() => {setIsOpen(!isOpen)}}/>
            </motion.div>
            <motion.ul className={styles.ul}>
                <motion.li className={styles.li} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0}} exit={{display: 'none'}} initial={{opacity:0}}>HOME</motion.li>
                <motion.li className={styles.li} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0.1}} exit={{display: 'none'}} initial={{opacity:0}}>SOBRE</motion.li>
                <motion.li className={styles.li} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0.2}} exit={{display: 'none'}} initial={{opacity:0}}>PLANOS</motion.li>
                <motion.li className={styles.li} variants={variants} animate={isOpen ? "open" : "close"}  transition={{duration:1, delay:0.3}} exit={{display: 'none'}} initial={{opacity:0}}>contato</motion.li>
            </motion.ul>
        </div>
    )
}