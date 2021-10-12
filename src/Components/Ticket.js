import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card"

function Ticket() {
    return (
        <div style={{marginTop:"2rem", background:"gray"}}>
            <h1 style={{color:"white",textAlign:"center"}}>Book your show</h1>
            
            <Carousel fade>
  <Carousel.Item>
    <CardGroup>
    <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
        <h1>Book your choice</h1>
        <video src="./images/buy2.webm" controls  style={{height:"222px",width:"auto", display:'block'}}></video>
    </Card>
    <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
        <img src="./images/buy1.webp" alt=""  style={{height:"222px",width:"auto", display:'block'}}/>
    </Card>
    </CardGroup>
  </Carousel.Item>

  <Carousel.Item>
    <CardGroup>
    <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
        <h1>See your choice</h1>
        <video src="./images/buy3.webm" controls  style={{height:"222px",width:"auto", display:'block'}}></video>
    </Card>
    <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
        <img src="./images/buy5.webp" alt=""  style={{height:"222px",width:"auto", display:'block'}}/>
    </Card>
    </CardGroup>
  </Carousel.Item>

  <Carousel.Item>
    <CardGroup>
    <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
        <h1>See your choice</h1>
        <video src="./images/buy4.webm" controls  style={{height:"222px",width:"auto", display:'block'}}></video>
    </Card>
    <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
        <img src="./images/buy6.webp" alt="" style={{height:"222px",width:"auto", display:'block'}}/>
    </Card>
    </CardGroup>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default Ticket
