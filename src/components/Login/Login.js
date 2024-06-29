import { useState } from 'react';
import './Login.css';

const Login = () => {
    
    const[isUser,setIsUser]= useState(true);

    const switchUserStatus = (e) => {
        e.preventDefault();
       setIsUser((userStatus) => !userStatus)
    }
    return(

    <form className="p-10">
      <h1 className='m-4'>{isUser ? 'Login' : 'Sign Up'}</h1>
    <div>
        <input type="email" name="email" placeholder="Email" className='w-1/2 border-solid border-black border-2 m-4'/>
    </div>
    <div className="form-group">
        <input type="password" name="password" placeholder="Password" className='w-1/2 border-solid border-black border-2 m-4' />
    </div>
    <div className="form-group">
        <button className='bg-green-800 text-white w-32 rounded-md h-8 m-4'>{isUser ? 'Login' : 'Sign Up'}</button>
        <button onClick={switchUserStatus} className='text-purple-950 w-auto rounded-md h-auto m-4 p-4'>
            {isUser ? 'Dont have an acount? sign up':'I have an Acount! Log In'}
            </button>
    </div>
  
    </form>
    )
}

export default Login;