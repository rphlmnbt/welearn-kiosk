import React from "react";
import { Modal, Button } from "react-bootstrap";
import './GenericModal.scss'

export default function GenericModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Check Out Success!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Thank you for using WeLearn!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button className='welearn-btn' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}