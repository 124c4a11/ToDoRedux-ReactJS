import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addTask,
  removeTask,
  completeTask,
  changeFilter
} from '../../actions';

import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import Footer from '../../components/Footer';

import './Todo.css';


class Todo extends Component {
  state = {
    taskText: ''
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

  filterTasks = (tasks, activeFilter) => {
    switch(activeFilter) {
      case 'active':
        return tasks.filter((task) => !task.isCompleted);

      case 'completed':
        return tasks.filter((task) => task.isCompleted);

      default:
        return tasks;
    }
  };

  getActiveTasksAmount = (tasks) => {
    return tasks.filter((task) => !task.isCompleted).length;
  };

  render() {
    const { taskText } = this.state;
    const { tasks, filter, removeTask, completeTask, changeFilter} = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filter);

    return (
      <div className="todo-wrapper">
        <TodoInput
          value={taskText}
          onChange={this.onInputChange}
          onKeyPress={this.addTask}
        />
        {isTasksExist && <TodoList
          tasksList={filteredTasks}
          removeTask={removeTask}
          completeTask={completeTask}
        />}
        {isTasksExist && <Footer
          amount={this.getActiveTasksAmount(tasks)}
          activeFilter={filter}
          changeFilter={changeFilter}
        />}
      </div>
    );
  }
}


export default connect(
  ({ tasks, filter }) => ({
    tasks,
    filter
  }),
  { addTask, removeTask, completeTask, changeFilter }
)(Todo);
