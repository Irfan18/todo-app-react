import React from 'react';
import ListItem from '../list-item/list-item';
import './list.scss';

const List = ({list, edit, remove, complete}) => {
    return (
        <div className="list">
            {
                list.map((ele => <ListItem key={ele.id} {...ele} editClick={edit} removeClick={remove} completeClick={complete} />))
            }
        </div>
    )
}

export default List;