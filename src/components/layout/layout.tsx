/* Dependencies */
import { Outlet, Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import "./layout.css";
import logoimg from "../../assets/logo-.png";
import logoimg2 from "../../assets/ChatGPT Image 16 sept 2026, 09_15_10.png";
import { Dropdown, Button, AutoComplete, ConfigProvider } from "antd";
import type { MenuProps } from "antd";

interface Juego {
  id: number;
  nombre: string;
}

const juegos: Juego[] = [
  {
    id: 1,
    nombre: "Grand Theft Auto V",
  },
  {
    id: 2,
    nombre: "Grand Theft Auto VI",
  },
  {
    id: 3,
    nombre: "Minecraft",
  },
  {
    id: 4,
    nombre: "The Legend of Zelda",
  },
  {
    id: 5,
    nombre: "EA Sports FC 26",
  },
  {
    id: 6,
    nombre: "Marvel's Wolverine",
  },
  {
    id: 7,
    nombre: "Metroid Prime 4: Beyond",
  },
];

const opciones = juegos.map((juego) => ({
  value: juego.nombre,
}));

const categoriasItems: MenuProps["items"] = [
  {
    key: "accion",
    label: <Link to="/categorias/accion">Acción</Link>,
  },
  {
    key: "shooter",
    label: <Link to="/categorias/shooter">Shooter</Link>,
  },
  {
    key: "rpg",
    label: <Link to="/categorias/rpg">RPG</Link>,
  },
  {
    key: "terror",
    label: <Link to="/categorias/terror">Terror</Link>,
  },
  {
    key: "carreras",
    label: <Link to="/categorias/carreras">Carreras</Link>,
  },
  {
    key: "deportes",
    label: <Link to="/categorias/deportes">Deportes</Link>,
  },
  {
    key: "estrategia",
    label: <Link to="/categorias/estrategia">Estrategia</Link>,
  },
  {
    key: "aventura",
    label: <Link to="/categorias/aventura">Aventura</Link>,
  },
];

const usuarioItems: MenuProps["items"] = [
  {
    key: "login",
    label: <Link to="/login">Iniciar sesión</Link>,
  },
  {
    key: "register",
    label: <Link to="/register">Registrarse</Link>,
  },
];

function Layout() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-top">
          <Link to="/" className="navbar-logo">
            <img src={logoimg} alt="" />
          </Link>

          <div className="navbar-search">
            <Search className="search-icon" />

            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    colorPrimary: "#171717", // --color-card
                    colorTextPlaceholder: "#C9C9C9", // --color-texto-secundario:
                    colorText: "#FFFFFF", // Color blanco para el texto
                    colorBgContainer: "transparent", // Fondo del input transparente
                    colorBgElevated: "#171717", // --color-card
                    controlItemBgHover: "#D95F00", // --color-naranja-oscuro
                    controlItemBgActive: "#FF7A00", // --color-naranja
                  },
                },
              }}
            >
              <AutoComplete
              variant="borderless"
                options={opciones}
                placeholder="Buscar juegos..."
                className="search-autocomplete"
                dropdownStyle={{ backgroundColor: "#171717" }}
                filterOption={(inputValue, option) =>
                  option?.value
                    ? option.value
                        .toString()
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    : false
                }
              />
            </ConfigProvider>
          </div>

          {/* ACCIONES */}
          <div className="navbar-actions">
            <Link to="/cart" className="navbar-action">
              <ShoppingCart />
              <span className="cart-count">0</span>
            </Link>

            <Dropdown menu={{ items: usuarioItems }} placement="bottomRight">
              <Button className="navbar-action">
                <User />
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

          <Dropdown menu={{ items: categoriasItems }} placement="bottom">
            <Button className="navbar-dropdown-button">CATEGORÍAS</Button>
          </Dropdown>

          <Link to="/soporte" className="navbar-link">
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
