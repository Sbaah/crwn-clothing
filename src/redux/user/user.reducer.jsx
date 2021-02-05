// This will hold the state of the current user ...
// Represents a state object which can be a last state, current state or the initial state
//

import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

// if state is ever undefined then it will use the `Initial_State`
// switch statement
const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default useReducer;
