
import { cartActions } from '../../../store/cart-slice';
import './ProductItem.css';
import ProductItemForm from './ProductItemForm';
import { useDispatch,useSelector } from 'react-redux';



const ProductItem = (props) =>
{  
const { id , title , category , price , image } =props;
const dispatch = useDispatch();
const addToCartHandler = (event) =>
  { event.preventDefault();
    dispatch(cartActions.addToCart({
      id: id,
      price: price ,
      title: title,
      image:image
    }))
  }


  


   
 
    return(
        <li className="group w-1/2 md:w-1/5 sm:w-1/4 relative">
        <div className='relative z-10 border-2 border-neutral-300 hover:border-red-500 '>
        <div className="flex items-center justify-center h-48 p-8">
          <img src={props.image} className='w-1/2 h-full'/>
        </div>
        <div className="bg-white h-48 text-center p-2">
            <p className="text-gray-600">{props.category}</p>
            <h3 className="p-2"><a href="#">{props.title}</a></h3>
            <h4 className="">{props.price} $</h4>
        </div>
        </div>
      <ProductItemForm addToCart={addToCartHandler}/>
    </li>
    )
}


export default ProductItem;