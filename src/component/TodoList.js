import React, { useCallback } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import { toggleTodoAction, deletTodoAction } from '../store/todosActions'
import { filterTodosSelector, todosSelector } from '../store/todosSelector'


function TodoItem({todo , onToggle, onDelete}){
    return <li className="list-group">
        <label className="list-group-item">
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)}  className="form-checked"/>
            {todo.title}
            <button onClick={() => onDelete(todo)} className="btn btn-danger ml-1 ">x</button>
        </label>
    </li>
}

export   function TodoList({todos , onToggle, onDelete}) {
    
    return <ul className="mt-3">
        {todos.map(todo => <TodoItem  todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete}/>)}
    </ul>
}


export function TodoListStore (){
    const todos = useSelector(filterTodosSelector)
    const  dispatch = useDispatch()
    const onToggle = useCallback((todo) => {
        dispatch(toggleTodoAction(todo))
    }, [])
    const onDelete = useCallback((todo) => {
        dispatch(deletTodoAction(todo))
    }, [])

    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
}
