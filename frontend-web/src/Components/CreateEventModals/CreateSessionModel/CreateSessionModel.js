import React from "react";
import DateFormat from "dateformat";
import DateTimePicker from "react-datetime";

//----------------IMPORTED COMPONENT-----------------
import SessionCard from "./SessionCard.js";
//----------------IMPORTED COMPONENT-----------------

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

import "./dateTimePicker.scss";
import "./CreateSessionModel.scss";

/**
 * @prop {boolean} showModal
 * @prop {Function} onClickNext
 *
 * @class CreateSessionModel
 * @extends {React.Component}
 */
class CreateSessionModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sessions: [],
      SessionInfo: {
        SessionTitle: "",
        SessionDescription: "",
        SessionStart: "",
        SessionEnd: ""
      }
    };
  }

  /**
   * @function HandleInputChange - handle all input changes in this component
   * and saving them in state
   * @prop {CallBack-Value} e this is the callback value from input onChange
   *
   * @memberof CreateSessionModel
   */
  HandleInputChange = e => {
    //stopping the react pooling from nulling the e properties
    e.persist();

    this.setState(prevState => {
      //copying the old state values
      let SessionInfo = { ...prevState.SessionInfo };
      //setting the new values depending on the all input names
      SessionInfo[[e.target.name]] = e.target.value;
      return { SessionInfo };
    });
  };

  /**
   * @function HandleDateTimePicker
   * @param {Date} DateTime
   *
   * @memberof CreateSessionModel
   */
  HandleDateTimePicker = dateTime => {
    this.setState(prevState => {
      let SessionInfo = { ...prevState.SessionInfo };
      let Key = dateTime.name;
      let Value = DateFormat(dateTime.e._d, "ddd mmm dd yyyy HH:MM ss");
      SessionInfo[Key] = Value;
      return { SessionInfo };
    });
  };

  /**
   * @function HandleAddSession - adding the session to Sessions array state
   *
   * @memberof CreateSessionModel
   */
  HandleAddSession = () => {
    //creating a copy of old state and setting the new values in the state
    let OldSessions = [...this.state.Sessions, this.state.SessionInfo];
    this.setState({ Sessions: OldSessions });

    //emptying the inputs
    this.setState({
      SessionInfo: {
        SessionTitle: "",
        SessionDescription: "",
        SessionStart: "",
        SessionEnd: ""
      }
    });
  };

  /**
   * @function HandleDisabledButton - switching the button off if inputs are empty
   * @returns {Boolean}
   * @memberof CreateSessionModel
   */
  HandleDisabledButton = () => {
    const { SessionInfo } = this.state;
    let checkIfInputExists =
      SessionInfo.SessionTitle !== "" &&
      SessionInfo.SessionStart !== "" &&
      SessionInfo.SessionEnd !== "";
    if (checkIfInputExists) {
      return false;
    } else {
      return true;
    }
  };

  HandleDeleteSession = index => {
    const { Sessions } = this.state;

    //removing session in array
    let sessionIndex = Sessions.indexOf(index);
    Sessions.splice(sessionIndex, 1);

    //refreshing the state
    let newSessions = [...Sessions];
    this.setState({ Sessions: newSessions });
  };

  render() {
    const { Sessions, SessionDate, SessionInfo, canAddSession } = this.state;

    //recieving props fron ChainedCreateModel
    const { showModal, onClickNext } = this.props;
    return (
      <Modal
        className="CreateSessionModal-container"
        show={showModal}
        onHide={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Sessions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="7">
              <Form.Row>
                <Form.Label>Seesion Title</Form.Label>
                <Form.Control
                  name="SessionTitle"
                  value={SessionInfo.SessionTitle}
                  type="input"
                  onChange={e => this.HandleInputChange(e)}
                />
              </Form.Row>
              <Form.Row>
                <Form.Label>Seesion Description</Form.Label>
                <Form.Control
                  name="SessionDescription"
                  as="textarea"
                  value={SessionInfo.SessionDescription}
                  onChange={e => this.HandleInputChange(e)}
                />
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Session Start</Form.Label>
                  <Form.Row>
                    <DateTimePicker
                      name="StartDate"
                      value={SessionInfo.SessionStart}
                      onChange={e =>
                        this.HandleDateTimePicker({ name: "SessionStart", e })
                      }
                    />
                  </Form.Row>
                </Col>
                <Col>
                  <Form.Label>Session End</Form.Label>
                  <Form.Row>
                    <DateTimePicker
                      value={SessionInfo.SessionEnd}
                      onChange={e =>
                        this.HandleDateTimePicker({ name: "SessionEnd", e })
                      }
                    />
                  </Form.Row>
                </Col>
              </Form.Row>
            </Col>
            <Col lg="5" className="MapSessions-container">
              {Sessions.map((session, index) => {
                return (
                  <SessionCard
                    key={index}
                    SessionIndex={index}
                    HandleDeleteSession={this.HandleDeleteSession}
                    SessionTitle={session.SessionTitle}
                    SessionDescription={session.SessionDescription}
                    SessionStart={session.SessionStart}
                    SessionEnd={session.SessionEnd}
                  />
                );
              })}
            </Col>
          </Row>
          <Col>
            <Row>
              <Button
                className="mt-5"
                disabled={this.HandleDisabledButton()}
                onClick={() => this.HandleAddSession()}
              >
                Add Session
              </Button>
            </Row>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={Sessions.length !== 0 ? false : true}
            onClick={() => onClickNext()}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateSessionModel;
