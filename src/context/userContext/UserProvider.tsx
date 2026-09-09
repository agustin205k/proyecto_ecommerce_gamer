import { useState, type ReactNode } from "react";
import { UserContext } from "./userContext";

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({children}:UserProviderProps) =>{
  const [user,setUser] = useState<string[]>([]);



  return(
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );

};

export default UserProvider;