import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const teamMembers = [
  {
    name: 'Hannah',
    image: '/images/team/hannah.png',
    degrees: [
      'B.A Journalism',
      'M.A Data Journalism'
    ],
    website: 'https://www.linkedin.com/in/hannah-woodworthh/'
  },
  {
    name: 'Avery',
    image: '/images/team/avery.png',
    degrees: [
      'B.S Symbolic Systems',
      'M.S Symbolic Systems'
    ],
    website: 'https://francisco-the-man.com'
  },
  {
    name: 'Lucy',
    image: '/images/team/lucy.png',
    degrees: [
      'B.S Computer Science',
      'M.S Computer Science'
    ],
    website: 'https://lucyzimmo.github.io/LucyZimmerman/'
  },
  {
    name: 'Akanshya',
    image: '/images/team/akanshya.png',
    degrees: [
      'B.S Computer Science',
      'M.S Computer Science'
    ],
    website: 'https://www.linkedin.com/in/akanshyabhat/'
  }
];

export default function Team() {
    const basePath = 'https://francisco-the-man.github.io/background-buddy-web'
  return (
    <div className={styles.container}>
      <Head>
        <title>Background Buddy - Team</title>
        <meta name="description" content="Meet the Background Buddy team" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.contactSection}>   
          <h1 className={styles.sectionTitle}>Our team</h1>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamMember}>
                <Image 
                  src={`${basePath}${member.image}`}
                  alt={`${member.name}'s photo`}
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
                <a href={member.website} className={styles.textLink}>{member.name}</a>
                {member.degrees.map((degree, index) => (
                  <p key={index} className={styles.teamDegree}>{degree}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}