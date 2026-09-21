/* Dependencies */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Local */
import Layout from "./components/layout/layout";
import Home from "./pages/Home/home";
import Detail from "./pages/Detail/detail";
import Admin from "./pages/Admin/admin";
import Usuarios from "./pages/Admin/Usuarios";
import About from "./pages/About/about";
import Error404 from "./pages/Error404/error404";
import GameProvider from "./context/gameContext/gameProvider";
import Register from "./pages/Register/register";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/login";
import SearchPage from "./pages/Search/searchPage";
import { UserProvider } from "./context/userContext/UserProvider";
import RutaProtegida from "./components/RutaProtegida/RutaProtegida";
import Juegos from "./pages/Admin/Juegos";

function App() {
  return (
    <>
      <UserProvider>
        <GameProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="search/:query" element={<SearchPage />} />
                <Route
                  path="admin"
                  element={
                    <RutaProtegida>
                      <Admin />
                    </RutaProtegida>
                  }
                />
                <Route
                  path="admin/usuarios"
                  element={
                    <RutaProtegida>
                      <Usuarios />
                    </RutaProtegida>
                  }
                />
                <Route
                  path="admin/juegos"
                  element={
                    <RutaProtegida>
                      <Juegos />
                    </RutaProtegida>
                  }
                />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="about" element={<About />} />
                <Route path="cart" element={<Cart />} />
              </Route>

              <Route path="404" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </GameProvider>
      </UserProvider>
    </>
  );
}

export default App;
