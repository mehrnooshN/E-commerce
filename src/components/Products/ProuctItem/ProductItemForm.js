import './ProductItemForm.css';
import './ProductItem.css'
const ProductItemForm = (props)  =>
{

return(
    <form className='bg-zinc-900 h-24 flex items-center justify-center absolute bottom-0 w-full group-hover:-bottom-24 z-0 transition-all duration-300' >
    <button className="bg-red-700 h-8 text-white w-32 flex item-center justify-center rounded-3xl border-3 border-red-700 hover:bg-white hover:text-red-700 hover:w-48 transition-all duration-300 p-2 hover:font-extrabold" onClick={props.addToCart}>add to cart</button>
    </form>
)

}
 export default ProductItemForm;