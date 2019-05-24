import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';


const ToDoItem = ({ text, isCompleted }) => (
  <li className="todo-item">
    <span className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <span className="fas fa-times" />
  </li>
);


ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
};


ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
};


export default ToDoItem;
