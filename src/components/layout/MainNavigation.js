import { NavLink } from "react-router-dom";
import styles from './MainNavigation.module.css'

const MainNavigation = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>Great Quotes</h2>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/quotes'>All Quotes</NavLink>
          </li>
          <li>
            <NavLink to='/new-quote'>Add a Quote</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
