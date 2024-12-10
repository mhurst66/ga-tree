import { useState } from 'react'
import './App.css'
import { use } from 'react';

const App = () => {
  const [mode, setMode] = useState('light')

  const handleMode = (modeValue) => {
    console.log(modeValue)
    setMode(modeValue)
  }

// use 'className' instead of 'class' to apply styles in react
  return (
    <>
      <div className={mode}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
      </div>
    </>
  );
};

export default App






// const [user, setUser] = useState({
//   firstName: 'Matt',
//   lastName: 'Hurst',
//   hasPets: true,
//   age: 33
// })
// console.log(`Hello, my name is ${user.firstName + ' ' + user.lastName}, I am ${user.age} years old, and I ${user.hasPets ? 'have pets' : 'do not have pets'}.`)
/* <p>Hello, my name is {user.firstName + ' ' + user.lastName}, I am {user.age} years old, and I {user.hasPets ? 'have pets' : 'do not have pets'}.</p> */

// console.log('Our isDarkMode state value is:', isDarkMode)

// placeholder function for handling mode changes
// we'll implement the functionality in the next step
  // const handleDarkMode = () => {
  //   // TODO: implement the logic to handle a user clicking the dark mode button
  //   console.log('Dark Mode!')
  //   setIsDarkMode(true)
  // };

  // const handleLightMode = () => {
  //   // TODO: implement the logic to handle a user clicking the light mode button
  //   console.log('Light Mode!')
  //   setIsDarkMode(false)
  // };