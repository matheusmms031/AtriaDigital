import { useState } from "react";
import styles from './styles.module.scss'
import { motion } from "framer-motion";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import features from "../../assets/features.png"
function FirstSection({ data }) {
    return (
        <motion.section
            className={styles.Firstsection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <img src={data.img} className={styles.imagefundo} />
            <motion.div
                className={styles.box}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h1>
                        {data.title}
                    </h1>
                    <h2>
                        {data.banda}
                    </h2>
                </div>
                <motion.div
                    className={styles.box2}
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default function ContactGeneric({ Firstsection = false, data = {}, phone = '+553123331401' }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        rua: '',
        bairro: '',
        numero: '',
    });
    const [sendSuccess, setSendSuccess] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
        if (formData.name && formData.email && formData.phone && formData.bairro && formData.numero, formData.rua) {
            setSendSuccess(true);
            location.href = `https://api.whatsapp.com/send/?phone=${phone}&text=
            Olá tudo bem? Venho através do site, e tenho interesse em conhecer o plano ${data.title}.
            Meu nome é ${formData.name}
            Meu contato é: ${formData.phone}
            Meu email é ${formData.email}
            Mensagem: ${formData.message}`;
        } else {
            setSendSuccess(false);
        }
    };

    return (
        <motion.div
            {...Firstsection ? null : { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }}
            transition={{ duration: 1.5, type: "spring", }}
        >
            <div className={styles.ContactGeneric}>
                {Firstsection ? <FirstSection data={data} /> : null}
                <motion.section
                    className={styles.Secondsection}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <motion.div className={styles.boxleft}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <data.desc className={styles.desc}></data.desc>
                        <div className={styles.boxdetails}>
                            {data.details.map((item, index) => (<li className={styles.details}>{item}</li>))}
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.button}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >   <a href={`https://api.whatsapp.com/send/?phone=31999848584&text=Olá tudo bem? Venho através do site, e tenho interesse em conhecer o plano ${data.title}.`}>
                            <WhatsAppIcon sx={{ fontSize: "1.5vw", color: "#ffffff" }} />
                            <span>ASSINE JÁ</span>
                        </a>
                    </motion.div>
                    <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    src={features} className={styles.features}/>
                </motion.section>
            </div>
        </motion.div>
    )
}
