import { Carousel, Container } from 'react-bootstrap';
import React from 'react';

const ItemCarousel = (props) => {
  const [images, setImages] = React.useState(props.item.images);

  return (
    <Container fluid='xl'>
      <Carousel>
        {images.map((image, idx) => {
          const txt = `Slide ` + idx;
          return (
            <Carousel.Item interval={5000} key={image}>
              <img className='d-block w-100' src={image} alt={txt} thumbnail />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default ItemCarousel;
