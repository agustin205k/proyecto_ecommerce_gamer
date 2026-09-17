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
  Sparkles,
  Crown,
  MessageSquare,
  Zap,
  ShieldCheck,
  Send,
  Search,
  MoveRight,
} from "lucide-react";
import "./home.css";
import GameCard from "../../components/GameCard/GameCard";

interface Juego {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

const juegosTendencia: Juego[] = [
  {
    id: 1,
    nombre: "Grand Theft Auto V",
    categoria: "Acción",
    precio: 25000,
    imagen: "/img/gta-v.jpg",
    descripcion: "Viví una aventura llena de acción en Los Santos.",
  },
  {
    id: 2,
    nombre: "Minecraft",
    categoria: "Aventura",
    precio: 18000,
    imagen: "/img/minecraft.jpg",
    descripcion: "Construí, explorá y sobreviví en un mundo sin límites.",
  },
  {
    id: 3,
    nombre: "EA Sports FC 26",
    categoria: "Deportes",
    precio: 35000,
    imagen: "/img/fc26.jpg",
    descripcion: "Disfrutá de la experiencia futbolística.",
  },
  {
    id: 4,
    nombre: "Marvel's Wolverine",
    categoria: "Acción",
    precio: 45000,
    imagen: "/img/wolverine.jpg",
    descripcion: "Convertite en Wolverine y enfrentá nuevos desafíos.",
  },
  {
    id: 5,
    nombre: "Metroid Prime 4",
    categoria: "Aventura",
    precio: 40000,
    imagen: "/img/metroid.jpg",
    descripcion: "Explorá nuevos mundos y enfrentá peligros.",
  },
  {
    id: 6,
    nombre: "The Legend of Zelda",
    categoria: "Aventura",
    precio: 38000,
    imagen: "/img/zelda.jpg",
    descripcion: "Una aventura épica llena de misterios.",
  },
];

const juegosMasNuevos: Juego[] = [
  {
    id: 1,
    nombre: "Grand Theft Auto V",
    categoria: "Acción",
    precio: 25000,
    imagen: "/img/gta-v.jpg",
    descripcion: "Viví una aventura llena de acción en Los Santos.",
  },
  {
    id: 2,
    nombre: "Minecraft",
    categoria: "Aventura",
    precio: 18000,
    imagen: "/img/minecraft.jpg",
    descripcion: "Construí, explorá y sobreviví en un mundo sin límites.",
  },
  {
    id: 3,
    nombre: "EA Sports FC 26",
    categoria: "Deportes",
    precio: 35000,
    imagen: "/img/fc26.jpg",
    descripcion: "Disfrutá de la experiencia futbolística.",
  },
  {
    id: 4,
    nombre: "Marvel's Wolverine",
    categoria: "Acción",
    precio: 45000,
    imagen: "/img/wolverine.jpg",
    descripcion: "Convertite en Wolverine y enfrentá nuevos desafíos.",
  },
  {
    id: 5,
    nombre: "Metroid Prime 4",
    categoria: "Aventura",
    precio: 40000,
    imagen: "/img/metroid.jpg",
    descripcion: "Explorá nuevos mundos y enfrentá peligros.",
  },
  {
    id: 6,
    nombre: "The Legend of Zelda",
    categoria: "Aventura",
    precio: 38000,
    imagen: "/img/zelda.jpg",
    descripcion: "Una aventura épica llena de misterios.",
  },
];

const juegosMasVendidos: Juego[] = [
  {
    id: 1,
    nombre: "Grand Theft Auto V",
    categoria: "Acción",
    precio: 25000,
    imagen: "/img/gta-v.jpg",
    descripcion: "Viví una aventura llena de acción en Los Santos.",
  },
  {
    id: 2,
    nombre: "Minecraft",
    categoria: "Aventura",
    precio: 18000,
    imagen: "/img/minecraft.jpg",
    descripcion: "Construí, explorá y sobreviví en un mundo sin límites.",
  },
  {
    id: 3,
    nombre: "EA Sports FC 26",
    categoria: "Deportes",
    precio: 35000,
    imagen: "/img/fc26.jpg",
    descripcion: "Disfrutá de la experiencia futbolística.",
  },
  {
    id: 4,
    nombre: "Marvel's Wolverine",
    categoria: "Acción",
    precio: 45000,
    imagen: "/img/wolverine.jpg",
    descripcion: "Convertite en Wolverine y enfrentá nuevos desafíos.",
  },
  {
    id: 5,
    nombre: "Metroid Prime 4",
    categoria: "Aventura",
    precio: 40000,
    imagen: "/img/metroid.jpg",
    descripcion: "Explorá nuevos mundos y enfrentá peligros.",
  },
  {
    id: 6,
    nombre: "The Legend of Zelda",
    categoria: "Aventura",
    precio: 38000,
    imagen: "/img/zelda.jpg",
    descripcion: "Una aventura épica llena de misterios.",
  },
];

function Home() {
  return (
    <>
      <Carousel arrows infinite={true} autoplay className="containerCarousel">
        <div className="slide slide-img1">
          <div className="carousel-overlay">
            <div className="info-carousel">
              <h2>TU PRÓXIMA AVENTURA COMIENZA AQUÍ</h2>
              <p>Descubrí, elegí y jugá.</p>
              <button className="btn-carousel">VER CATÁLOGO</button>
            </div>
          </div>
        </div>

        <div className="slide slide-img2">
          <div className="carousel-overlay">
            <div className="info-carousel">
              <h2>¿LISTO PARA LA ACCIÓN?</h2>
              <p>Descubrí nuestra selección de juegos de acción.</p>
              <button className="btn-carousel">VER ACCIÓN</button>
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
              <button className="btn-carousel">PRE-REGISTRARME →</button>
            </div>
          </div>
        </div>

        <div className="slide slide-img4">
          <div className="carousel-overlay">
            <div className="info-carousel">
              <h2>NUEVOS LANZAMIENTOS</h2>
              <p>Descubrí los últimos títulos.</p>
              <button className="btn-carousel">VER NOVEDADES</button>
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
          <a href="/categorias" className="btn-see-all">
            VER TODAS <MoveRight />
          </a>
        </div>

        <div className="categories-grid">
          <a href="#" className="category-card">
            <div className="category-icon">
              <Swords />
            </div>
            <h3>Acción</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon">
              <WandSparkles />
            </div>
            <h3>RPG</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon">
              <Ghost />
            </div>
            <h3>Terror</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon">
              <Car />
            </div>
            <h3>Carreras</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon">
              <SportShoe />
            </div>
            <h3>Deportes</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon">
              <Brain />
            </div>
            <h3>Estrategia</h3>
          </a>

          <a href="#" className="category-card">
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
            <h2>Tendencias</h2>
          </div>

          <div className="section-divider"></div>

          <button className="btn-see-all">
            VER TODOS <MoveRight />
          </button>
        </div>

        <section className="section-card">
          {juegosTendencia.map((juego) => (
            <GameCard key={juego.id} juego={juego} />
          ))}
        </section>
      </section>

      <section className="game-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <div className="icon-badge">
              <Sparkles />
            </div>
            <h2>Más Nuevos</h2>
          </div>

          <div className="section-divider"></div>

          <button className="btn-see-all">
            VER TODOS <MoveRight />
          </button>
        </div>
        <section className="section-card">
          {juegosMasNuevos.map((juego) => (
            <GameCard key={juego.id} juego={juego} />
          ))}
        </section>
      </section>

      <section className="game-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <div className="icon-badge">
              <Crown />
            </div>
            <h2>Lo Más Vendido:</h2>
          </div>

          <div className="section-divider"></div>

          <button className="btn-see-all">
            VER TODOS <MoveRight />
          </button>
        </div>

        <section className="section-card">
          {juegosMasVendidos.map((juego) => (
      <GameCard
        key={juego.id}
        juego={juego}
      />
    ))}
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

export default Home;
