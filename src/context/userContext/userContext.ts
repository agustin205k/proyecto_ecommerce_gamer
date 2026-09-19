import { createContext } from "react";

export type Rol = "admin" | "visitante";

export interface Usuario {
    id: string;
    nombre:string;
    email:string;
    password:string;
    rol: Rol;
}

interface UserContextType {
  usuarios: Usuario[];
  usuarioActual: Usuario | null;

  registrarUsuario: (usuario: Usuario) => void;
  eliminarUsuario: (id: string) => void;
  editarUsuario: (usuario: Usuario) => void;
  iniciarSesion: (email: string, password: string) => Usuario | null;
  cerrarSesion: () => void;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);