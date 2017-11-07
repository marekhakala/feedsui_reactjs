import PropTypes from "prop-types";
import React, { Component } from "react";
import CommentItemComponent from "./comment_item";

export default class CommentsList extends Component {
  static propTypes = { feedId: PropTypes.string, comments: PropTypes.array,
     removeComment: PropTypes.func.isRequired };

  render() {
    const { feedId, comments, removeComment } = this.props;
    return (
      <div
        className="feed-item-comments">
        <div
          className="comment-item-horizontal-line-first">
        </div>
        {
          comments.map((comment, id) => {
            return (
              <CommentItemComponent
                key={id}
                index={id}
                feedId={feedId}
                comment={comment}
                removeComment={removeComment} />
            )
          })
        }
      </div>
    );
  }
}
