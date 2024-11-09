import { useState } from "react";
import styles from './styles.module.scss'
import ContactImage from "../../assets/contact.svg"
import { motion } from "framer-motion";
import arrow from '../../assets/arrow.svg'
import arrowdown from '../../assets/arrowdown.svg'

function FirstSection() {
return(
    <section className={styles.Firstsection}>
                <div className={styles.box}>
                    <h1>
                        Entre em contato para fazer parte da Átria
                    </h1>
                    <h3>
                        Seja nosso cliente fiel e garanta a gama de vantagens e oportunidades que te esperam
                    </h3>
                </div>
                <img src={ContactImage} alt="Contato" className={styles.logo}/>
                <div className={styles.box2}>
                    <div style={{display:'flex',alignItems:'end', flexDirection:'column'}} >
                        <span style={{fontSize:"1vw"}}>Fibra Óptica</span>
                        <h2>PLANO BÁSICO</h2>
                        <div style={{display:'flex', gap:'0.3vw'}}>
                            <div className={styles.assets}>
                                <span>500 MEGA</span>
                                <img src={arrow} style={{width:"0.6vw"}}/>
                            </div>
                            <div className={styles.assets}>
                                <span>500 MEGA</span>
                                <img src={arrowdown} style={{width:"0.6vw"}}/>
                            </div>
                        </div>
                    </div>
                    <span className={styles.price}>R$ 100,00</span>
                </div>
            </section>
)
}


export default function ContactGeneric({Firstsection = false}) {
    return(
        <div className={styles.ContactGeneric}>
            { Firstsection ? <FirstSection/> : null}
            <section className={styles.Secondsection}>
                <div className={styles.textBox}>
                    <h2>Venha fazer parte conosco</h2>
                    <h4>Não perca essa oportunidade</h4>
                </div>
                    <form className={styles.form}>
                        <div style={{display:'flex', flexDirection:'column',gap:'1vh'}}>
                            <div className={styles.itemform}>
                                <span>NOME</span>
                                <input type="text" placeholder="Nome"/>
                            </div>
                            <div className={styles.boxform}>
                                <div className={styles.itemform}>
                                    <span>EMAIL</span>
                                    <input type="email" placeholder="Email"/>
                                </div>
                                <div className={styles.itemform}>
                                    <span>CELULAR</span>
                                    <input type="text" placeholder="(31) xxxxx-xxxx"/>
                                </div>
                            </div>
                            <div className={styles.boxform}>
                                <div className={styles.itemform}>
                                    <span>RUA</span>
                                    <input type="text" placeholder="Rua" name="rua"/>
                                </div>
                                <div className={styles.itemform}>
                                    <span>BAIRRO</span>
                                    <input type="text" placeholder="Bairro"/>
                                </div>
                                <div className={styles.itemform}>
                                    <span>NÚMERO</span>
                                    <input type="text" placeholder="xxx" name="numero" className={styles.numero}/>
                                </div>
                            </div>
                        </div>
                        <motion.button type="submit"
                            initial={{ color: '#000' }}
                            whileHover={{ backgroundColor: '#FF7B00', color: '#fff' }}
                        
                        >ENVIAR</motion.button>
                    </form>
            </section>
        </div>
    )
}