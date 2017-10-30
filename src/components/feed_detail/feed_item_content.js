import PropTypes from "prop-types";
import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

export default class FeedItemContentComponent extends Component {
  static propTypes = { feedText: PropTypes.string, likesCount: PropTypes.number,
     commentsCount: PropTypes.number, person: PropTypes.object };

  render() {
    const { feedText, likesCount, commentsCount, person } = this.props;
    return (
      <div
        className="feed-item-content">
        <Row
          className="show-grid">
          <Col
            xs={4}
            sm={3}
            xsOffset={4}
            smOffset={5}>
            <Image
              src={person.avatar}
              alt="Avatar photo"
              circle responsive />
          </Col>
        </Row>
        <Row
          className="show-grid">
          <Col
            xs={12}>
            <h3
              className="feed-item-person text-center">
              {person.firstName} {person.lastName}
            </h3>
            <p
              className="feed-item-username text-center">
              {person.username}
            </p>
          </Col>
        </Row>
        <hr />
        <Row
          className="show-grid">
          <Col
            xs={12}>
            <p>
              {feedText}
            </p>
          </Col>
        </Row>
        <br />
        <Row
          className="show-grid">
          <Col
            xs={6}
            sm={6}>
            <p
              className="text-right">
              <strong>LIKES:</strong> {likesCount}
            </p>
          </Col>
          <Col
            xs={6}
            sm={6}>
            <p
              className="text-right">
              <strong>COMMENTS:</strong> {commentsCount}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
