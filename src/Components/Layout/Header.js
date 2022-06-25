import React from 'react';
import bkgImage from '../../Assets/header.jpg';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

 const Header = (props) =>{
  return (

    <>
    <header className={styles.header}>
    <span className={styles.headerWrapper}>
    <h1 className={styles.title}>GoGo Donuts</h1>
    <h4 className={styles.subheader}>Caffeinated Confections</h4>
    </span>

    <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={styles['main-image']}>
        <img src={bkgImage} alt="Donuts"></img>
    </div>
    </>
    
  )
}
export default Header;

