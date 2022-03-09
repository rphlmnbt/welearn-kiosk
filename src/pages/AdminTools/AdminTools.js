import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AdminTools.scss'
import BackBtn from '../../components/BackBtn/BackBtn';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory, {  } from 'react-bootstrap-table2-paginator';
import sessionService from '../../services/session.service';

export default function AdminTools() {

    useEffect(() => {
        sessionService.getAllSessions()
        .then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const [data, setData] = useState([]);

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

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: (row, isSelect, rowIndex, e) => {
          console.log(row);
        },
        bgColor: '#EF4765'
      };
      

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
                    keyField='uuid_session'
                    data={data}
                    columns={columns}
                    search
                        >
                        {
                            props => (
                                <>
                                    <div className="ml-2 my-2" style={{float:'left'}}>
                                        < Row >
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
                                            selectRow={ selectRow }
                                            {...props.baseProps}
                                            cellStyle={{
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden'
                                            }}
                                            noDataIndication={ 'no results found' }
                                            
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