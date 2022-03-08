import React, {} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Dashboard.scss'

export default function Dashboard() {
    return (
        <Container className='dashboard'>
            <Row className='w-100 '>
                <Col>
                    <Link to="/checkin" style={{ textDecoration: 'none' }}>
                        <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                            <img src={require('../../assets/qr-code.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>CHECK IN</h4>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to="/checkout" style={{ textDecoration: 'none' }}>
                        <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                            <img src={require('../../assets/check-out.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>CHECK OUT</h4>
                        </div>
                    </Link>
                    
                </Col>
            </Row>
            <Row className='w-100'>
                
                <Col>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                            <img src={require('../../assets/booking.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>VIEW RESERVATIONS</h4>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                            <img src={require('../../assets/librarian.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>ADMIN TOOLS</h4>
                        </div>
                    </Link>
                    
                </Col>
            </Row>
        </Container> 

    )
}
