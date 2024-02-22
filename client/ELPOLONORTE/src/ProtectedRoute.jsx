// En tu componente ProtectedRoute
import { Navigate, Outlet } from "react-router-dom";
import { useWix } from "./context/WixProvider";

function ProtectedRoute() {
  const { loading, signup } = useWix();

  console.log("Loading:", loading); // Verificar el valor de loading
  console.log("Signup:", signup); // Verificar el valor de signup


  if (loading) {
    // Si loading es true, puede que se esté cargando algo, puedes mostrar un spinner u otra indicación de carga
    return <h1>Loading...</h1>;
  }

  if (!signup) {
    // Si no hay usuario autenticado, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario autenticado, muestra el contenido protegido
  return <Outlet />;
}

export default ProtectedRoute;
