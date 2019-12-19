import React from 'react';
import dateFormat from "dateformat";

import { getDaysRange } from "../../utils/getDaysRange.js";

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

class ShowDateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            endDate: ""
        }
    }

    // async componentDidMount() {
    //     await this.getSpecificdate()
    // }

    // getSpecificdate = async () => {
    //     const { date } = this.state
    //     await console.log("date", date)
    //     let impreciseDate = await Date(date.endStr);
    //     await impreciseDate.setDate(await impreciseDate.getDate() - 1);
    //     console.log("impreciseDate", impreciseDate)
    //     const x = await dateFormat(await impreciseDate, "yy-mm-dd")
    //     await console.log("WTF", x)
    //     this.setState({ endDate: x })
    // }

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
        )
    }

    HandleTwoInput = ({ date }) => {
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
                            value={this.state.endDate}
                        />
                    </Col>
                </Form.Row>
            </Col>
        )
    }



    render() {
        const { date } = this.props
        //     console.log(date)
        //    this.setState({date: date})
        //    console.log("what",this.state.date)
        //  getDaysRange(date.start, date.end) ? "" : "" 
        return getDaysRange(date.start, date.end) !== 1 ? <this.HandleTwoInput date={date} /> : <this.HandleOneInput date={date} />



    }

}

export default ShowDateInput;