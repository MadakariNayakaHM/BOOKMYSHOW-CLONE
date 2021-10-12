import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"

function Gift() {
    return (
        <div style={{marginTop:"2rem"}}>
            <h1 style={{color:"hotpink",textAlign:"center"}}>Lucky Gifts </h1>
           <Carousel>
               
  <Carousel.Item>
  <Card className="bg-dark text-white" style={{display:"flex",justifyContent:"center"}}>
  <Card.Img src="./images/gift1.jpg" alt="Card image" style={{width:"60%",height:"200px", display:"block",margin:"auto"}}/>
  <Card.ImgOverlay>
    
  </Card.ImgOverlay>
</Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card className="bg-dark text-white" style={{display:"flex",justifyContent:"center"}}>
  <Card.Img src="./images/gift2.jpg" alt="Card image" style={{width:"60%",height:"200px" ,display:"block",margin:"auto"}}/>
  <Card.ImgOverlay>
    
  </Card.ImgOverlay>
</Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card className="bg-dark text-white" style={{display:"flex",justifyContent:"center"}}>
  <Card.Img src="./images/gift3.jpg" alt="Card image" style={{width:"60%",height:"200px", display:"block",margin:"auto"}}/>
  <Card.ImgOverlay>
    
  </Card.ImgOverlay>
</Card>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Gift
