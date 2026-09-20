/* Dependencies */

import { ShoppingCart } from "lucide-react";
import { message } from "antd";

/* Local */
<<<<<<< HEAD

import "./GameCard.css";

import { type Game } from "../../context/gameContext/gameContext";
import { getLS, setLS } from "../../utils/localstorage";

=======
import "./GameCard.css";
import { useNavigate } from "react-router-dom";
import { type Game } from "../../context/gameContext/gameContext";

>>>>>>> 41a0c00874ff5ae21f5e3c4a3ea93361052cba23
interface GameCardProps {
  juego: Game;
}

function GameCard({ juego }: GameCardProps) {
<<<<<<< HEAD

  const handleAgregarCarrito = () => {
    // Obtener los juegos que ya están en el carrito
    const carrito = getLS<Game[]>("carrito") ?? [];

    // Verificar si el juego ya está agregado
    const yaExiste = carrito.some(
      (juegoCarrito) => juegoCarrito.game_id === juego.game_id
    );

    if (yaExiste) {
      message.info("Este juego ya está en tu carrito");
      return;
    }

    // Agregar el nuevo juego
    const nuevoCarrito = [...carrito, juego];

    // Guardar el carrito
    setLS("carrito", nuevoCarrito);

    // Mostrar mensaje
    message.success(`${juego.title} se agregó al carrito`);
  };

  return (
    <article className="game-card">

=======
  const navigate = useNavigate();

  const toDetail = (id:string)=>{
    navigate("/detail/" + id);
  }

  return (
    <article 
    className="game-card"
    onClick={() => toDetail(juego.game_id)}
    >
>>>>>>> 41a0c00874ff5ae21f5e3c4a3ea93361052cba23
      <div className="game-card-image">

        <img
          src={
            juego.img_portrait === ""
              ? undefined
              : juego.img_portrait
          }
          alt={juego.title}
        />

        <div className="game-card-category">
          {juego.genre.map((m, i) => (
            <span key={i} className="game-category">
              {m}
            </span>
          ))}
        </div>

      </div>

      <div className="game-card-info">

        <h3>{juego.title}</h3>

        <p>{juego.description}</p>

        <div className="game-card-bottom">

          <span className="game-price">
            ${juego.price.toLocaleString("es-AR")}
          </span>

          <button
            className="btn-game"
            onClick={handleAgregarCarrito}
          >
            <ShoppingCart size={16} />
            AGREGAR
          </button>

        </div>

      </div>

    </article>
  );
}

export default GameCard;