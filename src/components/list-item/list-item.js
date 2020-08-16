import React from 'react';
import './list-item.scss';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const ListItem = ({id, todo, completed, editClick, completeClick, removeClick}) => (
    <div className="list-item">
        <p>{completed ? <del>{todo}</del>: todo}</p>
        <div className="list-action">
            {
                !completed ?
                    <EditOutlinedIcon className="edit-todo" data-id={id} onClick={editClick} />
                :
                    null
            }
            
            <DoneOutlineOutlinedIcon className={completed ? "todo-complete done-todo" : "done-todo"} data-id={id} onClick={completeClick} />
            <DeleteOutlinedIcon className="delete-todo" data-id={id}  onClick={removeClick} />
        </div>
    </div>
)

export default ListItem;