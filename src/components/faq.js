import React from "react"
import Accordion from 'react-bootstrap/Accordion'

function FAQ() {
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What forms of payment do you accept?</Accordion.Header>
                <Accordion.Body>
                Payment Info
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is your cancellation policy?</Accordion.Header>
                <Accordion.Body>
                Cancellation info
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
export default FAQ