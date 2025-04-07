import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/background-buddy-web/team" className={styles.footerButton}>
          meet the team
        </Link>
        <Link href="/background-buddy-web/contact" className={styles.footerButton}>
          contact us
        </Link>
      </div>
      <div className={styles.footerLine}></div>
    </footer>
  );
};

export default Footer;