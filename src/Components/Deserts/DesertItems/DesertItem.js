import React from 'react';
import DesertItemForm from './DesertItemForm';
import styles from './DesertItem.module.css';

export default function DesertItem(props) {

  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.descr}</div>
        <div className={styles.price}>{price}</div>
      </div>
     
      <div>
        <DesertItemForm></DesertItemForm>
      </div>
    </li>
  )
}
