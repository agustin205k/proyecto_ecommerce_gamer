/* Local */
import styles from "./about.module.css"
import iconGame from "../../assets/icons/game.png";
import iconCommunity from "../../assets/icons/community.png";
import iconSecurity from "../../assets/icons/security.png";
import iconUser from "../../assets/icons/user.png";
import perfilAndrea from "../../assets/imgs/perfilAndrea.jpeg";
import perfilAgustin from "../../assets/imgs/perfilAgustin.webp";
import perfilGerardo from "../../assets/imgs/perfilGerardo.jpeg";
import perfilAlan from "../../assets/imgs/perfilAlan.jpeg";


function About(){
 return(
  <>
    <div className={styles.about}>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.hero__titleContainer}>
            <h2 className={styles.hero__title}>Sobre Nosotros</h2>
            <h3 className={styles.hero__subtitle}>Somos un equipo de gamers, para gamers</h3>
          </div>
          
          <p className={styles.hero__p}>En <strong>Nexora Gaming</strong> creemos que los videojuegos son más que un hobby, son una forma de vida. Por eso, creamos esta plataforma para que puedan encontrar,comprar y disfrutar tus juegos favoritos de manera facil, seguro y rapido.</p>
        </div>
      </div>
      <div className={styles.icons}>
        <ul className={styles.iconsList}>
          <li className={styles.iconsList__item}>
            <img className={styles.iconsList__img} src={iconGame} alt="" />
            <h4 className={styles.iconsList__title}>Pasion</h4>
            <span className={styles.iconsList__span}>por los juegos</span>
          </li>
          <li className={styles.iconsList__item}>
            <img className={styles.iconsList__img} src={iconSecurity} alt="" />
            <h4 className={styles.iconsList__title}>Compras</h4>
            <span className={styles.iconsList__span}>seguras</span>
          </li>
          <li className={styles.iconsList__item}>
            <img className={styles.iconsList__img} src={iconUser} alt="" />
            <h4 className={styles.iconsList__title}>Soporte</h4>
            <span className={styles.iconsList__span}>personalizado</span>
          </li>
          <li className={styles.iconsList__item}>
            <img className={styles.iconsList__img} src={iconCommunity} alt="" />
            <h4 className={styles.iconsList__title}>Comunidad</h4>
            <span className={styles.iconsList__span}>gamer</span>
          </li>
        </ul>
      </div>
      <div className={styles.team}>
        <h2 className={styles.teamTitle}>Nuestro Equipo</h2>
        <ul className={styles.teamList}>
          <li className={styles.teamList__item}>
            <img className={styles.teamList__img} src={perfilAndrea} alt="" />
            <h4 className={styles.teamList__title}>Andrea Costas</h4>
            <span className={styles.teamList__span}>Scrum Master</span>
          </li>
          <li className={styles.teamList__item}>
            <img className={styles.teamList__img} src={perfilAgustin} alt="" />
            <h4 className={styles.teamList__title}>Agustín Solórzano</h4>
            <span className={styles.teamList__span}>Lider Tecnico</span>
          </li>
          <li className={styles.teamList__item}>
            <img className={styles.teamList__img} src={perfilGerardo} alt="" />
            <h4 className={styles.teamList__title}>Julio Gerardo Monteros</h4>
            <span className={styles.teamList__span}>Programador</span>
          </li>
          <li className={styles.teamList__item}>
            <img className={styles.teamList__img} src={perfilAlan} alt="" />
            <h4 className={styles.teamList__title}>Alan Valdez</h4>
            <span className={styles.teamList__span}>Programador</span>
          </li>
        </ul>
      </div>
    </div>
  </>
 );
}

export default About;