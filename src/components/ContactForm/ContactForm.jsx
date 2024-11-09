import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Alert from '@mui/material/Alert';

const ContactForm = ({title = 'Entre em contato', initial={ opacity: 0, x: 100 }, animate={ opacity: 1, x: 0 }, phone,plan}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    rua: '',
    numero: '',
  });
  const [sendSuccess, setSendSuccess] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    if (formData.name && formData.email && formData.phone && formData.message) {
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

  return (
    <motion.div style={styles.container}
    initial={initial}
    animate={animate}
    transition={{
        duration: 1.5,
        type: "spring",
        delay: 0.2,
    }}
    
    >
      <h2 style={styles.title}>{title}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <div style={styles.row}>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.fieldContainer}>
            <label style={styles.label}>Celular</label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Rua</label>
            <input
              type="text"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.fieldContainer}>
            <label style={styles.label}>Número</label>
            <input
              type="number"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <label style={styles.label}>Mensagem</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      <p></p>
      {
        sendSuccess? (
            <></>
        ) : (
            <Alert severity="warning">Preencha todos os campos por gentileza.</Alert>
        )
      }
    </motion.div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '4vh',
    border: '0.1vw solid white',
    borderRadius: '0.4vmax',
    color: 'white',
    backdropFilter: "blur(5px)",
    backgroundColor: "transparent",

  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: '2vmax',
    marginBottom: '2vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5vh',
  },
  label: {
    color: '#000000',
    fontSize: '1vmax',
    fontWeight: 'bold',
    marginBottom: '0.5vh',
  },
  input: {
    padding: '1vh',
    fontSize: '0.8vmax',
    border: '0.2vw solid white',
    borderRadius: '0.4vmax',
    color: 'white',
    backgroundColor: '#ffffff68',
    
  },
  row: {
    display: 'flex',
    gap: '3vh',
    width: '100%',
  },
  fieldContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  inputrow:{
    width:"100%",
    padding: '1vh',
    fontSize: '0.8vmax',
    border: '0.2vw solid white',
    borderRadius: '0.4vmax',
    color: 'white',
    backgroundColor: 'white',
  },
  textarea: {
    padding: '1vh',
    fontSize: '0.8vmax',
    height:"5vmax",
    border: '0.2vw solid white',
    borderRadius: '0.4vmax',
    resize: "none",
    color: 'white',
    backgroundColor: '#ffffff68',
  },
  button: {
    padding: '1vh',
    fontSize: '1vmax',
    color: '#ff7b00',
    border: 'none',
    borderRadius: '0.4vmax',
    cursor: 'pointer',
    transition: '0.3s',
    backgroundColor: "#ffffff",
  },
};

export default ContactForm;
