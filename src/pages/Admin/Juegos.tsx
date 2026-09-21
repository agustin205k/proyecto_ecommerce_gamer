import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { message, Modal } from "antd";
import "./Juegos.css";
import { Link } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import { type Game } from "../../context/gameContext/gameContext";

/* export interface Game {
  game_id: string;          
  title: string;
  description:string;
  img_portrait:string | undefined;       
  genre: string[];
  price: number;       
  releaseDate: string; 
  rating: number[];
  comments: Comments[];
  }
} */

function Juegos() {
  const {games,updateGame,addGame,removeGame} = useGame();

  const [juegoEditando, setJuegoEditando] = useState<Game | null>(null);
  const [juegoEliminando, setJuegoEliminando] = useState<Game | null>(null);
  const [modoFormulario, setModoFormulario] = useState<"crear" | "editar" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Game>();
  return (
    <div className="seccion-panel">
      <header className="panel-header">
        <Link to={"/admin"} 
         className="btn btn-primario boton-volver"
        >&larr; Volver al panel</Link>
        <h1 className="titulo-panel">Administrar Juegos</h1>
        <div className="linea-divisora"></div>
      </header>

      <div className="barra-superior">
        <p className="contador-usuarios">
          Total de usuarios:
          <span className="contador-numero">{games.length}</span>
        </p>

        <button
          className="btn btn-primario btn-agregar-usuario"
          onClick={() => {
            setModoFormulario("crear");
            setJuegoEditando(null);

            reset({
              game_id:"",
              description:"",
              img_portrait:"",       
              genre: [],
              price: 0,       
              releaseDate: "", 
              rating: [],
              comments: [],
            });
          }}
        >
          Agregar Juego
        </button>
      </div>

      {modoFormulario && (
        <div className="formulario-card">
          <h2 className="titulo-card">
            {modoFormulario === "crear"
              ? "Agregar juego"
              : "Editar juego"}
          </h2>

          <form
            onSubmit={handleSubmit((datos) => {
              if (modoFormulario === "crear") {
                addGame({
                  game_id: uuidv4(),          
                  title: datos.title,
                  description:datos.description,
                  img_portrait:datos.img_portrait,       
                  genre: datos.genre,
                  price: datos.price,       
                  releaseDate: datos.releaseDate, 
                  rating: datos.rating,
                  comments: datos.comments,
                });
              }

              if (modoFormulario === "editar" && juegoEditando) {
                updateGame({
                  ...juegoEditando,
                  title: datos.title,
                  description:datos.description,
                  img_portrait:datos.img_portrait,       
                  genre: datos.genre,
                  price: datos.price,       
                  releaseDate: datos.releaseDate, 
                  rating: datos.rating,
                  comments: datos.comments,
                });
              }

              setModoFormulario(null);
              setJuegoEditando(null);
              reset();
            })}
          >
            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-nombre">
                Titulo
              </label>

              <input
                className="campo-texto"
                id="usuario-nombre"
                type="text"
                placeholder="Titulo"
                {...register("title", {
                  required: "El titulo es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El titulo debe tener al menos 3 caracteres",
                  },
                })}
              />

              {errors.title && (
                <p className="error-texto">{errors.title.message}</p>
              )}
            </div>

            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-email">
                Descripcion
              </label>

              <input
                className="campo-texto"
                id="usuario-email"
                type="text"
                placeholder="descripcion"
                {...register("description", {
                  required: "La descripcion es obligatoria",
                })}
              />

              {errors.description && (
                <p className="error-texto">{errors.description.message}</p>
              )}
            </div>

            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-password">
                precio
              </label>

              <input
                className="campo-texto"
                id="usuario-password"
                type="text"
                maxLength={6}
                placeholder="Precio"
                {...register("price", {
                  required: {
                    value:true,
                    message:""
                  }
                })}
              />

              {errors.price && (
                <p className="error-texto">{errors.price.message}</p>
              )}
            </div>

            <div className="campo-grupo">
              <label className="campo-label" htmlFor="usuario-rol">
                genero
              </label>

              <select
                className="campo-select genero"
                id="usuario-rol"
                {...register("genre", {
                  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
                    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);

                    if (selected.length > 4) {
                      e.target.options[e.target.selectedIndex].selected = false;
                      message.info("No se puede elegir mas de 4 generos")
                    }
                  }
                })}
                multiple
              >
                <option value="accion">Acción</option>
                <option value="shooter">Shooter</option>
                <option value="RPG">RPG</option>
                <option value="Terror">Terror</option>
                <option value="Carreras">Carreras</option>
                <option value="Deportes">Deportes</option>
                <option value="Estrategia">Estrategia</option>
                <option value="Aventura">Aventura</option>
                
              </select>
            </div>

            <div className="campo-grupo">
              <label className="campo-label" htmlFor="img-game">
                url de imagen
              </label>

              <input
                className="campo-texto"
                id="img-game"
                type="text"
                placeholder="url de la imagen"
                {...register("img_portrait", {
                  required: "La imagen es obligatoria",
                })}
              />

              {errors.img_portrait && (
                <p className="error-texto">{errors.img_portrait.message}</p>
              )}
            </div>

            {/* <div className="campo-grupo">
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
            </div> */}

            <div className="formulario-acciones">
              <button className="btn btn-primario" type="submit">
                {modoFormulario === "crear"
                  ? "Agregar juego"
                  : "Guardar cambios"}
              </button>

              <button
                className="btn btn-outline"
                type="button"
                onClick={() => {
                  setModoFormulario(null);
                  setJuegoEditando(null);
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
        {games.map((game) => (
          <li className="tarjeta-usuario" key={game.game_id}>
            <div className="usuario-info">
              <span className="usuario-nombre">{game.title}</span>
              <span className="usuario-correo">{game.description}</span>
              <span className="usuario-id">ID: {game.game_id}</span>
            </div>

            <div className={"badge-rol badge-" + game.genre}>
              {game.genre.map((m,i)=> (<span key={i}>{m}</span>))}
            </div>

            <div className="usuario-acciones">
              <button
                className="btn btn-editar"
                onClick={() => {
                  setModoFormulario("editar");
                  setJuegoEditando(game);

                  reset({
                    title: game.title,
                    description: game.description,
                    price: game.price,
                    genre: game.genre,
                    img_portrait:game.img_portrait,
                  });
                }}
              >
                Editar
              </button>

              <button
                className="btn btn-eliminar"
                onClick={() => setJuegoEliminando(game)}
              >
                Eliminar
              </button>
              
            </div>
          </li>
        ))}
      </ul>

      <Modal
        className="modal-eliminar"
        title="Eliminar usuario"
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
          close:{
            color: "var(--color-texto)",
            backgroundColor: "var(--color-fondo)"
          },
        }}
        open={juegoEliminando !== null}
        onCancel={() => setJuegoEliminando(null)}
        footer={
          <>
            <button
              className="btn-cancelar"
              onClick={() => setJuegoEliminando(null)}
            >
              Cancelar
            </button>

            <button
              className="btn-eliminar"
              onClick={() => {
                if (juegoEliminando) {
                  removeGame(juegoEliminando.game_id);
                  setJuegoEliminando(null);
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
          <b>{juegoEliminando?.title}</b>?
        </p>
      </Modal>
    </div>
  );
}

export default Juegos;