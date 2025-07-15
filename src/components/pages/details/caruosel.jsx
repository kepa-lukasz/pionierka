import React, { useState } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

export default function ImageCarousel({ source }) {
  const images = [
    {
      src: process.env.PUBLIC_URL + `${source}/front.jpg`,
      title: 'Widok z przodu',
    },
    {
      src: process.env.PUBLIC_URL + `${source}/side.jpg`,
      title: 'Widok z boku',
    },
    {
      src: process.env.PUBLIC_URL + `${source}/top.jpg`,
      title: 'Widok z góry',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container style={{ overflow: 'hidden' }}>
      {/* Miniaturki u góry */}
      

      {/* Podgląd na dole – z wrażeniem "odsunięcia" */}
      <div className="text-center mt-n5 ">
        <h5 className="mb-3">{images[activeIndex].title}</h5>
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].title}
          fluid
          rounded
          style={{
            width: "100%",
            objectFit: 'contain',
            boxShadow: '0 0 25px rgba(0,0,0,0.2)',
          }}
        />
      </div>
      <Row className="justify-content-center mb-3 py-1">
        {images.map((img, index) => (
          <Col key={index}  className="text-center">
            <Card
              onClick={() => setActiveIndex(index)}
              className={`p-1 mb-2 border-2 ${
                index === activeIndex ? 'border-primary' : 'border-light'
              }`}
              style={{ cursor: 'pointer' }}
            >
              <Card.Img
                src={img.src}
                alt={img.title}
                variant="top"
                style={{ height: '80px', objectFit: 'cover' }}
              />
              <Card.Body className="p-1">
                <small className="text-muted d-block">{img.title}</small>
                {index === activeIndex && (
                  <FaCheckCircle className="text-primary mt-1" />
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
