import React from 'react';
import Modal from '../UI//Modal';
import styles from './Cart.module.css';

const Cart =(props) =>{
const cartItems =<ul className={styles['cart-items']}>{[{id:'c1',name:'One Pounder',price:12.99,amount:2}].map((item)=><li>item.name</li>)}</ul>

  return (
    <Modal>
      {cartItems}
      <div></div>
      <div></div>
    </Modal>
  )
}


export default Cart;