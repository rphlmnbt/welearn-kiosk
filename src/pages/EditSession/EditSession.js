import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik';
import schema from './EditSession.schema'
import BackBtn from '../../components/BackBtn/BackBtn';
import { useLocation, Link } from 'react-router-dom';
import './EditSession.scss'

export default function EditSession() {
    const { state } = useLocation();
    const formRef = useRef()
    useEffect(() => {
       console.log(state)
        // sessionService.getAllSessions()
        // .then(response => {
        //     setData(response.data)
        // }).catch(error => {
        //     console.log(error)
        // })
    }, []);

    const initialValues = {
        session_name: state.session_name,
        date: state.date,
        time: state.time,
        room_name: state.room.room_name
    }
    
    return (
        <Formik
            validationSchema={schema}
            initialValues={ initialValues}
            enableReinitialize
            onSubmit={()=>{console.log(initialValues)}}
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
            }) => ( 
                <Container className='edit'>
                    <BackBtn link='/admin-tools'/>
                    <Row>
                        <Col>
                            <img src={require('../../assets/wl-white.png')} style={{width:'25vw'}} className='mx-auto '/>      
                        </Col>
                    </Row>
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
                                                    type="text" 
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
                                                <Form.Control 
                                                    type="text" 
                                                    name="time" 
                                                    value={values.time} 
                                                    onChange={handleChange}
                                                    isValid={touched.time && !errors.time}
                                                    isInvalid={touched.time && !!errors.time} 
                                                    placeholder="Time" 
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.time}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="g-5 mb-3">
                                        <Col md>
                                            <Form.Group controlId="date">
                                                <Form.Label className='edit-label'>Date</Form.Label>
                                                <Form.Control 
                                                    type="text" 
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
                                    <Row className='d-flex justify-content-center'>
                                        <Button 
                                            type="submit" 
                                            className="welearn-btn m-4 w-50"
                                        >
                                            Apply Changes
                                        </Button>
                                    </Row>
                                    
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            )}
        </Formik>
    )
}