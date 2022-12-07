import React from "react";
import validation from './validation.js';


export default function Form(props){
    const [userData, setUserData] = React.useState({
        username:"", password:""
    })

    const [errors, setErrors] = React.useState({
        username:"", password:""
    })

    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})

        setErrors(validation({...userData, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }

    return(<div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" onChange={handleInputChange} id="username" value={userData.username} placeholder="Ingrese el Usuario..." />
        <p>{errors.username}</p>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleInputChange} id="password" value={userData.password}/>
        <p>{errors.password}</p>
        
        <input type="submit"/>
        </form>
    </div>)
}