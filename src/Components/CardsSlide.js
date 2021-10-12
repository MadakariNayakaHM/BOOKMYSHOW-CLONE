import React from 'react'
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"
function CardsSlide() {
    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
  <CardGroup>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov1.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}}/>
    <Card.Body>
      <Card.Title>Jungle</Card.Title>
      <Card.Text>
        This the movie ogf horror, and thriller watch in  theator for more info!!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov2.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}} />
    <Card.Body>
      <Card.Title>Devine</Card.Title>
      <Card.Text>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempore beatae officia nulla libero est!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov3.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}}/>
    <Card.Body>
      <Card.Title>Godzilla</Card.Title>
      <Card.Text>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam consequuntur maxime dolores a magnam.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
  </Carousel.Item>


  <Carousel.Item>
    <CardGroup>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov4.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}}/>
    <Card.Body>
      <Card.Title>MOnkey</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod officia quibusdam fuga obcaecati amet suscipit!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov5.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}} />
    <Card.Body>
      <Card.Title>saahaaa</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto et placeat perspiciatis quasi! Similique, natus?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="../images/mov6.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}} />
    <Card.Body>
      <Card.Title>varuna</Card.Title>
      <Card.Text>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae rerum perferendis autem unde accusantium.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
  </Carousel.Item>


  <Carousel.Item>
    <CardGroup>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov7.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}} />
    <Card.Body>
      <Card.Title>Gossip</Card.Title>
      <Card.Text>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur autem nemo iste nobis porro..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px"}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov8.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}} />
    <Card.Body>
      <Card.Title>Moth</Card.Title>
      <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sequi voluptatem asperiores, molestiae itaque obcaecati!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{display:"flex",justifyContent:"center", margin:"10px",}} xs={1} md={6} lg={4}>
    <Card.Img variant="top" src="./images/mov9.jpg" style={{height:"200px",width:"90%",display:"block",margin:"auto"}} />
    <Card.Body>
      <Card.Title>JAYHOO</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officiis deleniti magnam quaerat dolorum velit!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CardsSlide
