const INITIAL_STATE = [
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

const storyReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: return state;
  }
};

export default storyReducer;