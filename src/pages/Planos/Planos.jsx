import styles from "./styles.module.scss";
import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import { motion } from "framer-motion";
import PlanCard from "../../components/PlanCard/PlanCard";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
  hover: { scale: 1.05, transition: { duration: 0.3, type: "spring" } }
};

export default function Planos() {
  return (
    <div className={styles.home}>
      <BoxGeneric>
        <section>
          <div className={styles.contentWrapper}>
            <div className={styles.titles}>
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
                Todos os nossos planos
              </motion.h1>
              <motion.h2
                className={styles.mainHeading2}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  delay: 0.3,
                }}
              >
                Confira e veja a melhor escolha para você
              </motion.h2>
            </div>
            <div className={styles.cards}>
              {["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"].map((title, index) => (
                <motion.div
                  key={index}
                  className={styles.cardContainer}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <PlanCard
                    price={`R$ ${(299.99 + index * 100).toFixed(2)}`}
                    title={title}
                    bandwidth={`${500 + index * 100} MEGA`}
                    features={["Suporte 24/7", "Wi-Fi Grátis", "Instalação Grátis"]}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BoxGeneric>
    </div>
  );
}
