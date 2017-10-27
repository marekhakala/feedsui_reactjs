import Loader from "react-loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import { getFeeds } from "../actions/feeds";
import FeedsComponent from "../components/feeds/index";

import "./styles/feeds.css";

class FeedsContainer extends Component {
  static propTypes = { isLoaded: PropTypes.bool.isRequired, feeds: PropTypes.array };

  initFeedsContainer() {
    this.props.getFeeds();
  }

  componentDidMount() {
    this.initFeedsContainer();
  }

  static mapStateToProps(state) {
    return {
      isLoaded: state.getIn(["FeedsReducer", "isLoaded"]),
      feeds: state.getIn(["FeedsReducer", "feeds"]) };
  }

  static mapDispatchToProps(dispatch) {
    return { getFeeds: () => dispatch(getFeeds()) };
  }

  render() {
    const { isLoaded, feeds } = this.props;

    return (
      <Loader
        loaded={isLoaded}>
        <Row
          className="show-grid">
          <Col
            xs={12}>
            <FeedsComponent
              isLoaded={isLoaded}
              feeds={feeds}
              onFeedSelected={() => {}} />
          </Col>
        </Row>
      </Loader>
    );
  }
}

export default connect(FeedsContainer.mapStateToProps,
  FeedsContainer.mapDispatchToProps)(FeedsContainer);
