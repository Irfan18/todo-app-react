import React from 'react';
import './add-todo.scss';

import InputBox from '../input-box/input-box';
import Button from '../button/button';

const AddTodo = ({ handleChange, todo, clicked }) => (
    <div className="add-todo">
        <h1 className="title">Add Todo</h1>
        <div className="add-input-container">
            <InputBox type="text" placeholder="Add Todo" name="addTodo" onChange={handleChange} value={todo} />
        </div>
        <Button onClick={clicked}>Add</Button>
    </div>
)

export default AddTodo;