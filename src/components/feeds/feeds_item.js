import PropTypes from "prop-types";
import React, { Component } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";

export default class FeedsItemComponent extends Component {
  static propTypes = {
    feed: PropTypes.shape({ text: PropTypes.string.isRequired, date: PropTypes.string.isRequired,
      person: PropTypes.shape({ firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired, avatar: PropTypes.string.isRequired }),
        onClickFunc: PropTypes.func })
  };

  render() {
    const { text, date, person } = this.props.feed;
    return (
      <div
        className="feeds-item">
        <Row
          className="show-grid">
          <Col
            xs={3}
            sm={3}
            md={2}>
            <Image
              className="feeds-item-image"
              src={person.avatar}
              alt="Avatar photo"
              circle
              responsive />
          </Col>
          <Col
            xs={4}
            smHidden
            mdHidden
            lgHidden>
            <h3
              className="feeds-item-person">
              {person.firstName} {person.lastName}
            </h3>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={7}
            xsHidden>
            <h3
              className="feeds-item-person">
              {person.firstName} {person.lastName}
            </h3>
            <span
              className="feeds-item-timestamp">
              {date}
            </span>
          </Col>
          <Col
            xs={5}
            sm={5}
            md={3}
            className="text-right">
            <Button
              className="feeds-item-btn btn btn-custom btn-block"
              onClick={this.props.onClickFunc}>
              DETAIL
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
              className="feeds-item-timestamp">
              {date}
            </span>
          </Col>
        </Row>
        <Row
          className="show-grid feed-text-area">
          <Col
            xs={8}
            sm={10}
            xsOffset={3}
            smOffset={2}>
            <p
              className="feeds-item-text">
              {text}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
