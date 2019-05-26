import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';


const ToDoItem = ({ id, text, isCompleted, removeTask }) => (
  <li className="todo-item">
    <span className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <span onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);


ToDoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeItem: PropTypes.func
};


ToDoItem.defaultProps = {
  id: 0,
  text: '',
  isCompleted: false,
  removeTask: () => {}
};


export default ToDoItem;
