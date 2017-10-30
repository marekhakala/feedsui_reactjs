import { feedsApi } from "../common/config";
import { createAction } from "redux-actions";

export const GET_FEED_DATA = "GET_FEED_DATA";

export const getFeedData = createAction(GET_FEED_DATA);

export const getFeed = (feedId) => {
  return (dispatch) => {
    return feedsApi.get(feedId).then(
      (success) => dispatch(getFeedData(success.data)),
      (error) => dispatch(getFeedData(error))
    );
  };
};
