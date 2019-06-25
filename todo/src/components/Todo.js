import React from 'react'
import PropTypes from 'prop-types'
import { LI } from './ToDoListStyles';

const Todo = ({ onClick, completed, text }) => (
    <LI
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            backgroundColor: completed ? 'darkgray' : 'lightskyblue'
        }}
    >
        {text}
    </LI >
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo