/* Dependencies */
import { useState, type ReactNode } from "react";

/* Local */
import { GameContext,type Game } from "./gameContext";

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({children}:GameProviderProps) =>{
  const [games,setGames] = useState<Game[]>([]);

  const addGame = (game:Game) =>{
    console.log(game);
  };

  const getGame = (id:number) =>{
    console.log(id);
  };

  const updateGame = (game:Game) =>{
    console.log(game);
  };

  const removeGame = (id:number) =>{
    console.log(id);
  };



  return(
    <GameContext.Provider value={{games,addGame,getGame,updateGame,removeGame}}>
      {children}
    </GameContext.Provider>
  );

};

export default GameProvider;