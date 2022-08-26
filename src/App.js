import React from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Deserts from './Components/Deserts/Deserts';


function App() {
  return (
    <>
    <Cart></Cart>
      <Header> </Header>
        <main>
        <Deserts></Deserts>
        </main>
     
    </>
  );
}

export default App;
