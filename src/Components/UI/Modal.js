import React,{Fragment} from 'react';
import styles from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>
}
const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
    
}
 const Modal = (props) =>{
  return (
    <Fragment>
        <Backdrop></Backdrop>
        <ModalOverlay></ModalOverlay>
    </Fragment>
  )
}
export default Modal;