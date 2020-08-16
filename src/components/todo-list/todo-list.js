import React from 'react';
import './todo-list.scss';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import List from '../list/list';
import TodoModal from '../modal/modal';
import AddTodo from '../add-todo/add-todo';
import InputBox from '../input-box/input-box';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            lastID: 0,
            addTodo: '',
            searchTodo: '',
            todoModal: false,
            todoList: [
                {
                    id: 11,
                    todo: "Eat Healthy",
                    completed: false
                },
                {
                    id: 12,
                    todo: "Sleep Healthy",
                    completed: false
                }
            ],
        }
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            todoModal: !prevState.todoModal,
            editID: '',
            addTodo: '',
        }))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAddTodo = () => {
        let updatedTodoList;
        console.log(this.state.editID)
        if(+this.state.editID) {
            updatedTodoList = this.state.todoList.map(item => {
                console.log(item.id)
                if(item.id === +this.state.editID) {
                    item.todo = this.state.addTodo;
                }
                return item;
            })
        } else {
            const updatedTodo = {
                id: this.state.lastID + 1,
                todo: this.state.addTodo,
                completed: false
            }
            updatedTodoList = [updatedTodo, ...this.state.todoList];
        }

        this.setState(prevState => ({
            lastID: prevState.lastID + 1,
            addTodo: '',
            searchTodo: '',
            todoModal: !prevState.todoModal,
            todoList: [...updatedTodoList],
            editID: ''
        }))
    }

    handleEditTodo = (event) => {
        const element = event.target.closest('svg');
        if(element) {
            const id = element.getAttribute('data-id');
            const editTodo = this.state.todoList.filter(ele => ele.id === +id)[0];
            this.setState({
                todoModal: true,
                addTodo: editTodo.todo,
                editID: id
            })
        }
    }

    handleCompleteClick = (event) => {
        const element = event.target.closest('svg');
        if(element) {
            const id = +element.getAttribute('data-id');

            const updatedTodo = this.state.todoList.map(item => {
                if(item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            });

            this.setState({
                todoList: updatedTodo
            });
        }
    }
    
    handleRemoveTodo = (event) => {
        const element = event.target.closest('svg');
        if(element) {
            const id = +element.getAttribute('data-id');
            const updatedTodo = this.state.todoList.filter(item => item.id !== id);
            this.setState({
                todoList: updatedTodo
            });
        }
    }

    render() {
        const updatedTodoList = this.state.todoList.filter( ele => ele.todo.toLowerCase().includes(this.state.searchTodo.toLowerCase()));
        return (
            <div className="todo-wrapper">
                <div className="todo-list">
                    <h1 className="title">Todo List</h1>
                    <div className="search-container">
                        <InputBox type="search" placeholder="Search Todo" name="searchTodo" value={this.state.searchTodo} onChange={this.handleChange} />
                    </div>
                    <AddCircleOutlineRoundedIcon className='add-todo' onClick={this.toggleModal} />
                    {updatedTodoList.length ? <List list={updatedTodoList} edit={this.handleEditTodo} remove={this.handleRemoveTodo} complete={this.handleCompleteClick} /> : null}
                </div>
                { this.state.todoModal ? 
                    <TodoModal clicked={this.toggleModal}>
                        <AddTodo clicked={this.handleAddTodo} todo={this.state.addTodo} handleChange={this.handleChange} />
                    </TodoModal> :
                    null
                }
            </div>
        )
    }
}

export default TodoList