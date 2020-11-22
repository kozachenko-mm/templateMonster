  
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={`container ${styles.nav}`}>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
          Home
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to="/favorites" className={styles.link} activeClassName={styles.activeLink}>
          Favorites
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;