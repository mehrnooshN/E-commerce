import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import './CartItem.css';

const CartItem = (props) =>
{   
  
  const{id , title , price ,amount,image}=props;
    const dispatch = useDispatch()
    const removeHandler = () => {
     
    dispatch(cartActions.removeFromCart(id))

    }
    const addHandler =() =>{
      dispatch(cartActions.addToCart({
        id: id,
        price: price ,
        title: title,
        image:image
      }))
    }

    return(
        <li className="product-widget border-b-4 p-4 hover:bg-slate-500 flex-col md:flex-row cursor-pointer bg-slate-200">
   

        <div className="product-body flex-col md:flex-row">
           <img src={props.image} alt="product-img" className="w-20 h-20"/>
           
            <h3 className="product-name"><a href="#">{props.title}</a></h3>
            <h4 className="product-price"><span>{props.amount}*</span>{props.price} $</h4>
        </div>
        
       
        <div>
          <button onClick={addHandler} className="w-8 h-8 bg-green-600 text-white rounded-md m-4">+</button>
          <button onClick={removeHandler} className="w-8 h-8 bg-red-600 text-white rounded-md m-4">-</button>
        </div>
     </li>
    )
}

export default CartItem;