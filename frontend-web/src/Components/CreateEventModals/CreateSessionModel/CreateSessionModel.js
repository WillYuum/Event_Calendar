import React from 'react';

import DateTimePicker from 'react-datetime-picker';
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Container, Button, Modal, Form, Col, Row, Input } from "react-bootstrap";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

class CreateSessionModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Sessions: [],
            SessionDate: "",
            SessionInfo: {
                SessionTitle: "",
                SessionDescription: "",
                SessionStart: "",
                SessionEnd: "",
            }
        }
    }

    /**
     * @function HandleInputChange - handle all input changes in this component
     * and saving them in state
     * @prop {CallBack-Value} e this is the callback value from input onChange
     *
     * @memberof CreateSessionModel
     */
    HandleInputChange = (e) => {
        //stopping the react pooling from nulling the e properties
        e.persist();

        this.setState(prevState => {
            //copying the old state values
            let SessionInfo = { ...prevState.SessionInfo }
            //setting the new values depending on the all input names
            SessionInfo[[e.target.name]] = e.target.value
            return { SessionInfo }
        })
    }


    render() {
        const { Sessions, SessionDate, SessionInfo } = this.state

        //recieving props fron ChainedCreateModel
        const { showModal, onClickNext } = this.props
        return (
            <Modal show={showModal}
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
                                <Form.Control name="SessionTitle" value={this.state.SessionInfo.SessionTitle} type="input" onChange={(e) => this.HandleInputChange(e)} />
                            </Form.Row>
                            <Form.Row>
                                <Form.Label>Seesion Description</Form.Label>
                                <Form.Control name="SessionDescription" as="textarea" onChange={(e) => this.HandleInputChange(e)} />
                            </Form.Row>
                            <Form.Row>
                                <Form.Row>
                                    <Form.Row><Form.Label>Session Start</Form.Label></Form.Row>
                                    <Form.Row><DateTimePicker value={SessionDate} onChange={(e) => this.setState({ SessionDate: e })} /></Form.Row>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Row><Form.Label>Session End</Form.Label></Form.Row>
                                    <Form.Row><DateTimePicker value={SessionDate} onChange={(e) => this.setState({ SessionDate: e })} /></Form.Row>
                                </Form.Row>
                            </Form.Row>
                            <Button>Add Session</Button>

                        </Col>
                        <Col lg="5">

                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onClickNext()}>Next</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CreateSessionModel;