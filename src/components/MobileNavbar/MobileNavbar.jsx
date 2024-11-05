import Logo from '../../assets/Logo.svg'
import styles from './styles.module.scss'

export default function MobileNavbar(){
    return(
        <nav className={styles.nav}>
            <img src={Logo} alt="Atria Digital" className={styles.image}/>
            <div className={styles.buttons}>
                <button className={styles.button}>Contato</button>
                <button className={styles.button}>Área do cliente</button>
            </div>
        </nav>
    )
}