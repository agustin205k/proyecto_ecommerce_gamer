import { useEffect, useState } from "react";

import {
  ShoppingCart,
  ArrowLeft,
  Trash2,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Cart.css";

import type { Game } from "../../context/gameContext/gameContext";
import { getLS, setLS } from "../../utils/localstorage";

function Cart() {

  const [juegos, setJuegos] = useState<Game[]>([]);

  // Cargar carrito cuando entramos a la página
  useEffect(() => {
    const carrito = getLS<Game[]>("carrito") ?? [];

    setJuegos(carrito);
  }, []);

  // Eliminar juego
  const eliminarJuego = (id: string) => {

    const nuevosJuegos = juegos.filter(
      (juego) => juego.game_id !== id
    );

    setJuegos(nuevosJuegos);

    setLS("carrito", nuevosJuegos);
  };

  // Calcular subtotal
  const subtotal = juegos.reduce(
    (total, juego) => total + juego.price,
    0
  );

  return (
    <main className="carrito-page">

      <div className="carrito-header">
        <h1>MI CARRITO</h1>

        <p>
          Revisá los juegos que seleccionaste antes de comprar.
        </p>
      </div>

      <div className="carrito-content">

        {/* JUEGOS SELECCIONADOS */}

        <section className="carrito-juegos">

          <div className="carrito-section-header">
            <ShoppingCart />

            <h2>JUEGOS SELECCIONADOS</h2>
          </div>

          {juegos.length === 0 ? (

            <div className="carrito-vacio">

              <div className="carrito-vacio-icon">
                <ShoppingCart />
              </div>

              <h2>Tu carrito está vacío</h2>

              <p>
                Todavía no agregaste ningún juego.
                Explorá nuestro catálogo y encontrá tu próxima aventura.
              </p>

              <Link
                to="/"
                className="btn-ver-catalogo"
              >
                <ArrowLeft size={18} />

                VER CATÁLOGO
              </Link>

            </div>

          ) : (

            <div className="juegos-lista">

              {juegos.map((juego) => (

                <article
                  className="juego-carrito"
                  key={juego.game_id}
                >

                  <div className="juego-carrito-imagen">

                    <img
                      src={juego.img_portrait}
                      alt={juego.title}
                    />

                  </div>

                  <div className="juego-carrito-info">

                    <div className="juego-carrito-categoria">

                      {juego.genre.map((genero, index) => (
                        <span
                          key={index}
                          className="game-category"
                        >
                          {genero}
                        </span>
                      ))}

                    </div>

                    <h3>{juego.title}</h3>

                    <p>{juego.description}</p>

                    <strong className="juego-carrito-precio">
                      ${juego.price.toLocaleString("es-AR")}
                    </strong>

                  </div>

                  <button
                    className="btn-eliminar-juego"
                    aria-label={`Eliminar ${juego.title}`}
                    onClick={() => eliminarJuego(juego.game_id)}
                  >
                    <Trash2 size={20} />
                  </button>

                </article>

              ))}

            </div>

          )}

        </section>


        {/* RESUMEN */}

        <aside className="cart-summary">

          <h2>RESUMEN DE COMPRA</h2>

          <div className="summary-line">

            <span>Juegos</span>

            <span>
              {juegos.length}
            </span>

          </div>

          <div className="summary-line">

            <span>Subtotal</span>

            <span>
              ${subtotal.toLocaleString("es-AR")}
            </span>

          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">

            <span>TOTAL</span>

            <strong>
              ${subtotal.toLocaleString("es-AR")}
            </strong>

          </div>

          <button
            className="btn-comprar"
            disabled={juegos.length === 0}
          >
            COMPRAR AHORA
          </button>

          <Link
            to="/"
            className="btn-seguir-comprando"
          >
            <ArrowLeft size={16} />

            SEGUIR COMPRANDO
          </Link>

        </aside>

      </div>

    </main>
  );
}

export default Cart;