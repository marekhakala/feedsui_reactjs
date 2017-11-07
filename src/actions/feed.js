import { feedsApi } from "../common/config";
import { createAction } from "redux-actions";

export const GET_FEED_DATA = "GET_FEED_DATA";
export const UPDATE_COMMENTS_ADD = "UPDATE_COMMENTS_ADD";
export const UPDATE_COMMENTS_REMOVE = "UPDATE_COMMENTS_REMOVE";

export const getFeedData = createAction(GET_FEED_DATA);
export const updateCommentsAdd = createAction(UPDATE_COMMENTS_ADD);
export const updateCommentsRemove = createAction(UPDATE_COMMENTS_REMOVE);

export const getFeed = (feedId) => {
  return (dispatch) => {
    return feedsApi.get(feedId).then(
      (success) => dispatch(getFeedData(success.data)),
      (error) => dispatch(getFeedData(error))
    );
  };
};

export const addComment = (feedId, body) => {
  return (dispatch) => {
    return feedsApi.post(feedId + "/comments", {
      text: body.commentText, person:
      { firstName: body.firstName, lastName: body.lastName }
    }).then((success) => feedsApi.get("/" + feedId),
      (err) => dispatch(updateCommentsAdd(err)))
      .then((success) => dispatch(updateCommentsAdd(success.data)),
       (err) => dispatch(updateCommentsAdd(err)));
  };
};

export const removeComment = (feedId, commentId) => {
  return (dispatch) => {
    return feedsApi.delete(feedId + "/comments/" + commentId)
    .then((success) => feedsApi.get("/" + feedId),
     (err) => dispatch(updateCommentsRemove(err)))
    .then((success) => dispatch(updateCommentsRemove(success.data)),
     (err) => dispatch(updateCommentsRemove(err)));
  };
};
