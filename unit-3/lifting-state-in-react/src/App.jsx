import { useState } from 'react'
import './App.css'
import IncrementButton from './components/IncrementButton';

const App = () => {
  const [count, setCount] = useState(0)

  const addOne = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Hello world!</h1>
      <p>Count: {count}</p>
      <IncrementButton addOne={addOne} />
    </>
  );
};

export default App
