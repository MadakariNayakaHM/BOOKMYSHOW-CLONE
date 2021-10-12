import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Footer() {
    return (
        <div style={{padding:"15px"}}>
            <Row> <h1  style={{color:"white",textAlign:"center"}}> ThankYou for Booking </h1></Row>
            <Row>
                <Col><h2 style={{color:"green"}}>Stay Safe</h2></Col>
                <Col><h2 style={{color:"yellow",display:"flex" ,flexDirection:"row-reverse"}}>Stay updated</h2></Col>

            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Footer
