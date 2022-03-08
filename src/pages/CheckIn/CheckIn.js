import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import sessionService from '../../services/session.service';
import './CheckIn.scss'
import BackBtn from '../../components/BackBtn/BackBtn';

export default function CheckIn() {
    const navigate = useNavigate();

    return (
        <Container className='checkin'>
            <BackBtn link='/'/>
            <Row className='w-100'>
                <Col>
                    <div className='w-100 justify-content-center align-items-center text-center'>
                        <img src={require('../../assets/wl-white.png')} style={{width:'30vw'}} className='mx-auto '/>      
                    </div>
                </Col>
            </Row>
            <Row className='w-100 p-2'>
                <Col>
                    <div className='qrcode-scanner mx-auto p-3'>
                        <QrReader
                            onResult={(result, error) => {
                            if (!!result) {
                                sessionService.getSession(result?.text)
                                .then(response => {
                                    if (response.status == 200) {
                                        const session = response.data
                                        navigate('/checkin-success', {state: session})
                                    }
                                }).catch(error => {
                                    console.log(error)
                                })
                               
                            }

                            if (!!error) {
                                console.info(error);
                            }
                            }}
                            videoStyle={{width: '100%', height: 'auto'}}
                            
                        />
                    </div>
                               
                </Col>
            </Row>
            <Row className='w-100 p-5'>
                <Col>
                    <h3 className='checkin-text'>PLEASE SCAN YOUR QR CODE</h3>         
                </Col>
            </Row>
        </Container>
    )
}