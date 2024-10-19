import styles from './styles.module.scss'


export default function BoxGeneric({children='teste', className=NaN, ...rest}){

    return(
        <div className={`${styles.box} ${className}`} {...rest}>
            {children}
        </div>
    )
}