import { combineReducers } from "redux-immutable";
import FeedsReducer from "./feeds";
import FeedDetailReducer from "./feed_detail";

export default combineReducers({ FeedsReducer, FeedDetailReducer });
