import { useState } from "react";
import type { ReactNode } from "react";
import { UserContext } from "./userContext";
import type { Usuario } from "./userContext";
import { toast } from "sonner";

const adminInicial: Usuario = {
  id: "admin-1",
  nombre: "Administrador",
  email: "admin@gmail.com",
  password: "admin123",
  rol: "admin",
};

const usuariosGuardados = localStorage.getItem("usuarios");

const usuariosIniciales: Usuario[] = usuariosGuardados
  ? JSON.parse(usuariosGuardados)
  : [adminInicial];

const adminExiste = usuariosIniciales.find(
  (usuario) => usuario.rol === "admin",
);

if (!adminExiste) {
  usuariosIniciales.push(adminInicial);
}

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosIniciales);
  const usuarioActualGuardado = localStorage.getItem("usuarioActual");

  const [usuarioActual, setUsuarioActual] = useState<Usuario | null>(
    usuarioActualGuardado ? JSON.parse(usuarioActualGuardado) : null,
  );

  const registrarUsuario = (usuario: Usuario) => {
    const usuarioExistente = usuarios.find(
      (usuarioActual) => usuarioActual.email === usuario.email,
    );

    if (usuarioExistente) {
      console.log("El email ya está registrado");
      toast.error("El email ya está registrado");
      return;
    }

    const nuevosUsuarios = [...usuarios, usuario];

    setUsuarios(nuevosUsuarios);

    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
  };

  const eliminarUsuario = (id: string) => {
    const usuarioAEliminar = usuarios.find((usuario) => usuario.id === id);

    const cantidadAdmins = usuarios.filter(
      (usuario) => usuario.rol === "admin",
    ).length;

    if (usuarioAEliminar?.rol === "admin" && cantidadAdmins === 1) {
      toast.error("No se puede eliminar el ultimo administrador");
      return;
    }

    const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);

    setUsuarios(nuevosUsuarios);

    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

    toast.success("Usuario eliminado correctamente");
  };

  const editarUsuario = (usuarioEditado: Usuario) => {
    const usuarioExistente = usuarios.find(
      (usuario) =>
        usuario.email === usuarioEditado.email &&
        usuario.id !== usuarioEditado.id,
    );

    if (usuarioExistente) {
      toast.error("El email ya está registrado");
      return;
    }

    const nuevosUsuarios = usuarios.map((usuario) =>
      usuario.id === usuarioEditado.id ? usuarioEditado : usuario,
    );

    setUsuarios(nuevosUsuarios);

    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
  };

  /* El inicio de sesion ahora acepta usuario y mail */
  const iniciarSesion = (email: string, password: string): Usuario | null => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => (usuario.email === email || usuario.nombre === email) && usuario.password === password,
    );

    if (usuarioEncontrado) {
      setUsuarioActual(usuarioEncontrado);

      localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));

      return usuarioEncontrado;
    }

    return null;
  };

  const cerrarSesion = () => {
    setUsuarioActual(null);
    localStorage.removeItem("usuarioActual");
  };

  return (
    <UserContext.Provider
      value={{
        usuarios,
        usuarioActual,
        registrarUsuario,
        eliminarUsuario,
        editarUsuario,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
