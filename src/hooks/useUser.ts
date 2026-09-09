import { useContext } from "react";
import { UserContext } from "../context/userContext/userContext.ts";

export function useGame(){
  return(useContext(UserContext));
}