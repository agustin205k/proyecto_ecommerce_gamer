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
        <ul>
          <li><Link to={"/"}>inicio</Link></li>
          <li><Link to={"/404"}>404</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </header>
      <div className={styles.webPageLayout__main}>
        <Outlet/>
      </div>
      <footer className={styles.webPageLayout__footer}>

      </footer>
    </div>
  </>
 );
}

export default Layout;