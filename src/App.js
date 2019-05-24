import React, { Fragment } from 'react';

import Todo from './containers/Todo';
import Title from './components/Title';


const App = () => (
  <Fragment>
    <Title title="ToDo App" />
    <Todo />
  </Fragment>
);


export default App;
