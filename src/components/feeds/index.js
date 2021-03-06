import PropTypes from "prop-types";
import React, { Component } from "react";

import FeedsItemComponent from "./feeds_item";

export default class FeedsComponent extends Component {
  static propTypes = { feeds: PropTypes.array,
     selectedFeedId: PropTypes.string, onFeedSelected: PropTypes.func.isRequired };

  handleClick(feedId, index) {
    this.props.onFeedSelected(feedId);
  }

  renderItem(feed, id) {
    const { onFeedSelected, selectedFeedId } = this.props;
    return (
      <FeedsItemComponent
        key={id}
        feed={feed}
        isFeedActive={(selectedFeedId === feed._id)}
        onClickFunc={() => onFeedSelected(feed._id)} />
    );
  }

  render() {
    const { feeds } = this.props;
    return (
      <div>
        <h1>
          <strong>
            List
          </strong>
        </h1>
        <div
          className="feeds-list">
          {
            feeds.map((feed, id) => this.renderItem(feed, id))
          }
        </div>
      </div>
    );
  }
}
