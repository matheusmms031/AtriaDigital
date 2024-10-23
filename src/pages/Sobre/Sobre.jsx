import AppBarGeneric from "../../components/AppBarGeneric/AppBarGeneric";
import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import video from "../../assets/1015(4).mp4";
import styles from "./styles.module.scss";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { motion } from "framer-motion";

export default function Sobre() {
    return (
        <div className={styles.home}>
            <BoxGeneric>
                <section className={styles.contentWrapper}>
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
                            Página de Sobre
                        </motion.h1>
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
                </section>
            </BoxGeneric>
        </div>
    );
}
