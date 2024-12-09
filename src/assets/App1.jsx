import { useRef, useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    // Ensure the ref is ready before accessing its properties

      console.log("First rendering");
      ref.current.style.backgroundColor = "red"
    
  }, []); 

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
      <button ref={ref} onClick={() => setCount(count + 1)}>
        Increment{count}
      </button>
    </div>
  );
};

export default App;
