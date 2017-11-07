
import Loader from "react-loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import { getFeeds, setFeed } from "../actions/feeds";
import FeedDetailContainer from "../containers/feed_detail";
import FeedsComponent from "../components/feeds/index";

import "./styles/feeds.css";

class FeedsContainer extends Component {
  static propTypes = { isLoaded: PropTypes.bool.isRequired,
    selectedFeedId: PropTypes.string, feeds: PropTypes.array,
    setFeed: PropTypes.func.isRequired };

  initFeedsContainer() {
    this.props.getFeeds();
  }

  componentDidMount() {
    this.initFeedsContainer();
  }

  static mapStateToProps(state) {
    return {
      isLoaded: state.getIn(["FeedsReducer", "isLoaded"]),
      feeds: state.getIn(["FeedsReducer", "feeds"]),
      feedId: state.getIn(["FeedsReducer", "feedId"]) };
  }

  static mapDispatchToProps(dispatch) {
    return {
      setFeed: (feedId) => dispatch(setFeed(feedId)),
      getFeeds: () => dispatch(getFeeds()) };
  }

  render() {
    const { isLoaded, feeds, feedId, setFeed } = this.props;
    return (
      <Loader
        loaded={isLoaded}>
        <Row
          className="show-grid">
          <Col
            xs={12}
            sm={6}
            md={6}>
            <FeedsComponent
              isLoaded={isLoaded}
              feeds={feeds}
              selectedFeedId={feedId}
              onFeedSelected={(feedId) => setFeed(feedId)} />
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}>
            <span
              ref={(node) => { this.nodeElement = node }}>
            </span>
            <FeedDetailContainer
              feedId={feedId}
              feedTopSpan={this.nodeElement} />
            </Col>
        </Row>
      </Loader>
    );
  }
}

export default connect(FeedsContainer.mapStateToProps,
  FeedsContainer.mapDispatchToProps)(FeedsContainer);
