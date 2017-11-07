import PropTypes from "prop-types";
import React, { Component } from "react";

import FeedItemComponent from "./feed_item";

export default class FeedDetailComponent extends Component {
  static propTypes = { feed: PropTypes.object, comments: PropTypes.array,
    addComment: PropTypes.func.isRequired, removeComment: PropTypes.func.isRequired,
    detailMounted: PropTypes.func.isRequired };

  renderItem(feedProps) {
    const { feed, comments, addComment, removeComment, detailMounted } = feedProps;
    if(feed) {
        return (
          <div className="feed-item">
            <FeedItemComponent
              feed={feed}
              detailMounted={detailMounted}
              comments={comments}
              addComment={addComment}
              removeComment={removeComment} />
          </div>
        );
    }

    return <div></div>;
  }

  render() {
    return (
      <div>
        <div
          className="feed-item-title">
          <h1>
            <strong>
              Detail
            </strong>
          </h1>
          <br />
        </div>
        {this.renderItem(this.props)}
      </div>
    );
  }
}
