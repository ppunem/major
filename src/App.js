import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import './App.css';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';


function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
