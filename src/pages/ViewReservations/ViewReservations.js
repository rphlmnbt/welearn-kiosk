import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ViewReservations.scss'
import BackBtn from '../../components/BackBtn/BackBtn';
import BootstrapTable from 'react-bootstrap-table-next';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default function CheckIn() {

    const Data = [
        {session_name: "Raph's Session", date: "March 09, 2022", time: "7:00 AM to 8:00 AM", room_name: "Room-1" },
        {session_name: "Yennyl's Session", date: "March 09, 2022", time: "8:00 AM to 9:00 AM", room_name: "Room-2" },
        {session_name: "Ailger's Session", date: "March 09, 2022", time: "9:00 AM to 10:00 AM", room_name: "Room-3" },
        {session_name: "Gwen's Session", date: "March 09, 2022", time: "10:00 AM to 11:00 AM", room_name: "Room-4" },
        {session_name: "Session-1", date: "March 09, 2022", time: "11:00 AM to 12:00 PM", room_name: "Room-2" },
        {session_name: "Session-2", date: "March 09, 2022", time: "12:00 PM to 1:00 PM", room_name: "Room-3" },
        {session_name: "Session-3", date: "March 09, 2022", time: "1:00 PM to 2:00 PM", room_name: "Room-1" },
        {session_name: "Session-4", date: "March 09, 2022", time: "2:00 PM to 3:00 PM", room_name: "Room-2" },
        {session_name: "Session-5", date: "March 09, 2022", time: "3:00 PM to 4:00 PM", room_name: "Room-3" },
        {session_name: "Tilapia Session", date: "March 09, 2022", time: "4:00 PM to 5:00 PM", room_name: "Room-4" },
        {session_name: "Session-6", date: "March 10, 2022", time: "11:00 AM to 12:00 PM", room_name: "Room-2" },
        {session_name: "Session-7", date: "March 10, 2022", time: "12:00 PM to 1:00 PM", room_name: "Room-3" },
        {session_name: "Session-8", date: "March 10, 2022", time: "1:00 PM to 2:00 PM", room_name: "Room-1" },
        {session_name: "Session-9", date: "March 10, 2022", time: "2:00 PM to 3:00 PM", room_name: "Room-2" },
        {session_name: "Session-10", date: "March 10, 2022", time: "3:00 PM to 4:00 PM", room_name: "Room-3" },
        // {id: 1, name: 'Raphael', room: '1'},
        // {id: 2, name: 'Ailger', room: '2'},
        // {id: 3, name: 'Yennyl', room: '2'},
        // {id: 4, name: 'Gwen', room: '1'},
        // {id: 6, name: 'Glenn', room: '3'},
        // {id: 7, name: 'Ailene', room: '4'},
        // {id: 8, name: 'Matthew', room: '5'},
        // {id: 9, name: 'Sofia', room: '5'},
        // {id: 10, name: 'Elle', room: '4'},
        // {id: 11, name: 'Raphael', room: '1'},
        // {id: 12, name: 'Ailger', room: '2'},
        // {id: 13, name: 'Yennyl', room: '2'},
        // {id: 14, name: 'Gwen', room: '1'},
        // {id: 15, name: 'Glenn', room: '3'},
        // {id: 16, name: 'Ailene', room: '4'},
        // {id: 17, name: 'Matthew', room: '5'},
        // {id: 18, name: 'Sofia', room: '5'},
        // {id: 19, name: 'Elle', room: '4'},
        // {id: 20, name: 'Yennyl', room: '2'},
        // {id: 21, name: 'Gwen', room: '1'},
        // {id: 22, name: 'Glenn', room: '3'},
        // {id: 23, name: 'Ailene', room: '4'},
        // {id: 24, name: 'Matthew', room: '5'},
        // {id: 25, name: 'Sofia', room: '5'},
        // {id: 26, name: 'Elle', room: '4'},
        
    ];

    const columns = [{
        dataField: 'room_name',
        text: 'Room Name',
        filter: textFilter(),
      }, {
        dataField: 'session_name',
        text: 'Session Name',
        
      }, {
        dataField: 'time',
        text: 'Time',
        filter: textFilter()
      },
        {
            dataField: 'date',
            text: 'Date',
            filter: textFilter()
        
      }];

      const options = {
        custom: true,
        totalSize: Data.length
      };

    return (
        <Container className='reservations'>
            <BackBtn link='/'/>
            <Col>
                <img src={require('../../assets/wl-white.png')} style={{width:'25vw'}} className='mx-auto '/>      
            </Col>
            <Row className='rw'>
                <Col>
                <PaginationProvider
                    pagination={ paginationFactory(options) }
                    >
                    {
                        ({
                        paginationProps,
                        paginationTableProps
                        }) => (
                        <div>
                            <PaginationTotalStandalone
                            { ...paginationProps }
                            />
                            <PaginationListStandalone
                            { ...paginationProps }
                            />
                            <BootstrapTable
                            keyField="time"
                            data={ Data }
                            columns={ columns }
                            filter={ filterFactory() }
                            { ...paginationTableProps }
                            />
                        </div>
                        )
                    }
                    </PaginationProvider>
                </Col>
            </Row>
        </Container>
    )
}