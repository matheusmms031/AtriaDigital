import BoxGeneric from "../../../components/BoxGeneric/BoxGeneric";
import styles from "../styles.module.scss";
import { motion } from "framer-motion";
import video from "../../../assets/1015(2).mp4"


export function SobreAtria() {
    return (
        <div className={styles.textContent}>
            <div className={styles.boxtext}>
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
                        Página de Sobre
                    </motion.h1>
                    <div className={styles.boxDescriptions}>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget
                        fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis
                        purus ipsum, elementum eget elementum quis, blandit et ipsum.
                        Maecenas sed nisi eget dui euismod accumsan.
                    </motion.p>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget
                        fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis
                        purus ipsum, elementum eget elementum quis, blandit et ipsum.
                        Maecenas sed nisi eget dui euismod accumsan.
                    </motion.p>
                    </div>
            </div>
            <video src={video} className={styles.video} autoPlay muted loop style={{ width: "500px", height: "300px", display: "block", position: "relative" }} />
        </div>
    )
}

export function Ahistoria() {
    return (
        <div className={styles.textContent}>
        <div className={styles.boxtext}>
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
                    Página de Sobre
                </motion.h1>
                <div className={styles.boxDescriptions}>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget
                    fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis
                    purus ipsum, elementum eget elementum quis, blandit et ipsum.
                    Maecenas sed nisi eget dui euismod accumsan.
                </motion.p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget
                    fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis
                    purus ipsum, elementum eget elementum quis, blandit et ipsum.
                    Maecenas sed nisi eget dui euismod accumsan.
                </motion.p>
                </div>
        </div>
        <video src={video} className={styles.video} autoPlay muted loop style={{ width: "500px", height: "300px", display: "block", position: "relative" }} />
    </div>
    )
}