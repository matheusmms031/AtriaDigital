import arrow from '../../assets/arrow.svg'
import arrowdown from '../../assets/arrowdown.svg'
import styles from "./PlanCard.module.scss";
import { motion } from "framer-motion";
import features from "../../assets/features.png";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import fundo from "../../assets/fundoplan1.png";

const PlanCard = ({ title='teste', banda='banda', onClick = () => {}, fundoimg = fundo}) => {
    return (
        <div className={styles.planCard}>
            <img src={fundoimg} className={styles.fundo}/>
            <div className={styles.header}>
                <span className={styles.fibra}>Fibra óptica</span>
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
                <img src={features} className={styles.features} />
            </div>
        </div>
    );
};

export default PlanCard;
