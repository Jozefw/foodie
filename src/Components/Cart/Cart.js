import React, {useContext} from 'react';
import cartContext from '../../Store/CartContext';
import CartItem from './CartItem';
import Modal from '../UI//Modal';
import styles from './Cart.module.css';


const Cart =(props) =>{
  const cartCntxt = useContext(cartContext);
  const ttlAmnt = `$${cartCntxt.totalAmount.toFixed(2)}`;
  const hasItems = cartCntxt.items.length >0;

  const  cartItemRemoveHandler = (id) =>{

  }
  const cartItemAddHandler = (item) =>{

  }
  const cartItems = <ul className={styles['cart-items']}>{cartCntxt.items.map((item)=><CartItem key={item.id} name={item.name} amount ={item.amount} price={item.price}></CartItem>)}</ul>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
      <span>Total Amount</span>
      <span>{ttlAmnt}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
      </Modal>
  )
}


export default Cart;