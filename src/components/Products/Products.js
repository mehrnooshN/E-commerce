import { useEffect , useState , Fragment} from 'react';
import ProductItem from './ProuctItem/ProductItem';
import Paginate from '../Paginate';
import {getProducts} from '../../store/search-actions';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../store/search-slice';
const Products =(props) => {

const dispatch =useDispatch();

  
  /*sclice(0,3) means 1,2,3 page1*/
  /*slice (3,6) means 4,5,6 page2*/
const handlePageClick = (value) => {
   
   dispatch(searchActions.showProduct({currentPage:value.selected +1 , limit:3}))
   
}
  

   
useEffect(()=>{
   dispatch(getProducts({type:'Products'}))

   
 },[])


const MyProducts =useSelector((state) => state.search.currentPageItems);
const totalPages =useSelector((state) => state.search.pages)
const currentPage=useSelector((state) => state.search.currentPageOrder)
 const nextVisible = (currentPage !== totalPages);
 const previousVisible =(currentPage !== 1);
  return(
     <Fragment>
        <ul className="flex flex-wrap gap-x-20 justify-center gap-y-20 mt-24 mb-24">
       { 
          MyProducts.map( item => <ProductItem key={item.id} id={item.id} title={item.title} category={item.category} price={item.price} image={item.image} />)
       }
     </ul>
     {totalPages > 1  &&  <Paginate onPageChange={handlePageClick} totalPages={totalPages} currentPage={currentPage} nextVisible={nextVisible} previousVisible={previousVisible}/>}
    
     </Fragment>

   
    )
}


export default Products;