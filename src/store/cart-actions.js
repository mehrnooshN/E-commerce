import { cartActions } from "./cart-slice"
import { supabase } from "../supabaseClient"


export  const sendCartData =(cartData) =>{
 
    return async (dispatch) => {

    const sendRequest= async () => {
    try {
    const {  error } = await supabase
    .from('shoppingitems')
    .insert(
      { 
       shoppingcartitems:cartData
      }
    )
      if(error) throw error;
    }
    catch(error){
     console.log(error.message)
     }
       } 

  await sendRequest();

    }

}




/*********************** */
export const getCartData = () =>{
  return async (dispatch) => {
   const getCart = async () => {
   const {data , error} = await supabase
  .from("shoppingitems").select("shoppingcartitems").order('id', { ascending: false })
 .limit(1)
  
  
  return{data , error};
   
  }

const response =await getCart();

if(response.data.length != 0){
 
  const cartData= await JSON.parse(response.data[0].shoppingcartitems);
  
  dispatch(cartActions.replaceCart(cartData));
 
}


}

}