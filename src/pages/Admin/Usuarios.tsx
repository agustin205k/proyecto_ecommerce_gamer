import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/userContext/userContext";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import type { Usuario } from "../../context/userContext/userContext";
import "./Usuarios.css";
import { Link } from "react-router-dom";

interface FormularioUsuario {
  nombre: string;
  email: string;
  password: string;
  confirmarPassword: string;
  rol: "admin" | "visitante";
}

function Juegos() {
  const {
    usuarios,
    usuarioActual,
    registrarUsuario,
    eliminarUsuario,
    editarUsuario,
  } = useContext(UserContext);

  const [usuarioEditando, setUsuarioEditando] = useState<Usuario | null>(null);
  const [usuarioEliminando, setUsuarioEliminando] =
    useState<Usuario | null>(null);

  const [modoFormulario, setModoFormulario] = useState<
    "crear" | "editar" | null
  >(null);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormularioUsuario>();
  return (
    <div className="seccion-panel">
      <header className="panel-header">
        <Link to={"/admin"} 
         className="btn btn-primario boton-volver"
        >&larr; Volver al panel</Link>
        <h1 className="titulo-panel">Administrar Usuarios</h1>
        <div className="linea-divisora"></div>
      </header>

      <div className="barra-superior">
        <p className="contador-usuarios">
          Total de usuarios:
          <span className="contador-numero">{usuarios.length}</span>
        </p>

        <button
          className="btn btn-primario btn-agregar-usuario"
          onClick={() => {
            setModoFormulario("crear");
            setUsuarioEditando(null);

            reset({
              nombre: "",
              email: "",
              password: "",
              confirmarPassword: "",
              rol: "visitante",
            });
          }}
        >
          Agregar usuario
        </button>
      </div>

      {modoFormulario && (
        <div className="formulario-card">
          <h2 className="titulo-card">
            {modoFormulario === "crear"
              ? "Agregar usuario"
              : "Editar usuario"}
          </h2>

          <form
            onSubmit={handleSubmit((datos) => {
              if (modoFormulario === "crear") {
                registrarUsuario({
                  id: uuidv4(),
                  nombre: datos.nombre,
                  email: datos.email,
                  password: datos.password,
                  rol: datos.rol,
                });
              }

              if (modoFormulario === "editar" && usuarioEditando) {
                editarUsuario({
                  ...usuarioEditando,
                  nombre: datos.nombre,
                  email: datos.email,
                  password: datos.password,
                  rol: datos.rol,
                });
              }

              setModoFormulario(null);
              setUsuarioEditando(null);
              reset();
            })}
          >
            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-nombre">
                Nombre Completo
              </label>

              <input
                className="campo-texto"
                id="usuario-nombre"
                type="text"
                placeholder="Nombre Completo"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                })}
              />

              {errors.nombre && (
                <p className="error-texto">{errors.nombre.message}</p>
              )}
            </div>

            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-email">
                Email
              </label>

              <input
                className="campo-texto"
                id="usuario-email"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingresá un email válido",
                  },
                })}
              />

              {errors.email && (
                <p className="error-texto">{errors.email.message}</p>
              )}
            </div>

            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-password">
                Contraseña
              </label>

              <input
                className="campo-texto"
                id="usuario-password"
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
              />

              {errors.password && (
                <p className="error-texto">{errors.password.message}</p>
              )}
            </div>

            <div className="campo-grupo">
              <label
                className="campo-label"
                htmlFor="usuario-confirmar-password"
              >
                Repetir contraseña
              </label>

              <input
                className="campo-texto"
                id="usuario-confirmar-password"
                type="password"
                placeholder="Repetir contraseña"
                {...register("confirmarPassword", {
                  required:
                    modoFormulario === "crear"
                      ? "Tenés que repetir la contraseña"
                      : false,
                  validate: (valor) =>
                    valor === getValues("password")
                      ? true
                      : "Las contraseñas no coinciden",
                })}
              />

              {errors.confirmarPassword && (
                <p className="error-texto">
                  {errors.confirmarPassword.message}
                </p>
              )}
            </div>

            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-rol">
                Rol
              </label>

              <select
                className="campo-select"
                id="usuario-rol"
                {...register("rol")}
              >
                <option value="visitante">Visitante</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="formulario-acciones">
              <button className="btn btn-primario" type="submit">
                {modoFormulario === "crear"
                  ? "Agregar usuario"
                  : "Guardar cambios"}
              </button>

              <button
                className="btn btn-outline"
                type="button"
                onClick={() => {
                  setModoFormulario(null);
                  setUsuarioEditando(null);
                  reset();
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <ul className="lista-usuarios">
        {usuarios.map((usuario) => (
          <li className="tarjeta-usuario" key={usuario.id}>
            <div className="usuario-info">
              <span className="usuario-nombre">{usuario.nombre}</span>
              <span className="usuario-correo">{usuario.email}</span>
              <span className="usuario-id">ID: {usuario.id}</span>
            </div>

            <span className={"badge-rol badge-" + usuario.rol}>
              {usuario.rol}
            </span>

            <div className="usuario-acciones">
              <button
                className="btn btn-editar"
                onClick={() => {
                  setModoFormulario("editar");
                  setUsuarioEditando(usuario);

                  reset({
                    nombre: usuario.nombre,
                    email: usuario.email,
                    password: usuario.password,
                    confirmarPassword: usuario.password,
                    rol: usuario.rol,
                  });
                }}
              >
                Editar
              </button>

              {usuarioActual?.id !== usuario.id && (
                <button
                  className="btn btn-eliminar"
                  onClick={() => setUsuarioEliminando(usuario)}
                >
                  Eliminar
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <Modal
        className="modal-eliminar"
        title="Eliminar usuario"
        open={usuarioEliminando !== null}
        styles={{
          header: {
            backgroundColor: "var(--color-card)",
            color: "var(--color-texto)"
          },
          body: {
            backgroundColor: "var(--color-card)",
            color: "var(--color-texto-secundario)"
          },
          footer: {
            backgroundColor: "var(--color-card)"
          },
          container:{
            backgroundColor: "var(--color-card)"
          },
        }}
        onCancel={() => setUsuarioEliminando(null)}
        footer={
          <>
            <button
              className="btn-cancelar"
              onClick={() => setUsuarioEliminando(null)}
            >
              Cancelar
            </button>

            <button
              className="btn-eliminar"
              onClick={() => {
                if (usuarioEliminando) {
                  eliminarUsuario(usuarioEliminando.id);
                  setUsuarioEliminando(null);
                }
              }}
            >
              Eliminar
            </button>
          </>
        }
      >
        <p>
          ¿Estás seguro de que querés eliminar al usuario{" "}
          <b>{usuarioEliminando?.nombre}</b>?
        </p>
      </Modal>
    </div>
  );
}

export default Juegos;