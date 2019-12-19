import React from 'react';

import { getDaysRange, getSpecificDate } from "../../utils/getDaysRange.js";

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

class ShowDateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    HandleOneInput = () => {
        const { date } = this.props
        return (
            <Col>
                <Form.Row>
                    <Col>
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control type="date" defaultValue={date.startStr} />
                    </Col>
                </Form.Row>
            </Col>
        )
    }

    HandleTwoInput = () => {
        const { date } = this.props
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
                            defaultValue={date.endStr}
                        />
                    </Col>
                </Form.Row>
            </Col>
        )
    }

    render() {
        // await console.log(await getSpecificDate(date.endStr))

        const { date } = this.props
        //  getDaysRange(date.start, date.end) ? "" : "" 
        return getDaysRange(date.start, date.end) !== 1 ? this.HandleTwoInput() : this.HandleOneInput()



    }

}

export default ShowDateInput;