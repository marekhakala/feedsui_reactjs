import immutable from "immutable";
import { handleActions } from "redux-actions";
import { GET_FEED_DATA,
  UPDATE_COMMENTS_ADD,
  UPDATE_COMMENTS_REMOVE } from "../actions/feed";

const FeedDetailReducer = handleActions({
  [GET_FEED_DATA]: {
    next (state, action) {
      return state.withMutations(newState => {
          newState.setIn(["isLoaded"], true)
            .setIn(["feed"], action.payload)
            .setIn(["comments"], action.payload.comments)
      });
    },
    throw (state) {
      return state.withMutations(newState => newState.setIn(["isLoaded"], false));
    }
  },
  [UPDATE_COMMENTS_ADD]: {
    next (state, action) {
      return state.withMutations(newState => newState.setIn(["feed"],
       action.payload).setIn(["comments"], action.payload.comments));
    },
    throw (state) {
      return state;
    }
  },
  [UPDATE_COMMENTS_REMOVE]: {
    next (state, action) {
      return state.withMutations(newState => newState.setIn(["feed"],
       action.payload).setIn(["comments"], action.payload.comments));
    },
    throw (state) {
      return state;
    }
  },
}, immutable.fromJS({ isLoaded: false }));

export default FeedDetailReducer;
