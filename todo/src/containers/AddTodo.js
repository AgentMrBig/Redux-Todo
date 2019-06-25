import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Input, AddTodoContainer } from '../components/ToDoListStyles';

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <AddTodoContainer>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <Input placeholder="What do you need todo?" ref={node => (input = node)} />
                <Button type="submit">Add Todo</Button>
            </form>
        </AddTodoContainer>
    )
}

export default connect()(AddTodo)