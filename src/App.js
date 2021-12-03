import React from 'react'
import { Link, BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import ContactUS from './Component/ContactUS';
import LandingPage from './Component/LandingPage';
import Products from './Component/Products/Products';

import NotFound from './Component/NotFound';
import NavBar from './Component/NavBar';
import ProductForm from './Component/Products/ProductForm';

function App() {
  return (
    <div >
    <BrowserRouter>
    <NavBar/>
      <Routes>
       
       <Route path="/LandingPage" element={<LandingPage/>}/>
       <Route path="/Products" element={<Products />}/>
       <Route path="/ProductForm" element={<ProductForm />}/>
       
       <Route path="/ContactUs" element={<ContactUS />}/>
      
       
      
      
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
