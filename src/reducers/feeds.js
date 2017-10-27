
import immutable from "immutable";
import { GET_FEEDS_DATA } from "../actions/feeds";
import { handleActions } from "redux-actions";

const FeedsReducer = handleActions({
  [GET_FEEDS_DATA]: {
    next (state, action) {
      return state.withMutations(newState => newState.setIn(["isLoaded"], true)
      .setIn(["feeds"], action.payload));
    },
    throw (state) {
      return state.withMutations(newState => newState.setIn(["isLoaded"], false));
    }
  }
}, immutable.fromJS({ isLoaded: false }));

export default FeedsReducer;
