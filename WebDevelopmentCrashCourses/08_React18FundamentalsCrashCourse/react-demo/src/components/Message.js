import { useState } from "react";




export const Message = () => {
    const [message, setMessage] = useState('Welcome visitor')
    return (
        // <h1>Welcome visitors!</h1>
        <div>
            <h1>{message}</h1>
            <button onClick={()=> setMessage('Thank you for subscribing! ')}>Subscribe</button>
        </div>
        
    );
  };
  
  // export default Message
  