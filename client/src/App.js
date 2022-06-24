import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Home";
import Carts from "./Components/Carts";
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";
import {useState} from "react";

function App() {

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

    // const handleChange = (item, d) => {
    //     const ind = cart.indexOf(item);
    //     const arr = cart;
    //     arr[ind].amount += d;
    //
    //     if (arr[ind].amount === 0) arr[ind].amount = 1;
    //     setCart([...arr]);
    // };

    return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Home' element={<Home handleClick={handleClick}/>}/>
            <Route path='/Carts' element={<Carts cart={cart} setCart={setCart}/>}/>
            <Route path='/Profile' element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
