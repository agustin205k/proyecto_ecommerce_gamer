import { useEffect, useState,useCallback, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameContext, type Game } from "./gameContext";
import { getLS, setLS } from "../../utils/localstorage";
import { gamesSeeder } from "../../utils/games";
import { useUser } from "../../hooks/useUser";

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({ children }: GameProviderProps) => {
  const { usuarioActual } = useUser();

  const [games, setGames] = useState<Game[]>([]);
  const [carrito, setCarrito] = useState<Game[]>([]);

  const obtenerClaveCarrito = useCallback(() => {
    if (usuarioActual && usuarioActual.id) {
      return `carrito_${usuarioActual.id}`;
    }
    return "carrito_invitado";
  }, [usuarioActual]);

  useEffect(() => {
    (function () {
      gamesSeeder();

      const seededGames = getLS<Game[]>("defaultGames") ?? [];
      const data = getLS<Game[]>("games") ?? [];

      if (data?.length > seededGames?.length) {
        setGames(data);
        return;
      }

      setGames([...seededGames]);
    })();
  }, []);

  useEffect(() => {
    (function () {
      if (games.length > 0) {
        setLS("games", games);
      }
    })();
  }, [games]);


  useEffect(() => {
    function cargarCarrito() {
      
      const claveCarrito = obtenerClaveCarrito();
      const carritoGuardado = getLS<Game[]>(claveCarrito) ?? [];
      setCarrito(carritoGuardado);
    }
    cargarCarrito()
  }, [usuarioActual?.id, obtenerClaveCarrito]);



  const addGame = (game: Game) => {
    const gameId = uuidv4();

    const newGame = {
      ...game,
      game_id: gameId,
    };

    setGames([...games, newGame]);
  };

  const getGame = (id: string) => {
    return getGames().find((m) => m.game_id === id);
  };

  const removeGame = (id: string) => {
    setGames([
      ...getGames().filter((m) => m.game_id !== id),
    ]);
  };

  const getGames = () => [...games];

  const updateGame = (game: Game) => {
    const updatedGames = getGames().map((m) =>
      m.game_id === game.game_id ? game : m
    );

    setGames(updatedGames);
  };


  const agregarCarrito = (game: Game) => {
    const claveCarrito = obtenerClaveCarrito() 
    let seAgrego = false;
    setCarrito((prevCarrito) => {
      const yaExiste = prevCarrito.some(
        (juego) => juego.game_id === game.game_id
      );

      if (yaExiste) {
        seAgrego = false;
        return prevCarrito;
      }

      const nuevoCarrito = [...prevCarrito, game];
      setLS(claveCarrito, nuevoCarrito);
      seAgrego = true;
      return nuevoCarrito;
    });

    return seAgrego;
  };

  const eliminarCarrito = (id: string) => {
    const nuevoCarrito = carrito.filter(
      (juego) => juego.game_id !== id
    );

    setCarrito(nuevoCarrito);

    setLS(obtenerClaveCarrito(), nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);

    setLS(obtenerClaveCarrito(), []);
  };

  return (
    <GameContext.Provider
      value={{
        games,
        addGame,
        getGames,
        getGame,
        updateGame,
        removeGame,
        carrito,
        eliminarCarrito,
        agregarCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;