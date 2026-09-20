/* Dependencies */

import { ShoppingCart } from "lucide-react";
import { message } from "antd";

/* Local */

import "./GameCard.css";

import {
  type Game,
} from "../../context/gameContext/gameContext";

import { useGame } from "../../hooks/useGame";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

interface GameCardProps {
  juego: Game;
}

function GameCard({ juego }: GameCardProps) {
  const navigate = useNavigate();
  const { agregarCarrito } = useGame();
  const {usuarioActual} = useUser();

  const toDetail = ()=>{
    navigate("/detail/" + juego.game_id);
  }



  const handleAgregarCarrito = () => {
    if(!usuarioActual) return message.info(
        "Debe iniciar sesion para comprar juegos"
      )
    const agregado =
      agregarCarrito(juego);

    if (agregado === false) {

      message.info(
        "Este juego ya está en tu carrito"
      );

      return;
    }

    message.success(
      `${juego.title} se agregó al carrito`
    );

  };


  return (

    <article className="game-card">

      <div className="game-card-image" onClick={toDetail}>

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

            <span
              key={i}
              className="game-category"
            >
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