import React, {useEffect, useState} from 'react'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Dashboard.scss'

function Dashboard() {
    return(
        <Container className='dashboard'>
            <Row >
                <Col>
                    <img src={require('../../assets/wl-white.png')} className='dashboard-header my-5' />
                </Col>
            </Row>
            <Row className='w-100'>
                
                <Col>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                            <img src={require('../../assets/qr-code.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>CHECK IN/OUT RESERVATION</h4>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className='dashboard-card mx-auto p-3 d-flex justify-content-center align-items-center flex-column'>
                            <img src={require('../../assets/booking.png')} className='dashboard-image' />
                            <h4 className='dashboard-text'>ADMIN TOOLS</h4>
                        </div>
                    </Link>
                    
                </Col>
            </Row>
        </Container> 

    )
}


export default Dashboard