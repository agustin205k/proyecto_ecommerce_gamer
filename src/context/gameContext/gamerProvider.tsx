import { useState, type ReactNode } from "react";
import { GameContext } from "./gameContext";

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({children}:GameProviderProps) =>{
  const [games,setGames] = useState<string[]>([]);



  return(
    <GameContext.Provider value={games}>
      {children}
    </GameContext.Provider>
  );

};

export default GameProvider;