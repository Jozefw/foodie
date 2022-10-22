import CartContext from './CartContext';

const CartProvider = (props) =>{
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

return <CartContext.Provider value={AllCartContexts}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;