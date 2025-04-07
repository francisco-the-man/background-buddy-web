import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Background Buddy - Contact</title>
        <meta name="description" content="Contact Background Buddy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.shortMain}>
        <section id="contact" className={styles.contactSection}>   
            <div className={styles.contactContent}>
                <p className={styles.contactText}>
                    We'd love to hear from you.
                </p>
                <p className={styles.contactText}>
                    Email us at <a href="mailto:someemail@email.com" className={styles.textLink}>someemail@email.com</a>
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
