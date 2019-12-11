import React from "react";
import { Link } from "react-router-dom";

import "./PageNotFound.scss";

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="PageNotFound-container">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/" className="button" href="#">
          <i className="icon-home" /> Go back in initial page, is better.
        </Link>
      </div>
    );
  }
}

export default PageNotFound;
