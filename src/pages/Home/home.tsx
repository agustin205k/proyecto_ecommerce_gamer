import { Carousel } from "antd";
import { Flame, Swords,Compass,Brain,SportShoe,WandSparkles,Car,Ghost,Sparkles,Crown} from 'lucide-react';
import "./home.css";

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
            VER TODAS →
          </a>
        </div>

        <div className="categories-grid">
          <a href="#" className="category-card">
            <div className="category-icon"><Swords /></div>
            <h3>Acción</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon"><WandSparkles /></div>
            <h3>RPG</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon"><Ghost /></div>
            <h3>Terror</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon"><Car /></div>
            <h3>Carreras</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon"><SportShoe /></div>
            <h3>Deportes</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon"><Brain /></div>
            <h3>Estrategia</h3>
          </a>

          <a href="#" className="category-card">
            <div className="category-icon"><Compass /></div>
            <h3>Aventura</h3>
          </a>
        </div>
      </section>



      <section>
        <div className="section-header">
          <div className="section-title-wrapper">
            <div className="icon-badge">
              <Flame />
            </div>
            <h2>Tendencias</h2>
          </div>

          <div className="section-divider"></div>

          <button className="btn-see-all">
            VER TODOS →
          </button>
        </div>
      </section>

      <section className="section-card">
        card        
      </section>

      <section>
        <div className="section-header">
          <div className="section-title-wrapper">
            <div className="icon-badge">
              <Sparkles />
            </div>
            <h2>Más Nuevos</h2>
          </div>

          <div className="section-divider"></div>

          <button className="btn-see-all">
            VER TODOS →
          </button>
        </div>
      </section>


      <section className="section-card">
        card        
      </section>



      <section>
        <div className="section-header">
          <div className="section-title-wrapper">
            <div className="icon-badge">
              <Crown />
            </div>
            <h2>Lo Más Vendido:</h2>
          </div>

          <div className="section-divider"></div>

          <button className="btn-see-all">
            VER TODOS →
          </button>
        </div>
      </section>


      <section className="section-card">
        card        
      </section>

    </>
  );
}

export default Home;
