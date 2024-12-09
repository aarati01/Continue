import { useRef } from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
   const a=useRef(0)
  useEffect(()=>{
    a.current=a.current+1
  console.log(`reRendaring the value of a is ${a.current}`)
  });

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer is started");
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timer);
      console.log("Timer stopped");
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App