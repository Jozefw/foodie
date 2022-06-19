import React from 'react';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = ()=> {
  return (
    <button>
    <span><CartIcon>Cart</CartIcon></span>  
    <span>Your Cart</span>  
    <span>3</span>  
    </button>
  )
}
export default HeaderCartButton;