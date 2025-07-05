import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { Shopcategory } from './Pages/Shopcategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import { Loginsignup } from './Pages/Loginsignup';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/>
            
            {/* Corrected product route */}
            <Route path='/products/:productId' element={<Product/>}/>
            
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/signup' element={<Loginsignup/>}/>
            
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;