import './SearchForm.css';
import { useDispatch , useSelector} from 'react-redux';
import {getProducts} from '../../store/search-actions';
import { useState } from 'react';
import searchSlice, { searchActions } from '../../store/search-slice';

const SearchForm = () =>  {
const[inputValue,setInputValue]=useState('');
const[sortListVisible,setSortListVisible]=useState(false);
const searchItems = useSelector((state) => state.search.items)
const dispatch = useDispatch();
const getSearchResultHandler =(e) =>{
   setSortListVisible(true)
   setInputValue(e.target.value)
   dispatch(getProducts({type:'sortProducts', payload:e.target.value}))
}
const submitSearchResultHandler = (e) =>{
    e.preventDefault();
    setSortListVisible(false)
    dispatch(searchActions.showProduct({currentPage:1 , limit:3}))
    setInputValue('')
    
}
const selectInputValueHandler =(value)=>{
    setInputValue(value)
    dispatch(getProducts({type:'sortProducts', payload:value}))
}

return(
    <div className="header-search">
    <form className='flex md:w-full' onSubmit={submitSearchResultHandler}>
    <div>
    <input className="input w-72 md:w-96" placeholder="Search here" onChange={getSearchResultHandler} value={inputValue}/>
    <ul className='bg-slate-300 max-h-64 w-96 overflow-auto z-50 absolute rounded-md'>
        { sortListVisible && searchItems.map((item) => <li key={item.id} className='p-2 border-b-gray-900 border-b-2 cursor-pointer hover:bg-slate-400' onClick={() => {selectInputValueHandler(item.title)}}>{item.title}</li>)
           }
    </ul>
    </div>
    <button className="search-btn">search</button>
   
    </form>
</div>
)

}

export default SearchForm;