import { feedsApi } from "../common/config";
import { createAction } from "redux-actions";

export const GET_FEEDS_DATA = "GET_FEEDS_DATA";
export const SET_CURRENT_FEED = "SET_CURRENT_FEED";

export const getFeedsData = createAction(GET_FEEDS_DATA);
export const setCurrentFeed = createAction(SET_CURRENT_FEED);

export const getFeeds = () => {
  return (dispatch) => {
    return feedsApi.get("")
    .then((success) => dispatch(getFeedsData(success.data)),
      (err) => dispatch(getFeedsData(err)));
  };
};

export const setFeed = (feedId) => {
  return (dispatch) => dispatch(setCurrentFeed(feedId));
};
