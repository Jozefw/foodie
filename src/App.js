import React,{useState} from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Deserts from './Components/Deserts/Deserts';


function App() {

const [cartShown,setCartShown] = useState(false);
const showCartHandler = () =>{
  setCartShown(true);
}
const hideCartHandler = () =>{
  setCartShown(false);
}

  return (
    <>
    {cartShown && <Cart onClose={hideCartHandler}></Cart> }
      <Header onShowingCart={showCartHandler}> </Header>
        <main>
        <Deserts></Deserts>
        </main>
     
    </>
  );
}

export default App;
