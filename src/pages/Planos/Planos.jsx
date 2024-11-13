import styles from "./styles.module.scss";
import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import { motion } from "framer-motion";
import PlanCard from "../../components/PlanCard/PlanCard";
import { useState } from "react";
import { Dialog } from "@mui/material";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactGeneric from "../../components/ContactGeneric/ContactGeneric";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
  hover: { scale: 1.05, transition: { duration: 0.3, type: "spring" } }
};

export default function Planos() {

  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleClickOpen = (title) => {
    setOpen(true);
    setSelectedPlan(title);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                Todos os <span style={{ color: "#FF7B00" }}>nossos planos</span>
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
                Confira e veja a <span style={{ color: "#FF7B00" }}>melhor escolha</span> para você
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
                    onClick={() => handleClickOpen(title)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BoxGeneric>
      <Dialog
        maxWidth="xl"
        fullWidth
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" ,display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        backgroundColor="transparent"
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
        }}
      >
        <ContactGeneric Firstsection={true}/>
      </Dialog>
    </div>
  );
}

