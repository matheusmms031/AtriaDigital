import React from "react";
import styles from './HomeComponent.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItem}>Menu</div>
      <div className={styles.footerItemRight}>Sobre</div>
    </footer>
  );
}

export default Footer;