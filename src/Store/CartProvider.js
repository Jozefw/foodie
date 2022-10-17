import CartContext from './CartContext';

CartProvider = (props) =>{

    const AddCartItemHandler = (item) =>{
        
    }
    const RemoveCartItemHandler = (id) =>{

    }

    const AllCartContexts = {
        items:[],
        totalAmount:0,
        addItem: AddCartItemHandler,
        removeItem:RemoveCartItemHandler 
    }

return <CartContext value={AllCartContexts}>
    {props.children}
</CartContext>
}

export default CartProvider;