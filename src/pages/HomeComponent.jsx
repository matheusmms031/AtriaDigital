import React from "react";
import styles from './HomeComponent.module.css';

function HomeComponent() {
  return (
    <main className={styles.home}>
      <div className={styles.mainContent}>
        <section className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h1 className={styles.mainHeading}>
              A melhor conexão da região metropolitana
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sagittis laoreet. Morbi tortor lectus, pharetra eget fermentum ac, pulvinar eget eros. Nullam at venenatis tellus. Duis purus ipsum, elementum eget elementum quis, blandit et ipsum. Maecenas sed nisi eget dui euismod accumsan.
            </p>
          </div>
          <div className={styles.iconWrapper}>
            <div className={styles.iconContainer}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/28255be922f091137db06111330fc8c83ffad31e2020cdac9a4c6f236a952e02?placeholderIfAbsent=true&apiKey=70a1013b13984fc4a386c8157513f6f8" className={styles.icon} alt="" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomeComponent;