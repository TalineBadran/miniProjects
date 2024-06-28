import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function Counter({initialCount}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
  	console.log('ahmad')
  }, [count]);
  
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;
