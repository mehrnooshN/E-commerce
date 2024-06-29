import { createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name:'search',
    initialState:{
        items :[],
        currentPageItems:[],
        pages:0,
        currentPageOrder:1
       
    }, 
    reducers:{
        /*take all items and save (items)*/ 
        saveProduct(state,action){
          state.items=action.payload;
         
          
        },
        /*take the order of the currentPage and save (currentPageItems)*/
        showProduct(state,action){
           const firstPoint=(action.payload.currentPage-1) * action.payload.limit;
           const endPoint=(action.payload.currentPage * action.payload.limit);
           state.currentPageItems =state.items.slice(firstPoint,endPoint);
           state.pages=Math.ceil(state.items.length / action.payload.limit);
           state.currentPageOrder=action.payload.currentPage;
        }
    }

})
export const searchActions = searchSlice.actions;
export default searchSlice;