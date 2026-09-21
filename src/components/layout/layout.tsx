/* Dependencies */
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import "./layout.css";
import logoimg from "../../assets/logo-.png";
import logoimg2 from "../../assets/ChatGPT Image 16 sept 2026, 09_15_10.png";
import { Dropdown, Button,message } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useGame } from "../../hooks/useGame";

const categoriasItems: MenuProps["items"] = [
  {
    key: "accion",
    label: <Link to="/404">Acción</Link>,
  },
  {
    key: "shooter",
    label: <Link to="/404">Shooter</Link>,
  },
  {
    key: "rpg",
    label: <Link to="/404">RPG</Link>,
  },
  {
    key: "terror",
    label: <Link to="/404">Terror</Link>,
  },
  {
    key: "carreras",
    label: <Link to="/404">Carreras</Link>,
  },
  {
    key: "deportes",
    label: <Link to="/404">Deportes</Link>,
  },
  {
    key: "estrategia",
    label: <Link to="/404">Estrategia</Link>,
  },
  {
    key: "aventura",
    label: <Link to="/404">Aventura</Link>,
  },
];

function Layout() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { usuarioActual, cerrarSesion } = useUser();
  const { carrito } = useGame();

  const usuarioItems: MenuProps["items"] = usuarioActual
    ? usuarioActual.rol === "admin"
      ? [
          {
            key: "admin",
            label: <Link to="/admin">Panel de administrador</Link>,
          },
          {
            key: "logout",
            label: "Cerrar sesión",
          },
        ]
      : [
          {
            key: "logout",
            label: "Cerrar sesión",
          },
        ]
    : [
        {
          key: "login",
          label: <Link to="/login">Iniciar sesión</Link>,
        },
        {
          key: "register",
          label: <Link to="/register">Registrarse</Link>,
        },
      ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-top">
          <Link to="/" className="navbar-logo">
            <img src={logoimg} alt="" />
          </Link>

          <div className="navbar-search">
            <Search className="search-icon" />

            
              <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={query}
                    onChange={(value) => setQuery(value.target.value)}
                    placeholder="Buscar juegos..."
                    maxLength={60}
                    className="custom-search-input"
                  />
              </form>
          </div>

          {/* ACCIONES */}
          <div className="navbar-actions">
            <button
              className="navbar-action"
              onClick={() => {
                if (!usuarioActual)
                  return message.info("Debe iniciar sesión para ver su carrito");
                navigate("/cart");
              }}
            >
              <ShoppingCart />

              <span className={usuarioActual ? "cart-count" : undefined}>
                {usuarioActual && carrito.length}
              </span>
            </button>
            <Dropdown
              menu={{
                items: usuarioItems,
                onClick: ({ key }) => {
                  if (key === "logout") {
                    cerrarSesion();
                    navigate("/");
                  }
                },
              }}
              placement="bottomRight"
            >
              <Button 
               className="navbar-action">
                <User/>
              </Button>
            </Dropdown>
          </div>
        </div>

        <div className="footer-line"></div>

        {/* FILA INFERIOR  */}
        <nav className="navbar-menu">
          <Link to="/" className="navbar-link">
            INICIO
          </Link>

          <Dropdown menu={{ items: categoriasItems }} placement="bottom"
            
          >
            <Button 
              className="navbar-dropdown-button categoria"
              >CATEGORÍAS</Button>
          </Dropdown>

          <Link to="/404" className="navbar-link">
            SOPORTE
          </Link>

          <Link to="/about" className="navbar-link">
            SOBRE NOSOTROS
          </Link>
        </nav>
      </header>
      <div className="main">
        <Outlet />
      </div>
      <footer className="footer">
        {/* Línea decorativa */}
        <div className="footer-line"></div>

        <div className="footer-container">
          {/* MARCA */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-fire">
                <span className="spark spark-1"></span>
                <span className="spark spark-2"></span>
                <span className="spark spark-3"></span>
                <span className="spark spark-4"></span>
                <span className="spark spark-5"></span>

                <img src={logoimg2} alt="Nexora Gaming" />
              </div>
            </Link>

            <p>Tu próxima aventura comienza aquí.</p>
          </div>

          {/* EXPLORAR */}
          <div className="footer-column">
            <h3>EXPLORAR</h3>

            <Link to="/">Inicio</Link>

            <Link to="/404">Soporte</Link>

            <Link to="/404">Categorías</Link>

            <Link to="/about">Sobre nosotros</Link>
          </div>

          {/* AYUDA */}
          <div className="footer-column">
            <h3>AYUDA</h3>

            <Link to="/404">Contacto</Link>

            <Link to="/404">Preguntas frecuentes</Link>

            <Link to="/404">Términos y condiciones</Link>

            <Link to="/404">Política de privacidad</Link>
          </div>

          {/* REDES */}
          <div className="footer-column footer-social">
            <h3>SEGUINOS</h3>

            <Link to="/404">
              <FaInstagram />
              Instagram
            </Link>
            <Link to="/404">
              <FaFacebook />
              Facebook
            </Link>
            <Link to="/404">
              <FaDiscord />
              Discord
            </Link>
          </div>
        </div>

        {/* PARTE INFERIOR */}
        <div className="footer-bottom">
          <p>© 2026 Nexora Gaming</p>

          <p>Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
