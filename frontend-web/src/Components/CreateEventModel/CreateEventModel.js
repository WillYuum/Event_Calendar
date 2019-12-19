import React from "react";

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

import ShowDateInput from "./ShowDateInput.js"

import "./CreateEventModel.scss";

class CreateEventModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //property data recieved by LargeCalendar compoenent
    const { showModal, SelectedDate } = this.props;
    console.log("here", SelectedDate);
    //callback functions
    const { handleCloseModal } = this.props;
    return (
      <Modal
        show={showModal}
        onHide={handleCloseModal}
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
          <Button>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateEventModel;
