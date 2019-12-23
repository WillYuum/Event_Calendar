import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BurgurIcon } from "../../assets/Hamburgur_icon.svg";
import { ReactComponent as ButtonClose } from "../../assets/x_icon.svg";
import $ from "jquery";

import "./NavBar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Off Canvas Menu Open & Close
    $("#offCanvas").on("click", function() {
      $(".nav-offcanvas").addClass("open");
      $(".offcanvas-overlay").addClass("on");
    });
    $("#offCanvasClose, .offcanvas-overlay").on("click", function() {
      $(".nav-offcanvas").removeClass("open");
      $(".offcanvas-overlay").removeClass("on");
    });
  }

  render() {
    return (
      <div className="Navigation-container">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a id="offCanvas" className="hamburger">
          <BurgurIcon className="burgurIcon" />
        </a>
        <div className="nav-offcanvas">
          <button
            type="button"
            className="close"
            id="offCanvasClose"
            aria-label="Close"
          >
            <ButtonClose />
          </button>
          <div className="nav-offcanvas-menu">
            <h1 className="Nav-logo">Eventos</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/">Attending Events</Link>
                <Link to="/">Settings</Link>
                <Link to="/">LogOut</Link>
                <Link to="/404">404 Page :)</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas-overlay"></div>
      </div>
    );
  }
}

export default NavBar;
