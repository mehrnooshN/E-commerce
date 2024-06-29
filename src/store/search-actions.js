import { searchActions } from "./search-slice";

/*export const getProductBySearch = (action) =>{
    return async (dispatch) => {
        console.log(action.type)
        console.log(action.payload)
       
   const getProduct = async() =>{
        if(search.searchText !== ''){
            const response = await fetch('https://fakestoreapi.com/products');
            const data =await response.json();
            const searchResult =await data.filter((item) => item.title.toLowerCase().includes(search.searchText.toLowerCase()));
            return searchResult;
        }
        else{
            return [];
        }
      
        }
        const searchData =await getProduct();
        dispatch(searchActions.replaceSearch({...search,items:searchData}))
       
    }
}*/


// fetchTodoById is the "thunk action creator"
export const getProducts = (action) => {
    // fetchTodoByIdThunk is the "thunk function"
    return async(dispatch) => {
     const fetchProducts = async() =>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data =await response.json();
       
          if(action.type === 'sortProducts'){
            const searchResult =await data.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
            return searchResult;
          }
          if(action.type === 'Products'){
            return data;
           
          }
          if(action.type === 'Category'){
            //alert(action.payload)
           
            const categoryResult = await data.filter((item) => item.category === action.payload)
            return categoryResult;
           
          }
        
        }
      const items= await fetchProducts();
      dispatch(searchActions.saveProduct(items))
      if(action.type === 'Products'  || action.type === 'Category'){
       dispatch(searchActions.showProduct({currentPage:1 , limit:3}))
      }

    }
  }