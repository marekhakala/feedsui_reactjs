import PropTypes from "prop-types";
import React, { Component } from "react";
import { FormGroup, ControlLabel, Button } from "react-bootstrap";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";

const required = (value, props) => {
  if (!value || (props.isCheckable && !props.checked)) {
    return (
      <span
        className="form-error">
        Required
      </span>
    );
  }
};

export default class CommentFormComment extends Component {
  static propTypes = { feedId: PropTypes.string,
     addComment: PropTypes.func.isRequired };

  constructor(props) {
    super(props);

    this.state = { firstName: '', lastName: '', commentText: '' };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleCommentTextChange = this.handleCommentTextChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    this.clearCommentForm();
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleCommentTextChange(event) {
    this.setState({ commentText: event.target.value });
  }

  static isFormValid(firstName, lastName, commentText) {
    if(firstName.length > 0
      && lastName.length > 0
      && commentText.length > 0) {
        return true;
    }
    return false;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.form.validateAll();

    const { firstName, lastName, commentText } = this.state;
    if(CommentFormComment.isFormValid(firstName, lastName, commentText)) {
      this.props.addComment(this.props.feedId, { firstName: firstName,
        lastName: lastName, commentText: commentText });
      this.clearCommentForm();
    }
  }

  clearCommentForm() {
    this.form.hideError(this.firstNameInput);
    this.form.hideError(this.lastNameInput);
    this.form.hideError(this.commentTextarea);
    this.setState({firstName: '', lastName: '', commentText: ''});
  }

  render() {
    return (
      <Form
        ref={commentForm => {this.form = commentForm}}
        className="feed-item-form form-horizontal"
        onSubmit={this.handleSubmit}>
        <fieldset>
          <FormGroup
            controlId="comment_first_name">
            <ControlLabel
              className="col-lg-3">
              First name
            </ControlLabel>
            <div
              className="col-lg-9">
              <Input
                type="text"
                id="comment_first_name"
                className="form-control"
                placeholder="* First name"
                validations={[required]}
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                ref={input => {this.firstNameInput = input}} />
            </div>
          </FormGroup>
          <FormGroup
            controlId="comment_last_name">
            <ControlLabel
              className="col-lg-3">
              Last name
            </ControlLabel>
            <div
              className="col-lg-9">
              <Input
                type="text"
                id="comment_last_name"
                className="form-control"
                placeholder="* Last name"
                validations={[required]}
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
                ref={input => {this.lastNameInput = input}} />
            </div>
          </FormGroup>
          <FormGroup
            controlId="comment_text">
            <ControlLabel
              className="col-lg-3">
              Text
            </ControlLabel>
            <div
              className="col-lg-9">
              <Textarea
                id="comment_text"
                className="form-control"
                placeholder="* Comment..."
                validations={[required]}
                value={this.state.commentText}
                onChange={this.handleCommentTextChange}
                ref={input => {this.commentTextarea = input}} />
            </div>
          </FormGroup>
          <FormGroup>
            <div
              className="col-lg-12">
              <Button
                type="submit"
                className="button btn btn-custom btn-block">
                ADD COMMENT
              </Button>
            </div>
          </FormGroup>
        </fieldset>
      </Form>
    );
  }
}
