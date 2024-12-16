import styles from "./styles.module.scss";
import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import { motion } from "framer-motion";
import PlanCard from "../../components/PlanCard/PlanCard";
import { useState } from "react";
import { Dialog } from "@mui/material";
import ContactForm from "../../components/ContactForm/ContactForm";
import plan1 from "../../assets/image5.jpeg";
import plan3 from "../../assets/imageteste2.jpeg";
import plan2 from "../../assets/imageteste.jpeg";
import plan4 from "../../assets/imageteste3.jpeg";
import ContactGeneric from "../../components/ContactGeneric/ContactGeneric";

const plans = [
    {
      title: "Para Pequenos Negócios",
      banda: "600 MEGA",
      price: "R$ 120,000",
      img: plan1,
      ponto:false,
      qpontos:0,
      wifi6:true,
      sup24:true,
      details:[
        "Sem fidelidade: Contrate sem compromissos de longo prazo.",
        "Primeiro mês grátis, sem custo de mensalidade.",
        "Conexão via tecnologia xPON para máxima estabilidade.",
        "Roteador Wi-Fi 6 de alta performance incluso.",
        "Monitoramento remoto da rede, garantindo disponibilidade proativa.",
        "Atendimento técnico especializado com resolução em até 6 horas.",
        "Manutenção preventiva anual, mantendo sua rede sempre atualizada.",
        "Consultoria inicial personalizada para adaptar a rede às necessidades específicas do negócio."
      ],
      desc: ({...rest}) => {
        return (
          <span {...rest}>
            Pensado para pequenos negócios que precisam de estabilidade e performance para crescer.
          </span>
        );
      }
    },
    {
      title: "Conectividade Refinada",
      banda: "800 MEGA",
      price: "R$ 240,000",
      img: plan2,
      ponto: true,
      qpontos: 1,
      wifi6:true,
      sup24:true,
      details:[
        "Tecnologia xPON para garantir estabilidade de ponta e conexão contínua.",
        "Roteador Wi-Fi 6 de última geração, assegurando cobertura uniforme e velocidade em múltiplos dispositivos.",
        "Atendimento técnico especializado com resolução em até 6 horas.",
        "Monitoramento inteligente da rede com ajustes proativos para evitar interrupções.",
        "Consulta inicial personalizada, para adaptar a rede às necessidades do cliente."
      ],
      desc: ({...rest}) => {
        return (
          <span {...rest}>
            Conectividade sob medida para residências que demandam estabilidade e velocidade com sofisticação. 
          </span>
        );
      }
    },
    {
      title: "Experiência Exclusiva",
      banda: "1 GIGA",
      price: "R$ 360,000",
      img: plan3,
      ponto:true,
      qpontos:1,
      wifi6:true,
      sup24:true,
      supmega:true,
      details:[
        "Conexão via xGpon, uma das tecnologias mais avançadas do mercado, para oferecer máxima estabilidade e eficiência.",
        "Roteador Wi-Fi 6 Plus, projetado para grandes residências, otimizando alcance e desempenho.",
        "Atendimento técnico especializado com resolução em até 4 horas, priorizando a conveniência do cliente.",
        "App de controle de rede exclusivo, com relatórios de desempenho e gestão simplificada de dispositivos conectados.",
        "Backup de conexão para continuidade do serviço mesmo em situações emergenciais.",
        "Personalização completa da rede residencial por especialistas em conectividade."
      ],
      desc: ({...rest}) => {
        return (
          <span {...rest}>
            Velocidade e performance para residências conectadas e sofisticadas, ideal para famílias que utilizam diversos dispositivos simultaneamente.
          </span>
        );
      }
    },
    {
      title: "Conectividade sem Limites",
      banda: "2 GIGA",
      price: "R$ 480,000",
      img: plan4,
      ponto:true,
      qpontos:2,
      wifi6:true,
      sup24:true,
      supmega:true,
      details:[
        "Tecnologia xGpon de ponta, proporcionando velocidades ultra rápidas e baixa latência.",
        "Wi-Fi 7 com suporte a múltiplos dispositivos simultâneos e cobertura otimizada para residências de até 600m².",
        "Até 03 pontos de rede mesh cabeados para garantir a melhor experiência em qualquer ambiente da residência.",
        "Atendimento VIP com técnico especializado em até 3 horas no local, com total discrição e profissionalismo.",
        "Kit premium de conectividade, incluindo cabos de alta performance e acessórios exclusivos.",
        "Monitoramento em tempo real da rede, com ajustes automáticos para garantir máxima performance.",
        "Consultoria tecnológica personalizada, com mapeamento da residência para otimizar a distribuição da rede.",
        "Gerente de contas dedicado, garantindo suporte exclusivo e atendimento prioritário."
      ],
      desc: ({...rest}) => {
        return (
          <span {...rest}>
           Desenvolvido para atender às necessidades de residências sofisticadas e conectadas, entregando velocidades impressionantes, cobertura total e suporte de excelência. 
          </span>
        );
      }
    },
  ];


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
            {plans.map((data, index) => (
                <motion.div
                  key={index}
                  className={styles.cardContainer}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <PlanCard
                    title={data.title}
                    banda={data.banda}
                    onClick={() => handleClickOpen(data)}
                    fundoimg={data.img}
                    ponto={data.ponto}
                    qpontos={data.qpontos}
                    wifi6={data.wifi6}
                    sup24={data.sup24}
                    supmega={data.supmega}
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
        <ContactGeneric Firstsection="true" data={selectedPlan}/>
      </Dialog>
    </div>
  );
}

