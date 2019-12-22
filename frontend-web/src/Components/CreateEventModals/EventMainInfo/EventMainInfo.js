import React from "react";

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Container, Button, Modal, Form } from "react-bootstrap";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

//-------------------IMPORTED COMPONENTS---------------------
import ShowDateInput from "./ShowDateInput.js";
//-------------------IMPORTED COMPONENTS---------------------

/**
 * @prop {boolean} showModal - recieving  this prop will make the current modal show to user
 * @prop {Date} SelectedDate - date range recieved from LargeCalendar
 *
 * @class EventMainInfo
 * @extends {React.Component}
 */
class EventMainInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //property data recieved by LargeCalendar compoenent
    const { showModal, SelectedDate, onClickNext } = this.props;
    console.log("here", this.props);
    //callback functions
    return (
      <Modal
        show={showModal}
        onHide={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form.Row>
              <Form.Label>Event Title</Form.Label>
              <Form.Control placeholder="EventName" />
            </Form.Row>

            <Form.Row>
              <Form.Label>Host Name</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Host Name"
                defaultValue="Jennie"
              />
            </Form.Row>
            <Form.Row>
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe about your event, what does it make it special"
              />
              <ShowDateInput date={SelectedDate} />
            </Form.Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onClickNext()}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EventMainInfo;
