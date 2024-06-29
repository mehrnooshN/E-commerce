import Logo from './Logo';
import SearchForm from './SearchForm';
import HeaderCartButton from './HeaderCartButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faHome, faUser ,faClose} from '@fortawesome/free-solid-svg-icons';
import { faNavicon } from '@fortawesome/free-solid-svg-icons/faNavicon';
import { useState } from 'react';
import Nav from './Nav'
const Header = (props) =>
{    const[isOpen,setIsOpen]=useState(false);
   
    return(
     
        <div className="flex md:items-center justify-around flex-col relative md:static">
            <div className='flex flex-col md:flex-row bg-black w-full md:items-center justify-around h-52 md:h-24'>
            <Logo />
            <SearchForm />
            <div className='flex items-center gap-4 justify-around mt-8'>
            {
            isOpen ? <FontAwesomeIcon icon={faClose} size="2x" color='white' className='md:hidden' onClick={()=>setIsOpen(!isOpen)}/> :
                    <FontAwesomeIcon icon={faNavicon} size="2x" color='white' className='md:hidden' onClick={()=>setIsOpen(!isOpen)}/> 
                }
		    <HeaderCartButton />
            {/*
            <Link to="/Login" className='text-white'>
                <FontAwesomeIcon icon={faUser} size="2x" color='white'/>
              <span className='block text-xs'>Login</span>
            </Link>*/}
           
            </div>
              
          
            </div>
           <Nav isOpen={isOpen}/>
           </div>
              
        	
    )
}


export default Header;