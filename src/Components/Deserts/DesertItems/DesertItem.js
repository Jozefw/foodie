import React,{useContext} from 'react';
import DesertItemForm from './DesertItemForm';
import styles from './DesertItem.module.css';
import CartContext from '../../../Store/CartContext';

export default function DesertItem(props) {
  const cartContext = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`
  const addToCartHandler = (amount)=>{
    cartContext.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.descr}</div>
        <div className={styles.price}>{price}</div>
      </div>
     
      <div>
        <DesertItemForm id={props.id} addItemToCart={addToCartHandler}></DesertItemForm>
      </div>
    </li>
  )
}
