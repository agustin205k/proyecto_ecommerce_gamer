import { useContext } from "react";
import { GameContext } from "../context/gameContext/gameContext"

export function useGame(){
  return(useContext(GameContext));
}