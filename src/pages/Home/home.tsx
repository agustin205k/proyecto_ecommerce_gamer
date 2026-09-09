/* Dependencies */
import {useForm} from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

/* Local */
import styles from "./home.module.css"
import { useGame } from "../../hooks/useGame";


interface GameFormData {          
  title: string;
  description:string;       
  genre: string[];       
  releaseYear: number; 
  rating: number;
} 


function Home(){
  const {games,addGame,getGame,updateGame,removeGame} = useGame();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameFormData>({
    defaultValues: {
      title: "",
      description: "",
      genre: [""],
      releaseYear: new Date().getFullYear(),
      rating: 0,
    },
  });

  const submit = (data:GameFormData) =>{
    const newGame = {...data, id:uuidv4()};
    addGame(newGame);
  }

 return(
  <>
    <h2>Soy el home</h2>
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit(submit)}>
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
  </>
 );
}

export default Home;