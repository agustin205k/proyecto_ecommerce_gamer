/* Dependencies */
import { useEffect, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

/* Local */
import { GameContext,type Game } from "./gameContext";
import { getLS,setLS } from "../../utils/localstorage";


interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({children}:GameProviderProps) =>{
  const [games,setGames] = useState<Game[]>([]);

  useEffect(()=>{
    (function(){
      const data = getLS<Game[]>("games");
      if(data){
        setGames(data);
      }
    })()
  },[]);

  useEffect(() =>{
    (function(){
      if (games.length > 0) { // 👈 evita guardar [] al inicio
        setLS("games", games);
      }
    })()
  },[games]);

  const addGame = (game:Game) =>{
    const gameId = uuidv4();
    const newGame = {...game, game_id:gameId};
    setGames([...games,newGame]);
  };

  const getGame = (id:string) =>{
    const game = getGames().find((m) => m.game_id === id);
    return game;
  };

  const removeGame = (id:string) =>{
    const game = getGames().filter((m) => m.game_id !== id);
    setGames([...game]);
  };

  const getGames = () =>{
    const readGame = [...games];
    return readGame;
  };

  const updateGame = (game:Game) =>{
    const updatedGames = getGames().map((m) =>
    m.game_id === game.game_id ? game : m
    );
    setGames(updatedGames);
  };

  return(
    <GameContext.Provider value={{games,addGame,getGames,getGame,updateGame,removeGame}}>
      {children}
    </GameContext.Provider>
  );

};

export default GameProvider;