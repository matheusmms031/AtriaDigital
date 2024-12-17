import BoxGeneric from "../../components/BoxGeneric/BoxGeneric";
import ContactGeneric from "../../components/ContactGeneric/ContactGeneric.jsx";
import { useState } from "react";
import styles from "../../components/ContactGeneric/styles.module.scss";
import { motion } from "framer-motion";
import { Alert } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Contato() {

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
            location.href = `https://api.whatsapp.com/send/?phone=32123&text=
            Olá tudo bem?.
            Meu nome é ${formData.name}
            Meu contato é: ${formData.phone}
            Meu email é ${formData.email}
            Mensagem: ${formData.message}`;
          } else {
            setSendSuccess(false);
          }
      };

    return (
        <div
        className={styles.home}>
        <BoxGeneric>
            <motion.div>
            <div className={styles.ContactGeneric2}>
                <motion.section
                    className={styles.Secondsection2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <div className={styles.textBox}>
                        <h2>Entre em contato</h2>
                        <h4>Não perca essa oportunidade</h4>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                            <motion.div
                                className={styles.itemform}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, delay: 0.1 }}
                            >
                                <span>NOME</span>
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            <div className={styles.boxform}>
                                <motion.div
                                    className={styles.itemform}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.2 }}
                                >
                                    <span>EMAIL</span>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </motion.div>
                                <motion.div
                                    className={styles.itemform}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.3 }}
                                >
                                    <span>CELULAR</span>
                                    <input
                                        type="text"
                                        placeholder="(31) xxxxx-xxxx"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </motion.div>
                            </div>
                            <div className={styles.boxform}>
                                <motion.div
                                    className={styles.itemform}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.4 }}
                                >
                                    <span>RUA</span>
                                    <input
                                        type="text"
                                        placeholder="Rua"
                                        name="rua"
                                        value={formData.rua}
                                        onChange={handleChange}
                                    />
                                </motion.div>
                                <motion.div
                                    className={styles.itemform}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.5 }}
                                >
                                    <span>BAIRRO</span>
                                    <input
                                        type="text"
                                        placeholder="Bairro"
                                        name="bairro"
                                        value={formData.bairro}
                                        onChange={handleChange}
                                    />
                                </motion.div>
                                <motion.div
                                    className={styles.itemform}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.6 }}
                                >
                                    <span>NÚMERO</span>
                                    <input
                                        type="text"
                                        placeholder="xxx"
                                        name="numero"
                                        value={formData.numero}
                                        onChange={handleChange}
                                        className={styles.numero}
                                    />
                                </motion.div>
                            </div>

                                    <motion.div
                                        className={styles.itemform2}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.75, delay: 0.7 }}
                                    >
                                        <span>MENSAGEM</span>
                                        <textarea
                                            type="text"
                                            placeholder="Mensagem"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={styles.message}
                                        />
                                    </motion.div>
                                
                        </div>
                        {
                            sendSuccess ? (
                                <></>
                            ) : (
                                <Alert severity="warning">Preencha todos os campos por gentileza.</Alert>
                            )
                        }
                        <motion.button
                            type="submit"
                            initial={{ color: '#000' }}
                            onClick={handleSubmit}
                            whileHover={{ backgroundColor: '#FF7B00', color: '#fff' }}
                        >
                            ENVIAR
                        </motion.button>
                    </form>
                </motion.section>
            </div>
            </motion.div>
        </BoxGeneric >
        </div>
    )
}