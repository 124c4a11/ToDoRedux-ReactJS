import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../actions';

import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import Footer from '../../components/Footer';

import './Todo.css';


class Todo extends Component {
  state = {
    taskText: '',
    activeFilter: 'all'
  }

  onInputChange = ({ target: { value }}) => {
    this.setState({ taskText: value });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;

      addTask(Date.now(), taskText, false);

      this.setState({ taskText: '' });
    }
  };

  render() {
    const { taskText, activeFilter } = this.state;
    const { tasks } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <TodoInput
          value={taskText}
          onChange={this.onInputChange}
          onKeyPress={this.addTask}
        />
        {isTasksExist && <TodoList tasksList={tasks} />}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}


export default connect((state) => ({
  tasks: state.tasks
}), { addTask })(Todo);
