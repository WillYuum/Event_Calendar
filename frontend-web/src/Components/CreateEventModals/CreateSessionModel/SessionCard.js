import React from 'react';

//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

import { Card, Row, Col, Button } from "react-bootstrap"
//----------------IMPORTED BOOTSTRAP COMPONENTS-----------------

import "./SessionCard.scss";

/**
 * @prop {String} SessionTitle
 * @prop {String} SessionDescription
 * @prop {Date} SessionStart
 * @prop {Date} SessionEnd
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
        const { SessionTitle, SessionDescription, SessionStart, SessionEnd,SessionIndex } = this.props
        //recieving function props from CreateSessionModal.js component
        const {HandleDeleteSession} = this.props
        return (
            <Card className="SessionCard mb-3">
                <Card.Body className="h-25">
                    <Card.Title>{SessionTitle}</Card.Title>
                    <Col>
                        <Row className="descriptionContainer">
                            <Card.Text className="SessionDescription" as="p" p="100">{SessionDescription}</Card.Text>
                        </Row>
                    </Col>
                    <Row>
                        <Col>{SessionStart}</Col>
                        <Col>{SessionEnd}</Col>
                    </Row>

                </Card.Body>
                    <Card.Footer>
                        <Button onClick={()=>HandleDeleteSession(SessionIndex)}>Delete</Button>
                    </Card.Footer>
            </Card>
        );
    }
}

export default SessionCard;