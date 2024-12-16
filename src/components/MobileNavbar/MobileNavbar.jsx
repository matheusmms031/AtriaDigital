import Logo from '../../assets/Logo.svg'
import styles from './styles.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MobileNavbar(){
    return(
        <nav className={styles.nav}>
            <div className={styles.navcontent}>
                <img src={Logo} alt="Atria Digital" className={styles.image}/>
                <div className={styles.buttons}>
                    <a href='https://central.2itelecom.hubsoft.com.br' className={styles.link} target="_blank">
                        <AccountCircleIcon className={styles.icon} sx={{color:'white',fontSize:'9vw'}}/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

