import { Modal, Button } from 'react-bootstrap';
import React from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='light' onClick={props.onHide}>
          Close
        </Button>
        <Button
          onClick={(e) => {
            props.onClickOk(e);
            props.onHide();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalBtn(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant={props.variant} onClick={() => setModalShow(true)}>
        {props.btnText}
      </Button>

      <MyVerticallyCenteredModal
        {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalBtn;
