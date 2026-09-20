import { createContext } from "react";

export interface Comments{
  user_id:string;
  comment_date:string;
  comment:string;
  review:number;
}

export interface Game {
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

export interface GameContextType {
  games: Game[];                         
  addGame: (game: Game) => void;
  getGame: (id: string) => Game | undefined;
  getGames: () => Game[];
  removeGame: (id: string) => void;       
  updateGame: (game: Game) => void;    
  
  carrito: Game[];
  agregarCarrito: (game: Game) => boolean;
  eliminarCarrito: (id: string) => void;
  vaciarCarrito: () => void;
}

export const GameContext = createContext<GameContextType>({
  games: [],
  addGame: () => {},
  getGame: () => ({
    game_id: "", 
    title: "", 
    description: "",
    img_portrait:"", 
    genre: [],
    price:0, 
    releaseDate: "", 
    rating: [],
    comments: [],
  }),
  getGames: () => [],
  removeGame: () => {},
  updateGame: () => {},

   carrito: [],
  agregarCarrito: () => false,
  eliminarCarrito: () => {},
  vaciarCarrito: () => {},
});