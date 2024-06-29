 import ReactPaginate from "react-paginate";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faBackward , faForward} from '@fortawesome/free-solid-svg-icons'

 const Paginate = (props) =>{
   return(
        
        <ReactPaginate 
        previousLabel={props.previousVisible && 
        <span className="flex items-center justify-center w-10 h-10 rounded-md bg-black mr-4">
        <FontAwesomeIcon icon={faBackward} className="text-white"/></span>}
        nextLabel={props.nextVisible && 
        <span className="flex items-center justify-center w-10 h-10 rounded-md bg-black ">
          <FontAwesomeIcon icon={faForward} className="text-white"/></span>}
        breakLabel={<span className="mr-4 mb-24"> ... </span>}
        pageCount={props.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block hover:bg-red-600 hover:text-white w-10 h-10 mr-4 flex items-center justify-center rounded-md"
        forcePage={props.currentPage - 1}
        activeClassName="text-white bg-red-600"
        onPageChange={props.onPageChange}
       />
    )
 }

 export default Paginate;