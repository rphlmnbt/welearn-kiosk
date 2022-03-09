import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ViewReservations.scss'
import BackBtn from '../../components/BackBtn/BackBtn';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import sessionService from '../../services/session.service';

export default function CheckIn() {

    useEffect(() => {
        sessionService.getAllSessions()
        .then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const [data, setData] = useState([]);

    // const data = [
    //     {session_name: "Raph's Session", date: "March 09, 2022", time: "7:00 AM to 8:00 AM", room_name: "Room-1" },
    //     {session_name: "Yennyl's Session", date: "March 09, 2022", time: "8:00 AM to 9:00 AM", room_name: "Room-2" },
    //     {session_name: "Ailger's Session", date: "March 09, 2022", time: "9:00 AM to 10:00 AM", room_name: "Room-3" },
    //     {session_name: "Gwen's Session", date: "March 09, 2022", time: "10:00 AM to 11:00 AM", room_name: "Room-4" },
    //     {session_name: "Session-1", date: "March 09, 2022", time: "11:00 AM to 12:00 PM", room_name: "Room-2" },
    //     {session_name: "Session-2", date: "March 09, 2022", time: "12:00 PM to 1:00 PM", room_name: "Room-3" },
    //     {session_name: "Session-3", date: "March 09, 2022", time: "1:00 PM to 2:00 PM", room_name: "Room-1" },
    //     {session_name: "Session-4", date: "March 09, 2022", time: "2:00 PM to 3:00 PM", room_name: "Room-2" },
    //     {session_name: "Session-5", date: "March 09, 2022", time: "3:00 PM to 4:00 PM", room_name: "Room-3" },
    //     {session_name: "Tilapia Session", date: "March 09, 2022", time: "4:00 PM to 5:00 PM", room_name: "Room-4" },
    //     {session_name: "Session-6", date: "March 10, 2022", time: "11:00 AM to 12:00 PM", room_name: "Room-2" },
    //     {session_name: "Session-7", date: "March 10, 2022", time: "12:00 PM to 1:00 PM", room_name: "Room-3" },
    //     {session_name: "Session-8", date: "March 10, 2022", time: "1:00 PM to 2:00 PM", room_name: "Room-1" },
    //     {session_name: "Session-9", date: "March 10, 2022", time: "2:00 PM to 3:00 PM", room_name: "Room-2" },
    //     {session_name: "Session-10", date: "March 10, 2022", time: "3:00 PM to 4:00 PM", room_name: "Room-3" },
    // ];

    const columns = [
        { dataField: 'session_name', text: 'Session Name'}, 
        { dataField: 'room.room_name', text: 'Room Name'}, 
        { dataField: 'time', text: 'Time'},
        { dataField: 'date', text: 'Date'}
    ];

    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 8,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
      });

    const { SearchBar, ClearSearchButton } = Search;

    return (
        <Container className='reservations'>
            <BackBtn link='/'/>
            <Col>
                <img src={require('../../assets/wl-white.png')} style={{width:'25vw'}} className='mx-auto '/>      
            </Col>
            <Row className='rw'>
                <Col>
                <ToolkitProvider
                    bootstrap4
                    keyField='id'
                    data={data}
                    columns={columns}
                    search
                        >
                        {
                            props => (
                                <>
                                    <div className="ml-2 my-2" style={{float:'left'}}>
                                        < Row>
                                            <Col lg={10} sm={12} >
                                                <SearchBar  
                                                    {...props.searchProps} 
                                                    style={{ width: "200px"}}
                                                    
                                                />
                                            </Col>
                                            <Col lg={2} sm={12}>
                                                <ClearSearchButton 
                                                    {...props.searchProps} 
                                                    className="welearn-btn"
                                                />
                                            </Col>
                                        </Row> 
                                    </div>
                                    <div className="mx-2">
                                        <BootstrapTable 
                                            defaultSorted={defaultSorted}
                                            pagination={pagination}
                                            {...props.baseProps}
                                            cellStyle={  {
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden'
                                                        
                                        } }
                                            
                                        />
                                    </div>
                                    
                                </>
                            )
                        }
                </ToolkitProvider>
                </Col>
            </Row>
        </Container>
    )
}