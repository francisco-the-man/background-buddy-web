import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Contact() {
    const basePath = 'https://francisco-the-man.github.io/background-buddy-web'
  return (
    <div className={styles.container}>
      <Head>
        <title>Background Buddy - Contact</title>
        <meta name="description" content="Contact Background Buddy" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <Navbar />
      
      <main className={styles.shortMain}>
        <section id="contact" className={styles.contactSection}>   
            <div className={styles.contactContent}>
                <p className={styles.contactText}>
                    We'd love to hear from you.
                </p>
                <p className={styles.contactText}>
                    Email us at <a href="mailto:sub.line.contact.us@gmail.com" className={styles.textLink}>sub.line.contact.us@gmail.com</a>
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
