import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import "../Error404/error404.css";
import img404 from "../../assets/imgs/404 nexora (2).png"



function Error404() {
  return (
    
    <main className="error-page ">
      <div className="logo-fire">
                    <span className="spark spark-1"></span>
                    <span className="spark spark-2"></span>
                    <span className="spark spark-3"></span>
                    <span className="spark spark-4"></span>
                    <span className="spark spark-5"></span>
    

      <div className="error-content">

        <span className="error-number">404</span>

        <h1>GAME OVER</h1>

        <p>
          Parece que esta página se perdió en otra partida.
        </p>

        <p>
          Volvé a Nexora Gaming y continuá explorando.
        </p>

        <div className="error-buttons">

          <Link to="/" className="error-btn error-btn-primary">
            <Home size={20} />
            VOLVER AL INICIO
          </Link>



        </div>

      </div>

      <div className="error-image">
        <img
          src={img404}
          alt="Personaje de Nexora Gaming"
        />
      </div>
      </div>

    </main>
  );
}

export default Error404;