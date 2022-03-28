import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import BackBtn from '../../components/BackBtn/BackBtn'
import notificationService from '../../services/notification.service'
import './CheckInSuccess.scss'

export default function CheckInSuccess({location}) {
    const { state } = useLocation();
    useEffect(async ()=> {
        await notificationService.sendNotifications(state.users, 'Your sessions is about to start! Please proceed to the designated study room.')
    }, [])
    console.log(state);
    return (
        <Container className='checkin-success'>
            <BackBtn link='/checkin'/>
            <Row className='w-100'>
                <Col>
                    <div className='w-100 justify-content-center align-items-center text-center'>
                        <img src={require('../../assets/qrscan.png')} style={{width:'50vw'}} className='mx-auto ' alt='scan success'/>     
                    </div>
                </Col>
            </Row>
            <Row className='w-100 p-5'>
                <Col>
                    <p className='checkin-header'>QR CODE SCAN SUCCESS!</p>
                    <p  className='checkin-text'>Room Name: {state.room.room_name}</p>   
                    <p  className='checkin-text'>Date: {state.date}</p>   
                    <p  className='checkin-text'>Time: {state.time}</p>         
                </Col>
            </Row>
        </Container>
    )
}