import React, { useState } from 'react';
import './Counter.css';
function Counter() {
   const [counter, setCounter] = useState(0);
   const increment = () => setCounter(counter + 1);
   const decrement = () => setCounter(counter - 1);
   return (
      <div className='counter-container '>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <p >Count: {counter}</p>
      </div>
   );
}
export default Counter;