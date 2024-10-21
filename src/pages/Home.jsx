import AppBarGeneric from "../components/AppBarGeneric/AppBarGeneric";
import BoxGeneric from "../components/BoxGeneric/BoxGeneric";
import video from '../assets/1015(2).mp4'
import styles from './styles.module.scss'
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import { motion } from "framer-motion";

export default function Home(){
    return(
        <div className={styles.home}>
            <video src={video} autoPlay muted loop/>
            <AppBarGeneric/>
            <BoxGeneric>
                <section className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <motion.h1 className={styles.mainHeading}
                        initial={{ opacity: 0, x:100}}
                        animate={{ opacity: 1, x:0}}
                        transition={{
                          duration: 1.5,
                          type:"spring",
                          delay: 0.1
                        }}
                        >
                        A melhor conexão da região<br/>metropolitana é na Atria
                        </motion.h1>
                        <motion.p className={styles.description}
                            initial={{ opacity: 0, x:100}}
                            animate={{ opacity: 1, x:0}}
                            transition={{
                            duration: 1.5,
                            type:"spring",
                            delay: 0.2
                            }}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis purus ipsum, elementum eget elementum quis, blandit et ipsum. Maecenas sed nisi eget dui euismod accumsan.
                        </motion.p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <motion.div 
                            whileHover={{scale:1.3}}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <motion.div
                                initial={{opacity:0, scale:0}}
                                animate={{
                                    opacity:1,
                                    scale:1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                      type: "spring",
                                      damping: 5,
                                      stiffness: 100,
                                      restDelta: 0.001
                                    },
                                    delay:0.2
                                  }}
                            >
                                <NavigateNextTwoToneIcon sx={{fontSize:90,color:"white"}}/>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </BoxGeneric>
        </div>
    )
}