import styles from './styles.module.scss'







export default function Footer({next,previous}){
    return(
        <div className={styles.box}>
            <span>{next}</span>
            <span>{previous}</span>
        </div>
    )
}