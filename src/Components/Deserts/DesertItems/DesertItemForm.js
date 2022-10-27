import React,{useState,useReducer,useRef} from 'react';
import Inputs from '../../UI/Inputs';
import styles from './Form.module.css';

export default function DesertItemForm(props) {

  const amountInputRef = useRef()
  const submitHandler = (evt)=>{
    evt.preventDefault();

  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <Inputs 
          label="Amount" 
          ref = {amountInputRef}
          input={{
          id: 'amount_' + props.id,
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
