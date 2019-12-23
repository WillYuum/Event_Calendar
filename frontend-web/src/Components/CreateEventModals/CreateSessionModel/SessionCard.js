import React from 'react';

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

import { Card, Row, Col } from "react-bootstrap"
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

import "./SessionCard.scss";

/**
 * @prop {String} SessionTitle
 * @prop {String} SessionDescription
 *
 * @class SessionCard
 * @extends {React.Component}
 */
class SessionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        //recieving props from CreateSessionModel.js component
        const { SessionTitle, SessionDescription } = this.props
        return (
            <Card className="SessionCard">
                <Card.Header as="h5">{SessionTitle}</Card.Header>
                <Card.Body className="h-25">
                    <Col>
                        <Row className="descriptionContainer">
                            <Card.Text className="SessionDescription" as="p" p="100">{SessionDescription}</Card.Text>
                        </Row>
                    </Col>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>

                </Card.Body>
            </Card>
        );
    }
}

export default SessionCard;