import { createContext } from "react";

export interface Game {
  id: string;          
  title: string;
  description:string;       
  genre: string[];       
  releaseYear: number; 
  rating: number;
}

export interface GameContextType {
  games: Game[];                         
  addGame: (game: Game) => void;
  getGame: (id: number) => void;
  removeGame: (id: number) => void;       
  updateGame: (game: Game) => void;     
}

export const GameContext = createContext<GameContextType>({
  games: [],
  addGame: () => {},
  getGame: () => {},
  removeGame: () => {},
  updateGame: () => {},
});