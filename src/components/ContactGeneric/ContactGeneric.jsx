import { useState } from "react";
import styles from './styles.module.scss'
import ContactImage from "../../assets/contact.svg"
import { motion } from "framer-motion";
import arrow from '../../assets/arrow.svg'
import arrowdown from '../../assets/arrowdown.svg'
import { Alert } from "@mui/material";

    function FirstSection({data}) {
        return(
            <motion.section 
                className={styles.Firstsection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    className={styles.box}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>
                        Entre em contato para fazer parte da Átria
                    </h1>
                    <h3>
                        Seja nosso cliente fiel e garanta a gama de vantagens e oportunidades que te esperam
                    </h3>
                </motion.div>
                <motion.img 
                    src={ContactImage} 
                    alt="Contato" 
                    className={styles.logo}
                    transition={{ duration: 0.5 }}
                />
                <motion.div 
                    className={styles.box2}
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{display:'flex',alignItems:'end', flexDirection:'column'}} >
                        <span style={{fontSize:"1vw"}}>Fibra Óptica</span>
                        <h2>PLANO {data.title}</h2>
                        <div style={{display:'flex', gap:'0.3vw'}}>
                            <motion.div 
                                className={styles.assets}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <span>{data.banda}</span>
                                <img src={arrow} style={{width:"0.8vw"}}/>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        )
    }

export default function ContactGeneric({Firstsection = false,data = {}, phone='+5511999999999'}) {
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
            Olá tudo bem? Venho através do site, e tenho interesse em conhecer o plano ${plan}.
            Meu nome é ${formData.name}
            Meu contato é: ${formData.phone}
            Meu email é ${formData.email}
            Mensagem: ${formData.message}`;
          } else {
            setSendSuccess(false);
          }
      };

    return(
        <motion.div
            {...Firstsection? null : { initial: { opacity: 0, x:100 }, animate: { opacity: 1, x:0 } }}
            transition={{ duration: 1.5, type: "spring", }}
        >
            <div className={styles.ContactGeneric}>
                { Firstsection ? <FirstSection data={data}/> : null}
                <motion.section 
                    className={styles.Secondsection}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <div className={styles.textBox}>
                        <h2>Venha fazer parte conosco</h2>
                        <h4>Não perca essa oportunidade</h4>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div style={{display:'flex', flexDirection:'column',gap:'1vh'}}>
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
                            {
                                Firstsection? (
                                    <></>
                                ) : (
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
                                )
                            }
                        </div>
                        <motion.button 
                            type="submit"
                            initial={{ color: '#000' }}
                            onClick={handleSubmit}
                            whileHover={{ backgroundColor: '#FF7B00', color: '#fff' }}
                        >
                            ENVIAR
                        </motion.button>
                        {
                            sendSuccess? (
                                <></>
                            ) : (
                                <Alert severity="warning">Preencha todos os campos por gentileza.</Alert>
                            )
                        }
                    </form>
                </motion.section>
            </div>
        </motion.div>
    )
}
