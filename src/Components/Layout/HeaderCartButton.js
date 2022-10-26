import React from 'react';
import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props)=> {
  const CartCtx = useContext(CartContext);
  const numberCartItems = CartCtx.items.reduce((totals, item)=>{
    return totals + item.amount;
  },0);
  return (
    <button onClick={props.onClickButton} className={styles.button}>
    <span className={styles.icon}><CartIcon>Cart</CartIcon></span>  
    <span>Your Cart </span>  
    <span className={styles.badge}>{numberCartItems}</span>  
    </button>
  )
}
export default HeaderCartButton;