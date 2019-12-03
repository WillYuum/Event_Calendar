import React from "react";

import "./NavBar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="NavBar-container">
        <div className="content">
          <div className="Logo-container">
            <h1>Eventos</h1>
          </div>
          <ul className="navigationBtns-container">
            <li>SingIn</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
