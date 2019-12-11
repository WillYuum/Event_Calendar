import React from "react";
import dateFormat from "dateformat";

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

  /**
   * @function isMultipleDays - checks if sessions takes multiple days or a single date
   * @param {date} SessionStart - Session start date
   * @param {date} SessionEnd - Session end date
   * @returns {string} if sessions takes multiples days "Fri 20 - Fri 22" || if session takes one day "Fri 20"
   *
   * @memberof SessionCard
   */
  isMultipleDays = (SessionStart, SessionEnd) => {
    //getting the format neede to desiplay
    SessionStart = dateFormat(SessionStart, "ddd dd");
    SessionEnd = dateFormat(SessionEnd, "ddd dd");

    //checking if session is one day or more
    if (SessionStart === SessionEnd) {
      return SessionStart;
    } else {
      return `${SessionStart} - ${SessionEnd}`;
    }
  };

  render() {
    //recieving props from TabSection
    const {
      SessionTitle,
      SessionStart,
      SessionEnd,
      SessionDescription
    } = this.props;
    return (
      <div className="SessionCard-container">
        <div className="TopCard">
          <div className="SessionTitle">
            <p>{SessionTitle}</p>
          </div>
          <div className="DateTime">
            <p>{this.isMultipleDays(SessionStart, SessionEnd)}</p>
            <time>
              {dateFormat(SessionStart, "h:MM TT")}-
              {dateFormat(SessionEnd, "h:MM TT")}
            </time>
          </div>
        </div>

        <div className="BottomCard">
          <p>{SessionDescription}</p>
        </div>
      </div>
    );
  }
}

export default SessionCard;
