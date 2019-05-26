import { ADD_TASK } from '../constants';


const tasks = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];


export default (state = tasks, { type, id, text, isCompleted }) => {
  switch(type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isCompleted
        }
      ];

    default:
      return state;
  }
};
