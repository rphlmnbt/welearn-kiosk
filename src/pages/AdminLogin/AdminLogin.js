import React, { useRef, useState } from 'react'
import { Formik } from 'formik'
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import schema from './AdminLogin.schema'
import logo from '../../assets/logo.png'
import './AdminLogin.scss'
import BackBtn from '../../components/BackBtn/BackBtn'
import adminService from '../../services/admin.service'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions/adminAction'

export default function AdminLogin() {
    const formRef = useRef()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const [openModal, setOpenModal] = useState(false);

    const OpenModal = () => setOpenModal(true);
    const CloseModal = () => setOpenModal(false);

    const handleSubmit = (values) => {
        adminService.logIn(values.email,values.password)
        .then(response => {
            
            if (response.status == 200) {
                console.log(response.data.admin)
                dispatch(logIn(response.data.admin))
                navigate('/admin-tools')
            }
        }).catch(error => {
            console.log(error)
            OpenModal()
        })
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            innerRef = {formRef}
            initialValues={{
                email: '',
                password: ''
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                isInvalid,
                errors,
            }) => (
                <Container className="login">
                    <Modal
                        show={openModal}
                        onHide={CloseModal}
                        backdrop="static"
                        keyboard={false}
                        centered
                    >
                        <Modal.Body>
                           Invalid Credentials. Try Again!
                        </Modal.Body>
                        <div className='d-flex justify-content-center'>
                            <Button 
                                className="welearn-btn m-2 w-25"
                                onClick={CloseModal}
                            >
                                Try Again
                            </Button>
                        </div>
                    </Modal>
                    <BackBtn link='/'/>
                    <Row className="justify-content-center w-100 login-panel">
                        <Col lg={6} className="shadow splash">
                            <div className="pt-3 d-flex">
                                <img 
                                    src={logo} 
                                    alt="welearn-logo"
                                    style={{padding : "5px"}}
                                    height={"250px"}
                                />
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <h3>WeLearn</h3>
                                <p >Digital Collaborative Learning Platform</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className="text-center shadow p-3 bg-white form">
                            <div className="pb-3 mb-3 mx-auto" >
                                <p className="form-title">Log In</p><br />
                                <IconContext.Provider value={{size:"80px", color:"EF4765"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="email">
                                    <Form.Label className="form-label w-100">Email</Form.Label>
                                    <Form.Control 
                                        className="rounded"
                                        type="text" 
                                        name="email" 
                                        value={values.email} 
                                        onChange={handleChange} 
                                        isInvalid={touched.email && !!errors.email} 
                                        placeholder="Enter Email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label className="form-label w-100">Password</Form.Label>
                                    <Form.Control
                                        className="rounded" 
                                        type="password" 
                                        name="password" 
                                        value={values.password} 
                                        onChange={handleChange} 
                                        isInvalid={touched.password && !!errors.password} 
                                        placeholder="Enter Password"
                                    />
                                </Form.Group>
                                <Button 
                                        variant="primary btn-block" 
                                        type="submit" 
                                        className="welearn-btn mt-4"
                                        onClick={handleSubmit}
                                    >
                                        Log In
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Log In Failed</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please make sure your credentials are correct.</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            )}
        </Formik>
    )
}