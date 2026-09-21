/* Dependencies */
import { v4 as uuidv4 } from "uuid";

/* Local */
import { getLS, setLS } from "./localstorage";
import { type Game } from "../context/gameContext/gameContext";

const defaultGames: Game[] = [
  {
    game_id: uuidv4(),
    title: "Grand Theft Auto V",
    description: "Viví una aventura llena de acción en Los Santos.",
    genre: ["Acción"],
    price: 25000,
    releaseDate:"",
    img_portrait: "https://media.vandal.net/m/15192/grand-theft-auto-v-201342141558_1.jpg",
    rating: [5],
    comments:[]
  },
  {
    game_id: uuidv4(),
    title: "Minecraft",
    description: "Crea, Viaja, Construye, Aprende y Vive en este mundo de bloques.",
    genre: ["Aventura"],
    price: 18000,
    releaseDate:"",
    img_portrait: "https://i.pinimg.com/474x/0e/8a/bd/0e8abd5986fa0d36aca45603af3090bc.jpg",
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
    img_portrait:"https://media.vandal.net/m/7-2025/16/20257161559461_1.jpg.webp",
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
    img_portrait:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZGnwUtarMxo2TJpcmzyu3yi2u1hFrODzGNg7tt0M3zO4EeK6TLyi8Wtz&s=10",
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
    img_portrait:"https://i.3djuegos.com/juegos/15009/metroid_prime_4/fotos/ficha/metroid_prime_4-5953311.webp",
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
    img_portrait:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqWlR-sN0uI5MKa-XYqTvz5B5nB1uBsdyxvJ86lVo477PNE7MH5VJWFY&s=10",
    rating: [5],
    comments:[]
    
  },
  {
    game_id: uuidv4(),
    title: "Halo Infinite",
    description: "La legendaria saga de ciencia ficción regresa con acción intensa.",
    genre: ["Accion", "Shooter"],
    price: 45000,
    releaseDate: "2021-12-08",
    img_portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOSIMtg9nSmyCTMTV6Pu4oarX6ERvNAXbkLHyJYoktmIdxOLK2lbg4N0&s=10",
    rating: [4],
    comments: []
  },

  {
    game_id: uuidv4(),
    title: "Animal Crossing: New Horizons",
    description: "Construye tu isla paradisíaca y vive a tu ritmo.",
    genre: ["Simulación", "Aventura"],
    price: 32000,
    releaseDate: "2020-03-20",
    img_portrait: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a",
    rating: [5],
    comments: []
  },
  {
    game_id: uuidv4(),
    title: "Final Fantasy XVI",
    description: "Una historia épica de fantasía y batallas intensas.",
    genre: ["RPG", "Accion"],
    price: 52000,
    releaseDate: "2023-06-22",
    img_portrait: "https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_XVI_cover_art.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    rating: [4],
    comments: []
  }
];

function gamesSeeder() {
  const data = getLS<Game[]>("defaultGames");
  if (data?.length) return;
  setLS("defaultGames", defaultGames);
}

export { gamesSeeder };