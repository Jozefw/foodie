import React,{useState,useRef} from 'react';
import Inputs from '../../UI/Inputs';
import styles from './Form.module.css';

export default function DesertItemForm(props) {

  const amountInputRef = useRef();
  const [validAmount,setValidAmount ] = useState(true);
  
  const submitHandler = (evt)=>{
    evt.preventDefault();
    const amtEnter = amountInputRef.current.value;
    const amountEntered = +amtEnter;
   
    if(amtEnter.trim().length === 0 
    || amountEntered < 1 
    || amountEntered > 5 ){
      setValidAmount(false);
      return;
    }

    props.addItemToCart(amountEntered);
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
        {!validAmount && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}
