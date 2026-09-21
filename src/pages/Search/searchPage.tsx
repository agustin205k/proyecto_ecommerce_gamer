/* Dependencies */
import { Carousel } from "antd";
import {
  Flame,
  Swords,
  Compass,
  Brain,
  SportShoe,
  WandSparkles,
  Car,
  Ghost,
  MessageSquare,
  Zap,
  ShieldCheck,
  Send,
  Search,
  MoveRight,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

/* Local */
import "./searchPage.css";
import GameCard from "../../components/GameCard/GameCard";
import { useGame } from "../../hooks/useGame";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const {getGames} = useGame(); 
  const {query} = useParams<{query:string}>();
  const navigate = useNavigate();

  const searchFilter = () => {
    const juegos = getGames();
    if (!query) return juegos;
    if (query === "Accion") {
      return juegos
        .map((game) => {
          // Si el array genre contiene "Accion", score = 0 (van primero)
          const score = game.genre?.some(
            (g) => g.toLowerCase() === "accion"
          )
            ? 0
            : 1;

          return { ...game, score };
        })
        .sort((a, b) => a.score - b.score);
    }

    if (query === "Deportes") {
      return juegos
        .map((game) => {
          // Si el array genre contiene "Accion", score = 0 (van primero)
          const score = game.genre?.some(
            (g) => g.toLowerCase() === "deportes"
          )
            ? 0
            : 1;

          return { ...game, score };
        })
        .sort((a, b) => a.score - b.score);
    }

    if (query === "RPG") {
      return juegos
        .map((game) => {
          // Si el array genre contiene "Accion", score = 0 (van primero)
          const score = game.genre?.some(
            (g) => g.toLowerCase() === "rpg"
          )
            ? 0
            : 1;

          return { ...game, score };
        })
        .sort((a, b) => a.score - b.score);
    }

    if (query === "Terror") {
      return juegos
        .map((game) => {
          // Si el array genre contiene "Accion", score = 0 (van primero)
          const score = game.genre?.some(
            (g) => g.toLowerCase() === "terror"
          )
            ? 0
            : 1;

          return { ...game, score };
        })
        .sort((a, b) => a.score - b.score);
    }

    if (query === "Estrategia") {
      return juegos
        .map((game) => {
          // Si el array genre contiene "Accion", score = 0 (van primero)
          const score = game.genre?.some(
            (g) => g.toLowerCase() === "estrategia"
          )
            ? 0
            : 1;

          return { ...game, score };
        })
        .sort((a, b) => a.score - b.score);
    }

    if (query === "Aventura") {
      return juegos
        .map((game) => {
          // Si el array genre contiene "Accion", score = 0 (van primero)
          const score = game.genre?.some(
            (g) => g.toLowerCase() === "aventura"
          )
            ? 0
            : 1;

          return { ...game, score };
        })
        .sort((a, b) => a.score - b.score);
    }

    return juegos
      .map((game) => {
        const title = game.title.toLowerCase();
        const q = query.toLowerCase();
        let score = 2;
        if (title.startsWith(q)) score = 0;
        else if (title.includes(q)) score = 1;
        return { ...game, score };
      })
      .sort((a, b) => a.score - b.score);
  };

  return (
    <>
      <Carousel arrows infinite={true} autoplay className="containerCarousel">
        <div className="slide slide-img1">
          <div className="carousel-overlay">
            <div className="info-carousel">
              <h2>TU PRÓXIMA AVENTURA COMIENZA AQUÍ</h2>
              <p>Descubrí, elegí y jugá.</p>
              <Link to="/404">
              <button className="btn-carousel">VER CATALOGO</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="slide slide-img2">
          <div className="carousel-overlay">
            <div className="info-carousel">
              <h2>¿LISTO PARA LA ACCIÓN?</h2>
              <p>Descubrí nuestra selección de juegos de acción.</p>
              <Link to="/404">
              <button className="btn-carousel">VER ACCIÓN</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="slide slide-img3">
          <div className="carousel-overlay">
            <div className="info-carousel">
              <h2>¿GTA VI ESTÁ LLEGANDO?</h2>
              <p>
                Sé de los primeros en enterarte cuando esté disponible en Nexora
                Gaming.
              </p>
              <p className="highlight-text">🔥 PRE-REGISTRO ABIERTO</p>
              <Link to="/404">
              <button className="btn-carousel">PRE-REGISTRARME</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="slide slide-img4">
          <div className="carousel-overlay">
            <div className="info-carousel">
              <h2>NUEVOS LANZAMIENTOS</h2>
              <p>Descubrí los últimos títulos.</p>
              <Link to="/404">
              <button className="btn-carousel">NOVEDADES</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>

      <section className="categories-section">
        <div className="categories-header">
          <div className="categories-title">
            <h2>CATEGORÍAS</h2>
            <p>Encontrá tu próximo juego</p>
          </div>
          <Link to={"/404"} className="btn-see-all">
            VER TODAS <MoveRight />
          </Link>
        </div>

        <div className="categories-grid">
          <a className="category-card" onClick={() => navigate(`/search/${"Accion"}`)}>
            <div className="category-icon">
              <Swords />
            </div>
            <h3>Acción</h3>
          </a>

          <a className="category-card" onClick={() => navigate(`/search/${"RPG"}`)}>
            <div className="category-icon">
              <WandSparkles />
            </div>
            <h3>RPG</h3>
          </a>

          <a className="category-card" onClick={() => navigate(`/search/${"Terror"}`)}>
            <div className="category-icon">
              <Ghost />
            </div>
            <h3>Terror</h3>
          </a>

          <a className="category-card" onClick={() => navigate(`/search/${"Carreras"}`)}>
            <div className="category-icon">
              <Car />
            </div>
            <h3>Carreras</h3>
          </a>

          <a className="category-card" onClick={() => navigate(`/search/${"Deportes"}`)}>
            <div className="category-icon">
              <SportShoe />
            </div>
            <h3>Deportes</h3>
          </a>

          <a className="category-card" onClick={() => navigate(`/search/${"Estrategia"}`)}>
            <div className="category-icon">
              <Brain />
            </div>
            <h3>Estrategia</h3>
          </a>

          <a className="category-card" onClick={() => navigate(`/search/${"Aventura"}`)}>
            <div className="category-icon">
              <Compass />
            </div>
            <h3>Aventura</h3>
          </a>
        </div>
      </section>

      <section className="features-container">
        <div className="feature-card">
          <div className="icon-glow-wrapper">
            <MessageSquare className="feature-icon" />
          </div>
          <div className="feature-info">
            <h3>Comunícate con nosotros</h3>
            <p>Soporte rápido y asistencia personalizada.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="icon-glow-wrapper">
            <Zap className="feature-icon" />
          </div>
          <div className="feature-info">
            <h3>Descarga instantánea</h3>
            <p>Digital. Simple. Al instante.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="icon-glow-wrapper">
            <ShieldCheck className="feature-icon" />
          </div>
          <div className="feature-info">
            <h3>Garantía asegurada</h3>
            <p>Cobertura y soporte en todos los productos.</p>
          </div>
        </div>
      </section>

      <section className="game-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <div className="icon-badge">
              <Flame />
            </div>
            <h2>{query}</h2>
          </div>

          <div className="section-divider"></div>

          <Link to={"/404"} className="btn-see-all">
            VER TODAS <MoveRight />
          </Link>
        </div>
        {/* modificacion */}
        <section className="section-card">
          {searchFilter().length > 0 ? (
            searchFilter().map((juego) => (
              <GameCard key={juego.game_id} juego={juego} />
            ))
          ) : (
            <h3 className="section-card__no-result" style={
              {
                color:"var(--color-texto)",
                width:"100%",
                margin:"40px",
              }
            }>No hay juegos con ese nombre</h3>
          )}
        </section>
      </section>

      <section className="request-game-container">
        <div className="request-info">
          <div className="request-icon-wrapper">
            <Search className="request-icon" />
          </div>
          <div className="request-text">
            <h3>¿No encontrás el juego que buscás?</h3>
            <p>
              Pedilo y lo agregamos al catálogo. Dejanos el nombre y nos
              encargamos del resto.
            </p>
          </div>
        </div>
        <div className="request-form">
          <input
            type="text"
            className="request-input"
            placeholder="Ej: Grand Theft Auto VI, FIFA 27..."
          />
          <button type="submit" className="btn-request">
            Solicitar <Send size={16} />
          </button>
        </div>
      </section>
    </>
  );
}

export default SearchPage;
