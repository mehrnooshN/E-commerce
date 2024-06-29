
import CartItem from "./CartItem";
import './Cart.css';
import { useSelector } from "react-redux";

const Cart = (props) => {
const shoppingItems = useSelector( state => state.cart.items);
const totalCost= useSelector( state => state.cart.totalPriceOfItems);
const totalQuantity =useSelector(state => state.cart.totalQuantity)

return(

	<div className="cart">
       

        <div className="cart-items w-4/5">
		{totalQuantity !== 0 && <ul className="cart-list">
			{shoppingItems.map((item) => <CartItem key={item.itemId} id={item.itemId} title={item.name} price={item.price} amount={item.quantity} image={item.image}/>)}
            </ul>}
		{
			totalQuantity === 0 && <p className="bg-slate-500 p-8 rounded-md">No Items added yet.....</p>
		}	

			<div className="cart-summary">
			   {/* <h5 className="mt-5">SUBTOTAL: {totalCost} $</h5>*/ }
			    
			</div>
                 
			

        </div>
	</div>
							
)

}

export default Cart;