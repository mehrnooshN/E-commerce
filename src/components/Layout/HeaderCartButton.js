import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './HeaderCartButton.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderCartButton = ( ) =>
{   const numberOfCartItem =useSelector( state => state.cart.totalQuantity)

    return(
        <div className="header-cart">
           <Link to="/ShoppingCart" className="Header-cart-button">
           <FontAwesomeIcon icon={faCartShopping} size="2x" color='white'/>
           </Link>
            <div className="quantity flex items-center justify-center">{numberOfCartItem}</div>
        
        </div>
    )
}

export default HeaderCartButton;