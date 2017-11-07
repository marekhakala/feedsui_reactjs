import PropTypes from "prop-types";
import React, { Component } from "react";

import CommentFormComponent from "./comment_form";
import CommentsListComponent from "./comments_list";
import FeedItemContentComponent from "./feed_item_content";

export default class FeedItemComponent extends Component {
  static propTypes = { feed: PropTypes.object, comments: PropTypes.array,
    addComment: PropTypes.func.isRequired, removeComment: PropTypes.func.isRequired,
    detailMounted: PropTypes.func.isRequired };

  componentDidMount() {
    this.props.detailMounted();
  }

  render() {
    const { feed, comments, addComment, removeComment } = this.props;
    return (
      <div>
        <FeedItemContentComponent
          feedText={feed.text}
          likesCount={feed.likesCount}
          commentsCount={feed.commentsCount}
          person={feed.person} />
        <div
          className="horizontal-line">
        </div>
        <CommentFormComponent
          feedId={feed._id}
          addComment={addComment} />
        <CommentsListComponent
          feedId={feed._id}
          comments={comments}
          removeComment={removeComment} />
      </div>
    );
  }
}
