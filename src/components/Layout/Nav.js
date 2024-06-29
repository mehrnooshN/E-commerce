import { Link } from "react-router-dom";
import { getProducts } from "../../store/search-actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faHome, faUser ,faClose} from '@fortawesome/free-solid-svg-icons';
import { faNavicon } from '@fortawesome/free-solid-svg-icons/faNavicon';
import { useState } from 'react';
const categories =[
   "women's clothing",
   "men's clothing",
   "jewelery",
   "electronics"]
const Nav =(props) =>{
    const dispatch =useDispatch();

    const categoryHandler =(item) =>{
        
         dispatch(getProducts({type:'Category', payload:item}))
    }
  
    return(
        
       
        <ul className={`flex flex-col md:flex-row gap-8 bg-black text-white md:bg-white md:text-black w-72 md:w-full h-72 md:h-24 absolute mt-2 md:static top-48 z-20 ${ props.isOpen ? 'left-0':'-left-72'}`}>
            <li className="p-2"><Link to="/" onClick={() => {dispatch(getProducts({type:'Products'}))}}>Home</Link></li>
            {
                categories.map((item) => <li className="cursor-pointer p-2" onClick={() =>{categoryHandler(item)}}>{item}</li>)
            }
         
        </ul>
        
       
    )
}

export default Nav;