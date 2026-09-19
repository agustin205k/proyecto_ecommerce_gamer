import { useContext } from "react";
import { UserContext } from "../context/userContext/userContext";

export function useGame(){
  return(useContext(UserContext));
}