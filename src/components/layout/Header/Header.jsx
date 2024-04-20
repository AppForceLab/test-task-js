import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <p>CAMPERS</p>
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
