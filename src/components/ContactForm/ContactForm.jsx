import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <motion.div style={styles.container}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
        duration: 1.5,
        type: "spring",
        delay: 0.2,
    }}
    
    >
      <h2 style={styles.title}>Entre em Contato</h2>
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
              type="tel"
              name="phone"
              value={formData.phone}
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
    </motion.div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '4vh',
    border: '0.1vw solid black',
    borderRadius: '0.4vmax',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: '2vmax',
    marginBottom: '2vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5vh',
  },
  label: {
    color: 'black',
    fontSize: '1vmax',
    fontWeight: 'bold',
    marginBottom: '0.5vh',
  },
  input: {
    padding: '1vh',
    fontSize: '0.8vmax',
    border: '0.1vw solid black',
    borderRadius: '0.4vmax',
    color: 'black',
    backgroundColor: 'white',
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
    border: '0.1vw solid black',
    borderRadius: '0.4vmax',
    color: 'black',
    backgroundColor: 'white',
  },
  textarea: {
    padding: '1vh',
    fontSize: '0.8vmax',
    height:"5vmax",
    border: '0.1vw solid black',
    borderRadius: '0.4vmax',
    resize: "none",
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    padding: '1vh',
    fontSize: '1vmax',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '0.4vmax',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    hover:{
        backgroundColor:"#fffff",
    }
  },
};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  button:hover {
    background-color: orange !important;
  }
`, styleSheet.cssRules.length);

export default ContactForm;