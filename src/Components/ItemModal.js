import React from 'react';
import { Col, Row, Modal, Button, Container } from 'react-bootstrap';
import ItemCarousel from './ItemCarousel';
function ItemModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName='modal-90w'
      sx={{ width: '90%' }}
      aria-labelledby='contained-modal-title-vcenter'
      animation='true'
      size='xl'
      centered
    >
      <Modal.Header className='m-2'>
        <Modal.Title id='contained-modal-title-vcenter'>
          <h5 className='ml-4 cards__item__text'>{props.item.title}</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
          <Row>
            <ItemCarousel {...props} />
          </Row>

          <Row className='mt-3 mb-3'>
            <Col xs={12} md={8}>
              <h5>{props.item.text}</h5>
            </Col>
            <Col xs={6} md={4} style={{ textAlign: 'right' }}>
              <h5>{props.item.price} ₪ </h5>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemModal;
