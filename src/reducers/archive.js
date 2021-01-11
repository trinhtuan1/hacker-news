import { STORY_ARCHIVE } from '../constants/actionTypes';

const INITIAL_STATE = [];

const applyArchiveStory = (state, action) => {
  return [ ...state, action.id ];
};

const archiveReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STORY_ARCHIVE: {
      return applyArchiveStory;
    }
    default: return state;
  }
};

export default archiveReducer;