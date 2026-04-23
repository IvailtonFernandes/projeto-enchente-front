import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import './globalStyle.scss'
import Home from './pages/home/Home'
import Voluntario from './pages/voluntario/Voluntario'
import Footer from './components/footer/Footer'
import Abrigo from './pages/abrigo/Abrigo'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/voluntario' element={<Voluntario/>}/>
        <Route path='/abrigo' element={<Abrigo/>}/>
      </Routes>
         <Footer />
    </BrowserRouter>
    </>
  )
}

export default App