/* Dependencies */
import {useForm} from "react-hook-form";

/* Local */
import styles from "./home.module.css"
import type { Game } from "../../context/gameContext/gameContext";
import { useGame } from "../../hooks/useGame";

function Home(){
  const {games,addGame,getGame,getGames,updateGame,removeGame} = useGame();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Game>({
    defaultValues: {
      title: "",
      description: "",
      genre: [""],
      releaseYear: new Date().getFullYear(),
      rating: [0],
    },
  });

  const añadirJuego = (data:Game) =>{
    addGame(data);
  }

  const mostrarJuegos = () =>{
    console.log(getGames());
  }

  const mostrarJuego = () =>{
    console.log(getGame("293adab6-6738-4107-9bb0-b7b972f44195") || "El juego buscado no existe existe");
  }

  const borrarJuego = () =>{
    const id = "293adab6-6738-4107-9bb0-b7b972f44195"
    removeGame(id)
    console.log("id removido: " + id);
  }

  const editarJuego = (data:Game) =>{
    const newData = {...data, game_id:"c2fe114d-220d-4f85-a5c7-4f74314bd4a4"}
    updateGame(newData);
  }

 return(
  <>
    <h2>Soy el home</h2>
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit(añadirJuego)}>
        <div>
          <label>Título</label>
          <input {...register("title", { required: "El título es obligatorio" })} />
          {errors.title && <span>{errors.title.message}</span>}
        </div>

        <div>
          <label>Descripción</label>
          <textarea {...register("description", { required: "La descripción es obligatoria" })} />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div>
          <label>Géneros</label>
          <select {...register("genre")} multiple>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Multiplayer">Multiplayer</option>
          </select>
        </div>

        <div>
          <label>Año de lanzamiento</label>
          <input type="number" {...register("releaseYear", { valueAsNumber: true })} />
        </div>

        <div>
          <label>Rating</label>
          <input type="number" {...register("rating", { valueAsNumber: true, min: 0, max: 10 })} />
        </div>

        <button type="submit">Guardar juego</button>
      </form>      
    </div>
    <div className={styles.mostrar}>
      <button 
      className={styles.mostrar__button}
      onClick={mostrarJuegos}
      >Mostrar juegos</button>
    </div>
    <div className={styles.mostrar}>
      <button 
      className={styles.mostrar__button}
      onClick={mostrarJuego}
      >Mostrar un juego</button>
    </div>
    <div className={styles.mostrar}>
      <button 
      className={styles.mostrar__button}
      onClick={borrarJuego}
      >Borrar un juego</button>
    </div>
  </>
 );
}

export default Home;