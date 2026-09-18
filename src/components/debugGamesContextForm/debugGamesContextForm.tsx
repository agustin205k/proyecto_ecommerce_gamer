/* Dependencies */
import {useForm} from "react-hook-form";
import {useState} from "react"

/* Local */
import styles from "./debugGamesContextForm.module.css"
import type { Game } from "../../context/gameContext/gameContext";
import { useGame } from "../../hooks/useGame";

function DebugGamesContextForm(){
  const {addGame,getGame,getGames,updateGame,removeGame} = useGame();
  const {
    register: registerAgregar,
    handleSubmit: handleSubmitAgregar,
    formState: { errors: errorsAgregar },
  } = useForm<Game>({
    defaultValues: {
      title: "",
      description: "",
      genre: [""],
      releaseDate: "",
      rating: [0],
    },
  });

  // 👉 Formulario para editar
  const {
    register: registerEditar,
    handleSubmit: handleSubmitEditar,
    formState: { errors: errorsEditar },
  } = useForm<Game>({
    defaultValues: {
      title: "",
      description: "",
      genre: [""],
      releaseDate: "",
      rating: [0],
    },
  });

  const [mostrarTodos, setMostrarTodos] = useState<boolean>(false);
  const [mostrarUno, setMostrarUno] = useState<boolean>(false);
  const [gameID, setGameID] = useState<string>("");

  const añadirJuego = (data:Game) =>{
    addGame(data);
  }

  const mostrarJuegos = () =>{
    const games = getGames();
    console.log(games);
    return games;
  }

  const mostrarJuego = (id:string) =>{
    const game = getGame(id)
    console.log(game || "El juego buscado no existe existe");
    return game ? [game] : [];
  }

  const borrarJuego = (id:string) =>{
    removeGame(id);
    console.log("id removido: " + id);
  }

  const editarJuego = (data:Game,id:string) =>{
    const newData = {...data, game_id:id}
    updateGame(newData);
  }

 return(
  <>
    <div className={styles.formulario}>
      <h2>Agregar</h2>
      <form onSubmit={handleSubmitAgregar((data) => añadirJuego(data))}>
        <div>
          <label>Título</label>
          <input {...registerAgregar("title", { required: "El título es obligatorio" })} />
          {errorsAgregar.title && <span>{errorsAgregar.title.message}</span>}
        </div>

        <div>
          <label>Descripción</label>
          <textarea {...registerAgregar("description", { required: "La descripción es obligatoria" })} />
          {errorsAgregar.description && <span>{errorsAgregar.description.message}</span>}
        </div>

        <div>
          <label>Géneros</label>
          <select {...registerAgregar("genre")} multiple>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Multiplayer">Multiplayer</option>
          </select>
        </div>

        <div>
          <label>Año de lanzamiento</label>
          <input type="text" {...registerAgregar("releaseDate")} />
        </div>

        <div>
          <label>Rating</label>
          <input type="number" {...registerAgregar("rating", { valueAsNumber: true, min: 0, max: 10 })} />
        </div>

        <button type="submit">Guardar juego</button>
      </form>      
    </div>
    <div className={styles.formulario}>
      <h2>Modificar</h2>
      <form onSubmit={handleSubmitEditar((data) => editarJuego(data, gameID))}>
        <div>
          <label>Título</label>
          <input {...registerEditar("title", { required: "El título es obligatorio" })} />
          {errorsEditar.title && <span>{errorsEditar.title.message}</span>}
        </div>

        <div>
          <label>Descripción</label>
          <textarea {...registerEditar("description", { required: "La descripción es obligatoria" })} />
          {errorsEditar.description && <span>{errorsEditar.description.message}</span>}
        </div>

        <div>
          <label>Géneros</label>
          <select {...registerEditar("genre")} multiple>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Multiplayer">Multiplayer</option>
          </select>
        </div>

        <div>
          <label>Año de lanzamiento</label>
          <input type="text" {...registerEditar("releaseDate")} />
        </div>

        <div>
          <label>Rating</label>
          <input type="number" {...registerEditar("rating", { valueAsNumber: true, min: 0, max: 10 })} />
        </div>

        <button type="submit">Guardar juego</button>
      </form>      
    </div>
    <div className={styles.contenedor}>
      <form className={styles.formularioBoton}>
        <button
          type="button"
          onClick={() => {
            if(getGames().length > 0){
              setMostrarTodos(true);
              setMostrarUno(false);
            }
          }}
        >
          Mostrar juegos
        </button>

        <button
          type="button"
          onClick={()=> {
            setMostrarUno(true)
            setMostrarTodos(false);
          }}
        >
          Mostrar juego
        </button>

        <button
          type="button"
          onClick={()=> borrarJuego(gameID)}
        >
          Borrar un juego
        </button>
      </form>

      <div className={styles.tarjetas}>
        {mostrarTodos &&
          mostrarJuegos().map((juego) => (
            <div 
            key={juego.game_id} 
            className={styles.card}
              onClick={()=> {
                console.log(juego)
                setGameID(juego.game_id)
              }}
            >
              <h3>{juego.title}</h3>
              <p>ID: {juego.game_id}</p>
            </div>
          ))}

          {mostrarUno && mostrarJuego(gameID)?.length > 0 &&
            mostrarJuego(gameID).map((juego) => (
              <div 
                key={juego.game_id} 
                className={styles.card}
                onClick={()=> {
                  console.log(juego)
                  setGameID(juego.game_id)
                }}
              >
                <h3>{juego.title}</h3>
                <p>ID: {juego.game_id}</p>
              </div>
            ))
          }
      </div>
    </div>
    {/* <div className={styles.mostrar}>
      <button 
      className={styles.mostrar__button}
      onClick={mostrarJuegos}
      >Mostrar juegos</button>
    </div>
    <div className={styles.mostrar}>
      <button 
      className={styles.mostrar__button}
      onClick={()=> mostrarJuego("e69ab0e2-3f82-4d8c-befc-28aa43a98448")}
      >Mostrar un juego</button>
    </div>
    <div className={styles.mostrar}>
      <button 
      className={styles.mostrar__button}
      onClick={() => borrarJuego("e69ab0e2-3f82-4d8c-befc-28aa43a98448")}
      >Borrar un juego</button>
    </div> */}
  </>
 );
}

export default DebugGamesContextForm;