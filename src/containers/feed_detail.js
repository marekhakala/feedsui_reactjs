
import Loader from "react-loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import { getFeed, addComment, removeComment } from "../actions/feed";
import FeedDetailComponent from "../components/feed_detail/index";

export class FeedDetailContainer extends Component {
  static propTypes = { isLoaded: PropTypes.bool.isRequired,
    feeds: PropTypes.array, feedId: PropTypes.string,
    feedTopSpan: PropTypes.object, feed: PropTypes.object,
    comments: PropTypes.array, getFeed: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired, removeComment: PropTypes.func.isRequired };

  constructor(props) {
    super(props);

    this.initFeedDetail = this.initFeedDetail.bind(this);
    this.scrollToDetailSection = this.scrollToDetailSection.bind(this);

    this.handleDetailMounted = this.handleDetailMounted.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleRemoveComment = this.handleRemoveComment.bind(this);
  }

  initFeedDetail() {
    const { feedId } = this.props;

    if(feedId) {
      this.props.getFeed(feedId);
    }
  }

  handleAddComment(feedId, body) {
    this.props.addComment(feedId, body);
  }

  handleRemoveComment(feedId, commentId) {
    this.props.removeComment(feedId, commentId);
  }

  handleDetailMounted() {
    const { feedTopSpan } = this.props;
    this.scrollToDetailSection(feedTopSpan);
  }

  scrollToDetailSection(feedTopSpan) {
    if(feedTopSpan) {
      scrollToComponent(feedTopSpan,
         { offset: 0, align: "top", duration: 500 });
    }
  }

  componentDidUpdate() {
    if(this.canLoadFeedDetail()) {
      this.initFeedDetail();

      const { feedTopSpan } = this.props;
      this.scrollToDetailSection(feedTopSpan);
    }
  }

  static mapStateToProps(state) {
    return {
      isLoaded: state.getIn(["FeedDetailReducer", "isLoaded"]),
      feed: state.getIn(["FeedDetailReducer", "feed"]),
      comments: state.getIn(["FeedDetailReducer", "comments"])
    };
  }

  static mapDispatchToProps(dispatch) {
    return {
      getFeed: (id) => dispatch(getFeed(id)),
      addComment: (feedId, body) => dispatch(addComment(feedId, body)),
      removeComment: (feedId, commentId) => {
        return dispatch(removeComment(feedId, commentId));
      }
    };
  }

  renderFeedDetail(feedProps) {
    const { feed, comments } = feedProps;
    return (
      <FeedDetailComponent
        feed={feed}
        comments={comments}
        detailMounted={this.handleDetailMounted}
        addComment={this.handleAddComment}
        removeComment={this.handleRemoveComment} />
      );
  }

  canLoadFeedDetail() {
    const { feedId, feed } = this.props;
    return (!feed && feedId) || (feed && feed._id !== feedId);
  }

  render() {
    const { isLoaded, feedId } = this.props;

    if(feedId) {
      return (
        <Loader
          loaded={isLoaded}>
          {this.renderFeedDetail(this.props)}
        </Loader>
      );
    }
    return this.renderFeedDetail(this.props);
  }
}

export default connect(FeedDetailContainer.mapStateToProps,
  FeedDetailContainer.mapDispatchToProps)(FeedDetailContainer);
