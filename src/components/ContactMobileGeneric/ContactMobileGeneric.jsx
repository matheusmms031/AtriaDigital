import styles from './styles.module.scss'
import { useState } from "react";


export default function ContactMobileGeneric({data = {}, phone="+553123331401"}) {
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
      <div className={styles.contactmobile}>
        <div className={styles.texts}>
          <h2>Entre em contato conosco</h2>
        </div>
        <form className={styles.formsbox}>
          <div className={styles.itemform}>
            <span>Nome</span>
            <input
              type="text"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.itemform}>
            <span>Email</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.itemform}>
            <span>Celular</span>
            <input
              type="text"
              placeholder="(31) xxxxx-xxxx"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.itemform}>
            <span>Rua</span>
            <input
              type="text"
              placeholder="Rua"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
            />
          </div>
          <div className={styles.itemform}>
            <span>Bairro</span>
            <input
              type="text"
              placeholder="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
          </div>
          <div className={styles.itemform}>
            <span>Número</span>
            <input
              type="text"
              placeholder="xxx"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              className={styles.numero}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            ENVIAR
          </button>
        </form>
      </div>
    );
}