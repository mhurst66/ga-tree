import { useState } from 'react'
import './App.css'
// import IncrementButton from './components/IncrementButton';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([])

  // const addTodo = (newTodo) => {
  //   const updatedTodos = [...todos, newTodo]
  //   console.log(updatedTodos)
  //   setTodos(updatedTodos)
  // }
  // REFACTORED
  const addTodo = (newTodo) => {
    console.log([...todos, newTodo])
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </>
  );
};



export default App

// COUNT BUTTON
// const App = () => {
//   const [count, setCount] = useState(0)

//   const addOne = () => {
//     setCount(count + 1)
//   }

//   return (
//     <>
//       <h1>Hello world!</h1>
//       <p>Count: {count}</p>
//       <IncrementButton addOne={addOne} />
//     </>
//   );
// };