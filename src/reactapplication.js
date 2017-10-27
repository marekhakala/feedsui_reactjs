
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import "./assets/styles/base.css";
import "./assets/styles/bootstrap.css";

import FeedsContainer from "./containers/feeds";

export default class ReactApplication extends Component {
  render() {
    return (
      <div>
        <Grid>
          <FeedsContainer />
        </Grid>
      </div>
    );
  }
}
