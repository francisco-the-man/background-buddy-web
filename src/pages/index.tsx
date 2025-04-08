import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {CornerDownRight} from 'react-feather';

export default function Home() {
    const basePath = 'https://francisco-the-man.github.io/background-buddy-web'
  return (
    <div className={styles.container}>
      <Head>
        <title>Background Buddy</title>
        <meta name="description" content="A browser-based tool that surfaces a knowledge graph" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section id="home" className={styles.section}>
          <div className={styles.heroContainer}>
            
              <img 
                src={`${basePath}/images/home/card_top.svg`} 
                alt="Background Buddy Diagram Top" 
                width={500} 
                height={300}
                className={styles.heroDiagram}
              />
              <div style={{ position: 'relative' }}>
                <img 
                  src={`${basePath}/images/home/card_bottom.svg`} 
                  alt="Background Buddy Diagram" 
                  width={500} 
                  height={300}
                  className={styles.heroDiagram}
                />
                
                <a 
                  href="https://francisco-the-man.github.io/background-buddy-web/contact"
                  style={{
                    position: 'absolute',
                    left: '49px',
                    top: '250px',
                    width: '30px',
                    height: '40px',
                    zIndex: 10
                  }}
                >
                  
                </a>
                
                <a 
                  href="https://francisco-the-man.github.io/background-buddy-web/team"
                  style={{
                    position: 'absolute',
                    left: '365px',
                    top: '250px',
                    width: '30px',
                    height: '40px',
                    zIndex: 10
                  }}
                >
                </a>
              </div>
            </div>
            
        </section>
        
        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About us</h2>
          
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
            We're a group of Stanford students building Background Buddy: a browser-based tool that surfaces a knowledge graph extracted 
            from newsroom archives. It identifies <u>entities</u> (people, places, laws, organizations) and maps their <u>relationships</u> (WORKS_FOR, VETOED, 
            SUPPORTED_BY, etc.) across time. This turns static archives into a living, queryable network. It builds a system that preserves context 
            and makes it accessible to new journalists through intuitive prompts. Ask a question like: "How is Jacob Frey connected to water security 
            issues via corporations that supported his mayoral opposition?" —and you get back not just text, but the precise, source-backed relationships 
            that answer it. Every node is linked to the original reporting. Every path tells a story.
            </p>
            
            <p className={styles.aboutText}>
            This isn't just search—it's investigative inference. It helps junior reporters grasp decades of background in minutes. It flags contradictions: a politician's public stance on housing policy vs. their voting record. It surfaces overlooked connections that might spark new leads. And crucially, it's built with journalists, for journalists.
            </p>
            
            <div className={styles.builtBySection}>
              <div className={styles.builtByDiagram}>
                <img 
                  src={`${basePath}/images/home/diagram_by_and_for.svg`} 
                  alt="Built By Diagram" 
                  width={400} 
                  height={200}
                  className={styles.builtByImage}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Architecture Section */}
        <section id="architecture" className={styles.section}>
          <h2 className={styles.sectionTitle}>Architecture</h2>
          
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Background Buddy is an AI-native data extraction tool. We use Natural Language Processing (NLP) in
              combination with AI to extract our knowledge graph. Then, we use machine learning to surface the
              right information to users.
            </p>
            
            <div className={styles.architectureDiagram}>
              <img 
                src={`${basePath}/images/home/architecture.svg`} 
                alt="Architecture Diagram" 
                width={700} 
                height={400}
                className={styles.architectureImage}
              />
            </div>
            
            <p className={styles.aboutText}>
            One of the core challenges of this project is ensuring the accuracy and trustworthiness of
             the information that Background Buddy surfaces. In journalism, even minor inaccuracies 
             can have significant consequences, so we're taking rigorous steps to put humans in the loop and ensure data integrity.
            </p>
            
            <ul className={styles.aboutList}>
              <li><CornerDownRight className={styles.listIcon} /> We're training our own NER model</li>
              <li><CornerDownRight className={styles.listIcon} /> We've got "human in the loop" verification at each extraction step</li>
              <li><CornerDownRight className={styles.listIcon} /> All extracted information is dated and cited</li>
            </ul>
            
            <p className={styles.aboutText}>
            Another important challenge is creating seamless integration into real newsroom workflows. If the tool is overly complex 
            or time-consuming, it won't be used. That's why we're working closely with journalists at the Minnesota Star Tribune, focusing 
            on intuitive, low-friction interfaces that provide immediate value in the reporting process.
            </p>
            
            <p className={styles.aboutText}>
            One example of that is our natural language to cypher query feature that translates questions to precise cypher queries, so 
            that users can take advantage of the powerful cypher query framework without the syntactic baggage.
            </p>
            
            <div className={styles.queryDiagram}>
              <img 
                src={`${basePath}/images/home/graph_build.svg`} 
                alt="Query Diagram" 
                width={900} 
                height={400}
                className={styles.queryImage}
              />
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section id="demo" className={styles.section}>
          <h2 className={styles.sectionTitle}>Demo</h2>
          
          <div className={styles.demoContent}>
            <div className={styles.videoWrapper}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/s7vzvZQmQ80?si=YDnMGPC_e9nzwAOd"
                    title="Background Buddy Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </main>

      <map name="cardMap">
        <area 
          shape="rect" 
          coords="49,279,89,319" 
          href="https://francisco-the-man.github.io/background-buddy-web/contact" 
          alt="Contact" 
        />
        <area 
          shape="rect" 
          coords="431,279,471,319" 
          href="https://francisco-the-man.github.io/background-buddy-web/team" 
          alt="Team" 
        />
      </map>
    </div>
  );
} 