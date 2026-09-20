/* Dependencies */
import { useEffect, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

/* Local */
import { GameContext,type Game } from "./gameContext";
import { getLS,setLS } from "../../utils/localstorage";
import { gamesSeeder } from "../../utils/games";

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({children}:GameProviderProps) =>{
  const [games,setGames] = useState<Game[]>([]);
  const [carrito, setCarrito] = useState<Game[]>([]);

  useEffect(()=>{
    (function(){
      gamesSeeder();
      const seededGames = getLS<Game[]>("defaultGames") ?? [];
      const data = getLS<Game[]>("games") ?? [];
      if(data?.length > seededGames?.length){
        setGames(data);
        return;       
      }
      setGames([...seededGames]);
    })()
  },[]);

  useEffect(() =>{
    (function(){
      if (games.length > 0) {
        setLS("games", games);
        console.log(games);
      }
    })()
  },[games]);


    useEffect(() => {
      function guardarCarrito() {
        
        const carritoGuardado =
          getLS<Game[]>("carrito") ?? [];
    
        setCarrito(carritoGuardado);
      }
      guardarCarrito()
  }, []);


  // Guardar carrito
  useEffect(() => {

    setLS("carrito", carrito);

  }, [carrito]);

  const addGame = (game:Game) =>{
    console.log(game);
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

  const agregarCarrito = (game: Game) => {
  const yaExiste = carrito.some(
    (juego) => juego.game_id === game.game_id
  );

  if (yaExiste) {
    return false;
  }

  setCarrito([...carrito, game]);
  return true;
};

  const eliminarCarrito = (id: string) => {

    const nuevoCarrito = carrito.filter(
      (juego) =>
        juego.game_id !== id
    );

    setCarrito(nuevoCarrito);

  };

  return(
    <GameContext.Provider value={{games,addGame,getGames,getGame,updateGame,removeGame,carrito,eliminarCarrito,agregarCarrito}}>
      {children}
    </GameContext.Provider>
  );

};

export default GameProvider;