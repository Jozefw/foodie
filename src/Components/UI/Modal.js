import React,{Fragment} from 'react';
import ReactDom from 'react-dom';
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
    const portalElement = document.GetElementById('overlays');
  return (
    <Fragment>
        {ReactDom.createPortal(<Backdrop></Backdrop>,portalElement)}
        {ReactDom.createPortal( <ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
       
    </Fragment>
  )
}
export default Modal;