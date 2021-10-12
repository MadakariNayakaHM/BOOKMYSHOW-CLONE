import React from 'react'
import Carousel from "react-bootstrap/Carousel"

function Hero() {
    return (
        <div style={{marginTop:"2rem"}}>
            <Carousel>
  <Carousel.Item>
  <img style={{height:"200px"}}
      className="d-block w-100"
      src="./images/her1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>WATCH MOVIE</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img style={{height:"200px"}}
      className="d-block w-100 "
      src="./images/her2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>EAT AND WATCH</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"200px"}}
      className="d-block w-100 "
      src="./images/her3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>ENJOY THE FUN</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Hero
