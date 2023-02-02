import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Pruchases from './pages/Pruchases'
import AppNavbar from './components/AppNavBar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  const [count, setCount] = useState(0)

  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <AppNavbar/>
      { isLoading && <LoadingScreen />}
      <Container className="my-5">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<Products/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="" element={<ProtectedRoutes/>}>
            <Route path="/purchases" element={<Pruchases/>} />
          </Route>
        </Routes>
      </Container>
      <footer className="footer"> 
        <div className="copyright" style={{color: "#f85555"}}> <b> <span> ©  Jorge Rincón Rodríguez </span>   2023</b> </div> 
        <a href="https://www.instagram.com/rrajrraj1/"> <b> <span> Instagram </span> </b><i className='bx bxl-instagram bx-sm'></i></a>
        <a href="https://www.linkedin.com/in/jorgerinconrdev"> <span><b>LinkedIn</b></span> <i className='bx bxl-linkedin-square bx-sm' ></i></a>
      </footer>
    </HashRouter>
  )
}

export default App
