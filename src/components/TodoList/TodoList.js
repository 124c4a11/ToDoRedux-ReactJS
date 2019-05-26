import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

import './TodoList.css';


const ToDoList = ({ tasksList, removeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <TodoItem
        key={id}
        id={id}
        text={text}
        removeTask={removeTask}
        isCompleted={isCompleted}
      />
    ))}
  </ul>
);


ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func
}


ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {}
}


export default ToDoList;
