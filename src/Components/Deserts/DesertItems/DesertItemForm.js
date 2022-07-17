import React,{useState,useReducer} from 'react';
import Inputs from '../../UI/Inputs';
import styles from './Form.module.css';

export default function DesertItemForm(props) {




    
  return (
    <form className={styles.form}>
        <Inputs>
        </Inputs>
        <button className={styles.button}>+ Add</button>
    </form>
  )
}
