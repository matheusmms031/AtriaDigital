import AppBarGeneric from "../components/AppBarGeneric/AppBarGeneric";
import BoxGeneric from "../components/BoxGeneric/BoxGeneric";
import video from '../assets/1015(2).mp4'
import styles from './styles.module.scss'

export default function Home(){
    return(
        <div className={styles.home}>
            <video src={video} autoPlay muted loop/>
            <AppBarGeneric/>
            <BoxGeneric>
            </BoxGeneric>
        </div>
    )
}