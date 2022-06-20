import React, {fragment} from 'react';
import bkgImage from '../../Assets/header.jpg';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

 const Header = (props) =>{
  return (

    <>
    <header className={styles.header}>
    <h1>GoGo Donuts</h1>
    <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={styles['main-image']}>
        <img src={bkgImage} alt="Donut image"></img>
    </div>
    </>
    
  )
}
export default Header;

