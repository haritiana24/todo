import React from 'react'
import { connect } from 'react-redux'
import { filterSelector } from '../store/filterSelectors';
import { setFilterAction } from './../store/filterActions';

export  function TodoFilter({value , onChange}) {
    return (
        <div className="filter">
            <button disabled={value === null} onClick={() => onChange(null)} className={value === null ? "btn btn-secondary" : "btn"}>Aucune filter</button>
            <button disabled={value === true} onClick={() => onChange(true)} className={value === true ? "btn btn-success" : "btn"}>complété</button>
            <button disabled={value === false} onClick={() => onChange(false)} className={value === false ? "btn btn-primary " : "btn"}>A faire </button>
        </div>
    )
}

export const  TodoFilterStore = connect(
    state => ({
        value : filterSelector(state)
    }),
    dispatch => ({
        onChange : (value) => dispatch(setFilterAction(value))
    })
)(TodoFilter)
