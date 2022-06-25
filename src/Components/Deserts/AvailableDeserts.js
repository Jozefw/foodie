import React from 'react';
import styles from './AvailableDeserts.module.css';


const DESERT_DATA = [
  {
    id: 'm1',
    name: 'Cake Donut',
    description: 'Cake Donut with icing and sprinkles',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Bear Claw',
    description: 'A big yeast donut ,with no whole and icing',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Jelly Donuts',
    description: 'A big yeast donut ,with jelly center and covered in sugar ',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Maple Bacon',
    description: 'A big yeast donut ,with bacon crumbles and mapl icing',
    price: 18.99,
  },
]; 


export default function AvailableDeserts() {
  const desertList = DESERT_DATA.map(desert=>
  <li style={{'border':'1px solid red'}}>{desert.name}</li>        
  )
  return (
    <section className={styles.meals}>
      <ul>
        {desertList}
      </ul>
    </section>
  )
}
