import React from 'react';
import styles from '.Cart.modules.css';

const Cart =(props) =>{
const cartItems =<ul className={styles['cart-items']}>{[{id:'c1',name:'One Pounder',price:12.99,amount:2}].map((item)=><li>item.name</li>)}</ul>

  return (
    <div>

      {cartitems}
      <div className={styles.total}>
      <span>Total Amount</span>
      <span>$62.54</span>
      </div>

      <div className={styles.action}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
       
      </div>

      {cartItems}
      <div></div>
      <div></div>
>>>>>>> 26bff35f47c893f25b57f703f8c42f3beba2b877
    </div>
  )
}


export default Cart;