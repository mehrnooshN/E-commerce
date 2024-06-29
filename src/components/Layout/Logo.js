import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/search-actions';

const Logo =() =>
{  const dispatch =useDispatch();
 
    return(
        <div className="header-logo">
        <Link to="/" className="logo" onClick={() => {dispatch(getProducts({type:'Products'}))}}>
        <img src={logo} alt="" />
        </Link>
        </div>
    )
}


export default Logo;