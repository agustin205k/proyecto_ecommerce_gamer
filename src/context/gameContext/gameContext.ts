import { createContext } from "react";

export interface Comments{
  user_id:string;
  comment_id:number;
  comment:string;
}

export interface Game {
  game_id: string;          
  title: string;
  description:string;
  img_portrait:string;       
  genre: string[];       
  releaseYear: number; 
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
    releaseYear: 0, 
    rating: [],
    comments: [],
  }),
  getGames: () => [],
  removeGame: () => {},
  updateGame: () => {},
});