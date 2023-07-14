import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter, Route, Routes,Link} from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/login';
import Register from './component/Register';
import Cart from './component/Cart';


function App() {
  return (
   <>
  
      <Navbar />
     
      
      <Routes>
        <Route path="/" element={<Home/> }/> 
        <Route path="/products" Component={Products} />
        <Route path="/products/:id" Component={Product} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/cart" Component={Cart} />
       
          
      
      </Routes>
    
      
   
      
   
  
   </> 
  );
}

export default App;

