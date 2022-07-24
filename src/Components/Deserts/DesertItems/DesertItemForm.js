import React,{useState,useReducer} from 'react';
import Inputs from '../../UI/Inputs';
import styles from './Form.module.css';

export default function DesertItemForm(props) {

  return (
    <form className={styles.form}>
        <Inputs label="Amount" input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step:'1',
          defaultValue:'1'
        }}>
        </Inputs>
        <button className={styles.button}>+ Add</button>
    </form>
  )
}
