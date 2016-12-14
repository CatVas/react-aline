import { CONTACT_MSG_RESET, CONTACT_MSG_SET } from '../actions/types';


export const defaultState = {
  resetAfterMs: 0,
  text: '',
};

export default function(state = defaultState, action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case CONTACT_MSG_RESET:
      return Object.assign({}, defaultState);

    case CONTACT_MSG_SET:
      return Object.assign({}, state, action.payload);
  }

  return state;
}
