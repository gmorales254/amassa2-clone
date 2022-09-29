
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    
    <div className="App ">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/> 
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>     
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>    
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<CheckOut></CheckOut>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider> 
    </div>   
  );
}

export default App;
