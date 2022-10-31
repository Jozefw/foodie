import React,{useReducer} from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items:[],
    totalAmount:0, 
}

const cartReducer = (state,action) =>{
    if(action.type = 'ADD')    {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) =>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

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