import styles from "./styles.module.scss";
import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import { motion } from "framer-motion";
import PlanCard from "../../components/PlanCard/PlanCard";
import { useState } from "react";
import { Dialog } from "@mui/material";
import ContactForm from "../../components/ContactForm/ContactForm";
import plan1 from "../../assets/fundoplan1.png";
import plan2 from "../../assets/fundoplan2.png";
import plan3 from "../../assets/fundoplan3.png";
import plan4 from "../../assets/fundoplan4.png";
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
                <motion.div
                  className={styles.cardContainer}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <PlanCard
                    title="TURBO"
                    banda="600 MEGA"
                    onClick={handleClickOpen}
                    fundoimg={plan1}
                  />
                </motion.div>
                <motion.div
                  className={styles.cardContainer}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <PlanCard
                    title="ULTRA"
                    banda="800 MEGA"
                    onClick={handleClickOpen}
                    fundoimg={plan2}

                  />
                </motion.div>
                <motion.div
                  className={styles.cardContainer}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <PlanCard
                  title="MASTER"
                  banda="1 GIGA"
                  onClick={handleClickOpen}
                  fundoimg={plan3}
                  />
                </motion.div>
                <motion.div
                  className={styles.cardContainer}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <PlanCard
                  title="PREMIUM"
                  banda="2 GIGA"
                  onClick={handleClickOpen}
                  fundoimg={plan4}
                  />
                </motion.div>
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

