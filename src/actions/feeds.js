import { feedsApi } from "../common/config";
import { createAction } from "redux-actions";

export const GET_FEEDS_DATA = "GET_FEEDS_DATA";

export const getFeedsData = createAction(GET_FEEDS_DATA);

export const getFeeds = () => {
  return (dispatch) => {
    return feedsApi.get("")
    .then((success) => dispatch(getFeedsData(success.data)),
      (err) => dispatch(getFeedsData(err)));
  };
};
