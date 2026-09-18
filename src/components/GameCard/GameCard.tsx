/* Dependencies */
import { ShoppingCart } from "lucide-react";

/* Local */
import "./GameCard.css";
import { type Game } from "../../context/gameContext/gameContext";

/* interface Juego {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
} */

interface GameCardProps {
  juego: Game;
}

function GameCard({ juego }: GameCardProps) {
  return (
    <article className="game-card">

      <div className="game-card-image">
        <img src={juego.img_portrait === "" ? undefined : juego.img_portrait} alt={juego.title} />

        <div className="game-card-category">
          {juego.genre.map((m,i) =>
            (<span key={i} className={"game-category"}>
            {m}
          </span>)
          )}
        </div>
        
      </div>

      <div className="game-card-info">

        <h3>{juego.title}</h3>

        <p>{juego.description}</p>

        <div className="game-card-bottom">

          <span className="game-price">
            ${juego.price.toLocaleString("es-AR")}
          </span>

          <button className="btn-game">
            <ShoppingCart size={16} />
            AGREGAR
          </button>

        </div>

      </div>

    </article>
  );
}

export default GameCard;