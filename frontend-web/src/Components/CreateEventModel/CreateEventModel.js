import React from "react";
import { getDaysRange, getSpecificDate } from "../../utils/getDaysRange.js";

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

import "./CreateEventModel.scss";

class CreateEventModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleShowDateInput = async ({ date }) => {
    console.log("h1", typeof date.startStr);
    debugger
    await console.log(await getSpecificDate(date.endStr))
    if (getDaysRange(date.start, date.end) > 1) {
      return (
        <Col>
          <Form.Row>
            <Col>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" defaultValue={date.startStr} />
            </Col>
            <Col>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={getSpecificDate(date.endStr)}
              />
            </Col>
          </Form.Row>
        </Col>
      );
    } else {
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
    }
  };

  render() {
    //property data recieved by LargeCalendar compoenent
    const { showModal, CreateEventData } = this.props;
    console.log(CreateEventData);
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
              <this.handleShowDateInput date={CreateEventData} />
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
