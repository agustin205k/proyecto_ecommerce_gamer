import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContext";
import "./admin.css";

function Admin() {
  const { cerrarSesion } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate("/login");
  };

  return (
    <div className="seccion-panel">
      <header className="panel-header">
        <h1 className="titulo-panel">Panel de Administración</h1>
        <div className="linea-divisora"></div>
      </header>

      <p className="panel-descripcion">
        Bienvenido al panel de administrador.
      </p>

      <div className="panel-acciones">
        
        <div className="panel-acciones-container">
          <button
            className="btn btn-primario"
            onClick={() => navigate("/admin/usuarios")}
          >
            Administrar Usuarios
          </button>

          <button
            className="btn btn-primario"
            onClick={() => navigate("/admin/juegos")}
          >
            Administrar Juegos
          </button>
        </div>
        

        <button className="btn btn-outline" onClick={handleCerrarSesion}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Admin;