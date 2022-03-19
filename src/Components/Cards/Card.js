import React from 'react';
import Image from 'react-bootstrap/Image'
import phone from './../../images/phone.png'
import{Row,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const card = () => {
    return (
        <div>
 {/* <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={phone} style={{width:'48px'}} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>  */}


<div className="card" style={{width: "18rem"}}>
<img src={phone} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


        </div>
    );
};

export default card;

