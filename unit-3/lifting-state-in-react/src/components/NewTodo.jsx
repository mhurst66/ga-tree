import { useState } from "react"

const NewTodo = (props) => {
    const [newTodo, setNewTodo] = useState('')
    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">Todo: </label>
            <input 
                type="text"
                name="todoInput" 
                id="todoInput" 
                onChange={handleChange}
                value={newTodo}
            />
            <button type="submit">Create To-do</button>
        </form>
    )
}

export default NewTodo