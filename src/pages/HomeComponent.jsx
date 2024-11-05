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
            A AtriaDigital é uma empresa de telecomunicações dedicada a fornecer internet de fibra óptica de alta velocidade para bairros de luxo em Belo Horizonte. Com um compromisso de qualidade e excelência, a AtriaDigital entende as demandas de clientes que buscam estabilidade, rapidez e uma experiência de navegação premium. Seus serviços são projetados para maximizar a conectividade, oferecendo planos que garantem alta performance, essencial para atividades como streaming em 4K, videoconferências sem interrupções e uso intensivo de dados.
            Ao focar em regiões específicas, a AtriaDigital personaliza suas soluções para atender às necessidades tecnológicas dos clientes mais exigentes, acompanhando o avanço de tecnologias como automação residencial, streaming em múltiplos dispositivos e ambientes de trabalho remoto.
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