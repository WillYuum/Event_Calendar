import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./CreateEventModel.scss";

class CreateEventModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  EventInfoModel = () => {};



  // HandleMultipleDayEvent = (e) =>{
  //   const isMultipleDayEvent = e.
  // }

  render() {
    const { ...props } = this.props;
    return (
      <div className="App">
        <Modal
          {...props}
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
                <Form.Label>Event Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Describe about your event, what does it make it special"
                />
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control type="date" />
                </Col>
                <Col>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" />
                </Col>
              </Form.Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button>Next</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateEventModel;
