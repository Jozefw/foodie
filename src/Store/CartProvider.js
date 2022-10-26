import React,{useReducer} from 'react';
import CartContext from './CartContext';

// const ACTIONS = {
//     ADD_CART_ITEM: 'add',
//     REMOVE_CART_ITEM: 'remove'
// }

const defaultCartState = {
    items:[],
    totalAmount:0, 
}

const cartReducer = (state,action) =>{
    switch(action.type){
        case 'add'
    }
    return defaultCartState;
}

const CartProvider = (props) =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const AddCartItemHandler = (item) =>{
        dispatchCartAction({type:'ADD_CART_ITEM',item:item})
    }
    const RemoveCartItemHandler = (id) =>{
        dispatchCartAction({type:'REMOVE_CART_ITEM',id:id})
    }
    const AllCartContexts = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: AddCartItemHandler,
        removeItem:RemoveCartItemHandler 
    }

return <CartContext.Provider value={AllCartContexts}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;