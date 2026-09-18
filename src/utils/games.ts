/* Dependencies */
import { v4 as uuidv4 } from "uuid";

/* Local */
import { getLS, setLS } from "./localstorage";
import { type Game } from "../context/gameContext/gameContext";

/* interface Juego {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
} */

/* export interface Game {
  game_id: string;          
  title: string;
  description:string;
  img_portrait:string;       
  genre: string[];
  price:Number;       
  releaseDate: string; 
  rating: number[];
  comments: Comments[];
} */

const defaultGames: Game[] = [
  {
    game_id: uuidv4(),
    title: "Grand Theft Auto V",
    description: "Viví una aventura llena de acción en Los Santos.",
    genre: ["Acción"],
    price: 25000,
    releaseDate:"",
    img_portrait: "/img/gta-v.jpg",
    rating: [5],
    comments:[]
  },
  {
    game_id: uuidv4(),
    title: "Minecraft",
    description: "Construí, explorá y sobreviví en un mundo sin límites.",
    genre: ["Aventura"],
    price: 18000,
    releaseDate:"",
    img_portrait: "/img/minecraft.jpg",
    rating: [5],
    comments:[]
  },
  {
    game_id: uuidv4(),
    title:"EA Sports FC 26",
    description:"Disfrutá de la experiencia futbolística.",
    genre: ["Deportes"],
    price: 35000,
    releaseDate:"",
    img_portrait:"/img/fc26.jpg",
    rating: [5],
    comments:[]
  },
  {

    game_id: uuidv4(),
    title:"Marvel's Wolverine",
    description:"Convertite en Wolverine y enfrentá nuevos desafíos.",
    genre: ["Acción"],
    price: 45000,
    releaseDate:"",
    img_portrait:"/img/wolverine.jpg",
    rating: [5],
    comments:[]
  },
  {
    game_id: uuidv4(),
    title:"Metroid Prime 4",
    description:"Explorá nuevos mundos y enfrentá peligros.",
    genre: ["Aventura"],
    price: 40000,
    releaseDate:"",
    img_portrait:"/img/metroid.jpg",
    rating: [5],
    comments:[]
  },
  {
    game_id: uuidv4(),
    title:"The Legend of Zelda",
    description:"Una aventura épica llena de misterios.",
    genre: ["Aventura"],
    price: 38000,
    releaseDate:"",
    img_portrait:"/img/zelda.jpg",
    rating: [5],
    comments:[]
    
  },
];

function gamesSeeder() {
  const data = getLS<Game[]>("defaultGames");
  if (data?.length) return;
  setLS("defaultGames", defaultGames);
}

export { gamesSeeder };