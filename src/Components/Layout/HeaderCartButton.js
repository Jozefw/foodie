import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = ()=> {
  return (
    <button className={styles.button}>
    <span><CartIcon>Cart</CartIcon></span>  
    <span>Your Cart </span>  
    <span className={styles.badge}>3</span>  
    </button>
  )
}
export default HeaderCartButton;