import React from "react";

import "./SessionCard.scss";

/**
 * @prop {string} SessionTitle
 * @prop {Date}
 * @prop {string} SessionDescription
 * 
 * 
 * @class SessionCard
 * @extends {React.Component}
 */
class SessionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //recieving props from TabSection
    const { SessionTitle, SessionDate, SessionDescription } = this.props;
    return (
      <div className="SessionCard-container">
        <div className="TopCard">
          <div className="SessionTitle">
            <p>{SessionTitle}</p>
          </div>
          <div className="DateTime"></div>
        </div>

        <div className="BottomCard">
          <p>{SessionDescription}</p>
        </div>
      </div>
    );
  }
}

export default SessionCard;
