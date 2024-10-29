
import styles from "./PlanCard.module.scss";

const PlanCard = ({ title, price, bandwidth, features }) => {
  return (
    <div className={styles.planCard}>
      <div className={styles.header}>{title}</div>
      <div className={styles.bandwidth}>{bandwidth}</div>
      <div className={styles.price}>{price}</div>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>{feature}</li>
        ))}
      </ul>
      <button className={styles.button}>Escolher Plano</button>
    </div>
  );
};

export default PlanCard;
