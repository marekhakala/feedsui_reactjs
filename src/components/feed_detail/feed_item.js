import PropTypes from "prop-types";
import React, { Component } from "react";

import FeedItemContentComponent from "./feed_item_content";

export default class FeedItemComponent extends Component {
  static propTypes = { feed: PropTypes.object, detailMounted: PropTypes.func.isRequired };

  componentDidMount() {
    this.props.detailMounted();
  }

  render() {
    const { feed } = this.props;
    return (
      <div>
        <FeedItemContentComponent
          feedText={feed.text}
          likesCount={feed.likesCount}
          commentsCount={feed.commentsCount}
          person={feed.person} />
        <hr />
      </div>
    );
  }
}
