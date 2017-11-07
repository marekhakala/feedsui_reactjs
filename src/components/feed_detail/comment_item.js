import PropTypes from "prop-types";
import React, { Component } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
const moment = require("moment");

export default class CommentItem extends Component {
  static propTypes = { feedId: PropTypes.string, comment: PropTypes.object,
    index: PropTypes.number, removeComment: PropTypes.func.isRequired };

  render() {
    if(!this.props.comment || !this.props.comment.person) {
      return <span></span>;
    }

    const removeCommentFunc = this.props.removeComment;
    const { text, person } = this.props.comment;
    const dateFormatted = (person.date) ? moment(person.date).toString() : "";
    const horizontalLine = (<div className="horizontal-line"></div>);
    return (
    <div
      className="comment-item">
      <div
        className="comment-item-content">
        <Row
          className="show-grid">
          <Col
            xs={4}
            sm={2}
            md={2}>
            <Image
              className="comment-item-image"
              src={person.avatar}
              alt="Avatar photo"
              circle responsive />
          </Col>
          <Col
            xs={4}
            smHidden
            mdHidden
            lgHidden>
            <h3
              className="comment-item-person">
              {person.firstName} {person.lastName}
            </h3>
          </Col>
          <Col
            xs={4}
            sm={7}
            md={7}
            xsHidden>
            <h3
              className="comment-item-person">
              {person.firstName} {person.lastName}
            </h3>
            <span
              className="comment-item-timestamp">
              {dateFormatted}
            </span>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            className="text-right">
            <Button
              className="comment-item-btn btn btn-custom" onClick={() => { removeCommentFunc(this.props.feedId,   this.props.comment._id) }}>
              X
            </Button>
          </Col>
        </Row>
        <Row
          className="show-grid">
          <Col
            xs={8}
            xsOffset={4}
            smHidden
            mdHidden
            lgHidden>
            <span
              className="comment-item-timestamp">
              {dateFormatted}
            </span>
          </Col>
        </Row>
        <Row
          className="show-grid feed-text-area">
          <Col
            xs={8}
            sm={10}
            xsOffset={4}
            smOffset={2}>
            <p
              className="comment-item-text">
              {text}
            </p>
          </Col>
        </Row>
      </div>
      {(this.props.id !== 0) ? horizontalLine : ""}
    </div>
    );
  }
}
