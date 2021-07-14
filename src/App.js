import React,{useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {

  const [useCart, setCart]=useState(false);

  function enableCartHandler(){
    setCart(true);
  }
  function disableCartHandler(){
    setCart(false);
  }
  return (
    <CartProvider>
      {useCart && <Cart onDisableCart={disableCartHandler}></Cart>}
      <Header onShowCart={enableCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>  
    
  );
}

export default App;
