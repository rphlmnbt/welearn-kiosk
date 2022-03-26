import React, {} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Dashboard.scss'

export default function Dashboard() {
    return (
        <Container className='dashboard'>
            <Row className='w-100 '>
                <Col>
                    <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                        <Link to="/checkin" style={{ textDecoration: 'none' }}>
                            <img src={require('../../assets/qr-code.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>CHECK IN</h4>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                            <img src={require('../../assets/check-out.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>CHECK OUT</h4>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row className='w-100'>
                <Col> 
                    <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                        <Link to="reservations" style={{ textDecoration: 'none' }}>
                            <img src={require('../../assets/booking.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>VIEW RESERVATIONS</h4>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <img src={require('../../assets/librarian.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>ADMIN TOOLS</h4>
                        </Link>
                    </div>    
                </Col>
            </Row>
        </Container> 

    )
}
