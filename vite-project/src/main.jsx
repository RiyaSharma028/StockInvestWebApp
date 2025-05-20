import { createRoot } from 'react-dom/client'

import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from "./Navbar"
import Signup from "./Components/SignUp/Signup"
import About from "./Components/About/AboutPage.jsx"
import Home from "./Components/Home/Home"
import Product from "./Components/Product/Product..jsx"
import Pricing from "./Components/Pricing/Pricing.jsx"
import Support from "./Components/Suppport/Support"
import NotFound from "./NotFound";
import Footer from "./Footer";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/signup' element={<Signup></Signup>}/>
    <Route path='/About' element={<About></About>}/>
    <Route path='/Product' element={<Product></Product>}/>
    <Route path='/Pricing' element={<Pricing></Pricing>}/>
    <Route path='/Support' element={<Support></Support>}/>
     <Route path='*' element={<NotFound></NotFound>}/>
   </Routes>
    <Footer></Footer>
  </BrowserRouter>
)
