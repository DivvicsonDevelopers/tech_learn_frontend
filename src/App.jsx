
import './App.css'
import Navigation from './components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../src/pages/landing/Index"
import Pricing from "../src/pages/Pricing/Index"
import Footer from './pages/landing/componnts/Footer';
import PreLogin from './pages/PreLogin';


function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navigation />
     <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path="/pre-login" element={<PreLogin />} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </>
   
  )
}

export default App
