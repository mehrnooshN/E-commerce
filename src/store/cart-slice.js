import { createSlice } from '@reduxjs/toolkit';

 const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity: 0 ,
        totalPriceOfItems: 0 ,
        changed : false ,
}
,reducers:{
    replaceCart(state,action){
     state.items = action.payload.items;
     state.totalQuantity = action.payload.totalQuantity;
     state.totalPriceOfItems = action.payload.totalPriceOfItems;


    },
    addToCart(state,action){
        const newItem = action.payload;
        console.log(action.payload)
        const existingItem = state.items.find( item => item.itemId === newItem.id)
        state.totalQuantity +=1 ;
        state.changed = true;
        if(existingItem){
            existingItem.quantity += 1;
            existingItem.totalPrice += newItem.price ;
            state.totalPriceOfItems += existingItem.price;
        }
        else{
            state.items.push({
                itemId:newItem.id , 
                price :newItem.price ,
                quantity :1 ,
                totalPrice :newItem.price,
                name :newItem.title,
                image:newItem.image
            });
           // allOfItems += 1;
          state.totalPriceOfItems += action.payload.price;
        }
   
    },
    removeFromCart(state , action ){
        const id =action.payload;
        const existingItem = state.items.find(item => item.itemId === id)
        console.log(existingItem.price)
        state.totalQuantity -= 1;
        state.changed = true;
        if(existingItem.quantity === 1){
           state.items = state.items.filter( item => item.itemId !== id)
        }
        else{
            
            existingItem.quantity -=1;
        }
        state.totalPriceOfItems = state.totalPriceOfItems - existingItem.price;
    }
}
 })

 export const cartActions = cartSlice.actions;

 export default cartSlice;