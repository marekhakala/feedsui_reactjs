import PropTypes from "prop-types";
import React, { Component } from "react";

import FeedItemComponent from "./feed_item";

export default class FeedDetailComponent extends Component {
  static propTypes = { feed: PropTypes.object, detailMounted: PropTypes.func.isRequired };

  renderItem(feedProps) {
    const { feed, detailMounted } = feedProps;
    if(feed) {
        return (
          <div className="feed-item">
            <FeedItemComponent
              feed={feed}
              detailMounted={detailMounted} />
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
