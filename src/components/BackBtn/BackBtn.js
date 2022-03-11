import React from "react";
import { Link } from "react-router-dom";
import './BackBtn.scss'

export default function BackBtn(props) {
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <img src={require('../../assets/back.png')} className='back-btn' alt='scan success'/>  
        </Link>
    )
}