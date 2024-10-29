import styles from './styles.module.scss'
import { motion} from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Front() {
    return (
        <div className={styles.front}>
            <div className={styles.contents}>
                <div className={styles.title}>
                    <motion.h1
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
                        LOGO
                    </motion.h1>
                </div>
                <div className={styles.boxsocial}>
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
                        <span>Instagram</span>
                        <InstagramIcon sx={{ fontSize: "1vmax", marginBottom: '0.1vmax' }} />
                    </motion.div>
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
                        <span>Facebook</span>
                        <FacebookIcon sx={{ fontSize: "1vmax", marginBottom: '0.1vmax' }} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}