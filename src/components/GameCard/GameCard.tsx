import { ShoppingCart } from "lucide-react";
import "./GameCard.css";

interface Juego {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

interface GameCardProps {
  juego: Juego;
}

function GameCard({ juego }: GameCardProps) {
  return (
    <article className="game-card">

      <div className="game-card-image">
        <img src={juego.imagen} alt={juego.nombre} />

        <span className="game-category">
          {juego.categoria}
        </span>
      </div>

      <div className="game-card-info">

        <h3>{juego.nombre}</h3>

        <p>{juego.descripcion}</p>

        <div className="game-card-bottom">

          <span className="game-price">
            ${juego.precio.toLocaleString("es-AR")}
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