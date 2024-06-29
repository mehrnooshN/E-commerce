import { Outlet } from 'react-router-dom';
import Header  from './Layout/Header';
import Footer from './Layout/Footer';
import { Fragment } from 'react';
import BottomNavigation from './Layout/BottomNavigation';
import Products from './Products/Products';
import Nav from './Layout/Nav';

const RootLayout = () => {
   
    return (
        <Fragment>
        <Header />
    
         <Outlet />
          <Footer/>
        
       </Fragment>
    )
         

       
    
}
export default RootLayout;