// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './styles.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import  ItemDetailContainer  from './components/ItemDetailContainer';
import {CartProvider} from './components/CartContext';
import Cart from './components/cart';




function App() {
  

  return (
    <div className="App">
        {<BrowserRouter>
          <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/ItemDetail' element={<ItemDetail/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          </CartProvider>
         </BrowserRouter>}
      
</div>
  );
}

export default App;
