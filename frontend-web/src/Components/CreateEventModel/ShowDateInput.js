import React from "react";
import dateFormat from "dateformat";

import { getDaysRange } from "../../utils/getDaysRange.js";

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

class ShowDateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      endDate: ""
    };
  }

  /**
   * @function HandleOneInput - return 1 input EventDate to user
   * @param {date} date - event date that will be displayed to user
   * @return {Component}
   *
   * @memberof ShowDateInput
   */
  HandleOneInput = ({ date }) => {
    return (
      <Col>
        <Form.Row>
          <Col>
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" defaultValue={date.startStr} />
          </Col>
        </Form.Row>
      </Col>
    );
  };

  /**
   * @function HandleTwoInput - return 2 input StartDate and End Date to display to user
   * @param {date} date - event date that will be displayed to user
   * @return {Component}
   *
   * @memberof ShowDateInput
   */
  HandleTwoInput = ({ date }) => {
    return (
      <Col>
        <Form.Row>
          <Col>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="YYYY-MM-DD"
              defaultValue={date.startStr}
            />
          </Col>
          <Col>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="YYYY-MM-DD"
              value={this.state.endDate}
            />
          </Col>
        </Form.Row>
      </Col>
    );
  };

  render() {
    //props recieved by LandingPage.js component
    const { date } = this.props;

    return getDaysRange(date.start, date.end) > 1 ? (
      <this.HandleTwoInput date={date} />
    ) : (
      <this.HandleOneInput date={date} />
    );
  }
}

export default ShowDateInput;
