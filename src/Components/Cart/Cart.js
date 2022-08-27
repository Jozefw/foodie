import React from 'react';
import Modal from '../UI//Modal';
import styles from './Cart.module.css';

const Cart =(props) =>{
const cartItems = <ul className={styles['cart-items']}>{[{id:'c1',name:'One Pounder',price:12.99,amount:2}].map((item)=><li key={item.id}>item.name</li>)}</ul>

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
      <span>Total Amount</span>
      <span>$62.54</span>
      </div>
      <div className={styles.action}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
      </div>
  )
}


export default Cart;