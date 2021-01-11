import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const stories = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react',
    author: 'Jordan Walke',
    num_comments: 4,
    points: 3,
    objectId: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.com',
    author: 'Abramov',
    num_comments: 5,
    points: 2,
    objectId: 1
  }
];

ReactDOM.render(
  <App stories={ stories } onArchive={ () => {} } />,
  document.getElementById('root')
);
