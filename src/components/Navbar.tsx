import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'home', href: '/background-buddy-web/#home' },
  { label: 'about', href: '/background-buddy-web/#about' },
  { label: 'demo', href: '/background-buddy-web/#demo' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  useEffect(() => {
    // Only run scroll detection on the main page
    if (router.pathname === '/') {
      const handleScroll = () => {
        const sections = navItems.map(item => item.label);
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [router.pathname]);

  const handleNavClick = (href: string) => {
    // If we're not on the main page, navigate there first
    if (router.pathname !== '/') {
      router.push(href);
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>Background Buddy</Link>
      <div className={styles.navLinks}>
        {navItems.map((item, index) => (
          <React.Fragment key={item.label}>
            {index > 0 && (
              <div className={styles.separator}>
                <div className={styles.line}></div>
                <div className={styles.arrowhead}></div>
              </div>
            )}
            <Link 
              href={item.href}
              className={`${styles.navButton} ${activeSection === item.label && router.pathname === '/' ? styles.active : ''}`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.navbarLine}></div>
    </nav>
  );
};

export default Navbar; 