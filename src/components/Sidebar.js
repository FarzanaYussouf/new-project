

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="#Home" className={styles.button}>
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
        <span className={styles.text}>Home</span>
      </a>
      <a href="#About" className={styles.button}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <span className={styles.text}>About</span>
      </a>
      <a href="#banner" className={styles.button}>
        <FontAwesomeIcon icon={faCog} className={styles.icon} />
        <span className={styles.text}>Services</span>
      </a>
      <a href="#Contact" className={styles.button}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <span className={styles.text}>Contact</span>
      </a>
    </div>
  )

};

export default Sidebar;
