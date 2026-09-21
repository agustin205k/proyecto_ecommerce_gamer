import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContext";

interface RutaProtegidaProps {
  children: React.ReactNode;
}

function RutaProtegida({ children }: RutaProtegidaProps) {
  const { usuarioActual } = useContext(UserContext);

  if (!usuarioActual || usuarioActual.rol !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default RutaProtegida;