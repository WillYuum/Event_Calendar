/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Footer.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div class="wrapper">
          <small>
            &copy;2019 <strong>Eventos</strong>, All Rights Reserved
          </small>
          <nav class="footer-nav">
            <a href="#largeCalendar">Back to Top</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
