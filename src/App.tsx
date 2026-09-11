/* Dependencies */
import { BrowserRouter,Routes,Route } from 'react-router-dom';

/* Local */
import Layout from './components/layout/layout';
import Home from './pages/Home/home';
import Detail from './pages/Detail/detail';
import Admin from './pages/Admin/admin';
import About from './pages/About/about';
import Error404 from './pages/Error404/error404';
import Register from './pages/Register/register';
import Login from './pages/Login/login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='detalle/:id' element={<Detail/>} />
              <Route path='admin' element={<Admin/>} />
              <Route path='register' element={<Register/>} />
              <Route path='about' element={<About/>} />
              <Route path='login' element={<Login/>}/>
              <Route path='404' element={<Error404/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
