/* Dependencies */
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

/* Local */
import styles from "./layout.module.css";

function Layout(){
 return(
  <>
    <div className={styles.webPageLayout}>
      <header className={styles.webPageLayout__header}>
        <nav className={styles.webPageLayout__nav}>
          <ul className={styles.webPageLayout__navList}>
            <li className={styles.webPageLayout__navLink}><Link to={"/"}>inicio</Link></li>
            <li className={styles.webPageLayout__navLink}><Link to={"/about"}>About</Link></li>
            <li className={styles.webPageLayout__navLink}><Link to={"/register"}>Register</Link></li>
          </ul>
        </nav>
        
      </header>
      <div className={styles.webPageLayout__main}>
        <Outlet/>
      </div>
      <footer className={styles.webPageLayout__footer}>
        <p>&copy;Developer</p>
      </footer>
    </div>
  </>
 );
}

export default Layout;