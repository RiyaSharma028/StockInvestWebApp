import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter , Routes , Route} from "react-router-dom"
// import App from './App.jsx'
import Home from "./Components/Home/Home"
import SignnUp from './Components/SignUp/Signup.jsx'
import About from "./Components/About/About.jsx"
import Product from './Components/Product/Product.jsx'
import Pricing from "./Components/Pricing/Pricing.jsx"
import Support from "./Components/Suppport/Support.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import NotFound from "./NotFound.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/signup' element={<SignnUp></SignnUp>}/>
    <Route path='/About' element={<About></About>}/>
    <Route path='/Product' element={<Product></Product>}/>
    <Route path='/Pricing' element={<Pricing></Pricing>}/>
    <Route path='/Support' element={<Support></Support>}/>
     <Route path='*' element={<NotFound></NotFound>}/>
   </Routes>
    <Footer></Footer>
  </BrowserRouter>
)
