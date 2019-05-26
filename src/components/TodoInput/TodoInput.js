import React from 'react';
import PropTypes from 'prop-types';

import './TodoInput.css';


const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder="Click to add task"
      className="todo-input"
    />
  </div>
);


ToDoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
}


ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: ''
}


export default ToDoInput;
