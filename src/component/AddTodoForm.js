import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoAction } from './../store/todosActions';

export default function AddTodoForm() {
    const  dispatch = useDispatch()
    const input = useRef(null)

    const handelSubmit = (e) => {
        console.log(input)
        e.preventDefault()
        dispatch(addTodoAction(input.current.value))
        input.current.value = ""
        input.current.focus()
    }
    return <form onSubmit={handelSubmit} className="form-inline" >
         <div className="form-group">
            <input type="text" placeholder="Tache a faire" ref={input} className="form-control"/>
         </div>
        <button className="btn btn-primary">Ajouter</button>
    </form>
}
