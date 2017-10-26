
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import "./assets/styles/base.css";
import "./assets/styles/bootstrap.css";

export default class ReactApplication extends Component {
  render() {
    return (
      <div>
        <Grid>
          <h1>Welcome!</h1>
        </Grid>
      </div>
    );
  }
}
