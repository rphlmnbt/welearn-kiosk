import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Form, Col, Button, Modal } from 'react-bootstrap'
import { Formik, Field } from 'formik';
import schema from './EditSession.schema'
import BackBtn from '../../components/BackBtn/BackBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditSession.scss'
import roomService from '../../services/room.service';
import moment from 'moment';
import sessionService from '../../services/session.service';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from 'react-redux'
import notificationService from '../../services/notification.service';

export default function EditSession() {
    const formRef = useRef()
    const [rooms, setRooms] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    let [color, setColor] = useState("#EF4765");

    const [openModal, setOpenModal] = useState(false);

    const OpenModal = () => setOpenModal(true);
    const CloseModal = () => setOpenModal(false);

    const session = useSelector(state => state.session.session)

    useEffect(() => {
        console.log(session)
        roomService.getRooms()
        .then(response => {
            setRooms(response.data)
            console.log(response.data)
            setLoading(false)
            
        })
     }, [])

    const handleSubmit = (values) => {
        console.log(values)
        sessionService.updateSession(session.uuid_session, values.session_name, moment(values.date).format('MMM D, YYYY'), values.time, session.session_creator, values.uuid_room)
        .then(response => {
            if(response.status == 200) {
                notificationService.sendNotifications(session.users, 'Your session has been edited by an administrator! Please view the updated details on the app.')
                navigate('/admin-tools')
            } else if (response.status == 400) {
                OpenModal();
            }
        }).catch(error => {
            console.log(error)
            OpenModal();
        })
    }
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        `;

    const initialValues = {
        session_name: session.session_name,
        date: moment(session.date).local().format("YYYY-MM-DD"),
        time: session.time,
        uuid_room: session.uuid_room
    }

    const deleteSession = () => {
        sessionService.deleteSession(session.uuid_session)
        .then(response => {
            if (response.status == 200) {
                navigate('/admin-tools')
            }
        }).catch(error => {
            console.log(error)
        })
} 

    if (loading) {
        return (
            <div className="loading">
              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          );
    } else {
        return (
            <Formik
                validationSchema={schema}
                initialValues={ initialValues}
                enableReinitialize
                onSubmit={handleSubmit}
                innerRef = {formRef}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                    setFieldValue
                }) => ( 
                    <Container className='edit'>
                        <BackBtn link='/admin-tools'/>
                        <Row className='edit-panel'>
                            <Col>
                                <Row>
                                    <Col className="p-2 mb-2">
                                        <div className='box-title ' >
                                            Modify Session
                                        </div>
                                    </Col>
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Row className="g-5 mb-3">
                                            <Col md>
                                                <Form.Group controlId="session_name">
                                                    <Form.Label className='edit-label'>Session Name</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        name="session_name" 
                                                        value={values.session_name} 
                                                        onChange={handleChange}
                                                        isValid={touched.session_name && !errors.session_name}
                                                        isInvalid={touched.session_name && !!errors.session_name} 
                                                        placeholder="Session Name" 
                                                    />
    
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.session_name}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="g-5 mb-3">
                                            <Col md>
                                                <Form.Group controlId="date">
                                                    <Form.Label className='edit-label'>Date</Form.Label>
                                                    <Form.Control 
                                                        type="date" 
                                                        name="date" 
                                                        value={values.date} 
                                                        onChange={handleChange}
                                                        isValid={touched.date && !errors.date} 
                                                        isInvalid={touched.date && !!errors.date} 
                                                        placeholder="Date" 
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.date}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                
                                            </Col>
                                        </Row>
                                        <Row className="g-5 mb-3">
                                            <Col md>
                                                <Form.Group controlId="time">
                                                    <Form.Label className='edit-label'>Time</Form.Label>
                                                    <Form.Select 
                                                        aria-label="Default select example"
                                                        type="text" 
                                                        name="time" 
                                                        value={values.time} 
                                                        onChange={handleChange}
                                                        isValid={touched.time && !errors.time}
                                                        isInvalid={touched.time && !!errors.time} 
                                                        placeholder="Time"
                                                    >
                                                        <option value="7:00 AM to 8:00 AM">7:00 AM to 8:00 AM</option>
                                                        <option value="8:00 AM to 9:00 AM">8:00 AM to 9:00 AM</option>
                                                        <option value="9:00 AM to 10:00 AM">9:00 AM to 10:00 AM</option>
                                                        <option value="10:00 AM to 11:00 AM">10:00 AM to 11:00 AM</option>
                                                        <option value="11:00 AM to 12:00 PM">11:00 AM to 12:00 PM</option>
                                                        <option value="12:00 PM to 1:00 PM">12:00 PM to 1:00 PM</option>
                                                        <option value="1:00 PM to 2:00 PM">1:00 PM to 2:00 PM</option>
                                                        <option value="2:00 PM to 3:00 PM">2:00 PM to 3:00 PM</option>
                                                        <option value="3:00 PM to 4:00 PM">3:00 PM to 4:00 PM</option>
                                                        <option value="4:00 PM to 5:00 PM">4:00 PM to 5:00 PM</option>
                                                        <option value="5:00 PM to 6:00 PM">5:00 PM to 6:00 PM</option>
                                                        <option value="6:00 PM to 7:00 PM">6:00 PM to 7:00 PM</option>
                                                    </Form.Select>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.time}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="g-5 mb-3">
                                            <Col md>
                                                <Form.Group controlId="uuid_room">
                                                    <Form.Label className='edit-label'>Room Name</Form.Label>
                                                     <Form.Select 
                                                        aria-label="Default select example"
                                                        name="uuid_room" 
                                                        value={values.uuid_room} 
                                                        onChange={handleChange}
                                                        isValid={touched.uuid_room && !errors.uuid_room} 
                                                        isInvalid={touched.uuid_room && !!errors.uuid_room} 
                                                        placeholder="Room Name" 
                                                    >
                                                        {rooms.map(element => {
                                                            return <option key={element.uuid_room} value={element.uuid_room}>{element.room_name}</option>
                                                        })}
                                                    </Form.Select>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.uuid_room}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className='d-flex justify-content-center'>
                                            <Col className=' d-flex justify-content-start'>
                                                <Button 
                                                    className="sub-btn my-2"
                                                    onClick={()=>navigate('/view-members')}
                                                >
                                                    View Members
                                                </Button>
                                            </Col>
                                            <Col className=' d-flex justify-content-center'>
                                                <Button 
                                                    type="submit" 
                                                    className="welearn-btn my-2"
                                                >
                                                    Apply Changes
                                                </Button>
                                            </Col>
                                            <Col className=' d-flex justify-content-end'>
                                                <Button 
                                                    className="sub-btn my-2"
                                                    onClick={deleteSession}
                                                >
                                                    Delete Session
                                                </Button>
                                            </Col>
                                            
                                        </Row>
                            
                                        
                                    </Form>
                                </Row>
                            </Col>
                        </Row>

                        <Modal
                            show={openModal}
                            onHide={CloseModal}
                            backdrop="static"
                            keyboard={false}
                            centered
                        >
                            <Modal.Body>
                            Failed! The room seems to be taken or the user has other sessions for the same date and time!
                            </Modal.Body>
                            <div className='d-flex justify-content-center'>
                            <Button 
                            className="welearn-btn m-2 w-25"
                            onClick={CloseModal}>
                                Try Again
                            </Button>
                            </div>
                        </Modal>

                    </Container>
                )}
            </Formik>
        )
    }
    
}