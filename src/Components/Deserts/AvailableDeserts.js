import React from 'react';
import styles from './AvailableDeserts.module.css';
import DesertItem from './DesertItems/DesertItem'
import Card from '../UI/Card';


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
    description: 'A big yeast donut, with no whole and icing',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Jelly Donuts',
    description: 'A big yeast donut, with jelly center and covered in sugar ',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Maple Bacon',
    description: 'A big yeast donut, with bacon crumbles and maple icing',
    price: 18.99,
  },
]; 


export default function AvailableDeserts() {
  
  const desertList = DESERT_DATA.map(desert=>
  <DesertItem 
  key={desert.id} 
  id={desert.id} 
  name={desert.name} 
  descr={desert.description}
  price={desert.price}></DesertItem>       
  )
  return (
    <section className={styles.meals}>
      <Card>
      <ul>
        {desertList}
      </ul>
      </Card>
    </section>
  )
}
