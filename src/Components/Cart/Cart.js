import React from 'react';
import styles from '.Cart.modules.css';

const Cart =(props) =>{
const cartItems =<ul className={styles['cart-items']}>{[{id:'c1',name:'One Pounder',price:12.99,amount:2}].map((item)=><li>item.name</li>)}</ul>

  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  )
}


export default Cart;