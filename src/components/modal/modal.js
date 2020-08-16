import React from 'react';
import './modal.scss';

const TodoModal = ({children, clicked }) => (
    <div className="todo-modal">
        <div className="todo-modal-content">
            <span className="close" onClick={clicked}>&times;</span>
           {children}
        </div>
    </div>
)

export default TodoModal;