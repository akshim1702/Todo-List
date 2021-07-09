import React from 'react'
// import { 
//     Link
//    }from "react-router-dom";
export const TodoItem = ({ todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={ ()=> {onDelete(todo)}}>Delete</button>
            {/* <button type="submit" className="mx-3 btn"><Link className="btn btn-sm btn-primary" to='/update'>Update</Link></button> */}
        </div>
        <hr/>
        </>
    )
}