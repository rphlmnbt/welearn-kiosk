import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './AdminTools.scss'
import BackBtn from '../../components/BackBtn/BackBtn';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory, {  } from 'react-bootstrap-table2-paginator';
import sessionService from '../../services/session.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setSession } from '../../actions/sessionAction';

export default function AdminTools() {

    useEffect(() => {
        sessionService.getAllSessions()
        .then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        hideSizePerPage: true,
      });

    const { SearchBar, ClearSearchButton } = Search;

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: (row, isSelect, rowIndex, e) => {
          const session = row
          dispatch(setSession(session))
          navigate('/edit-session')
        },
        bgColor: '#EF4765'
      };

      

    return (
        <Container className='reservations'>
            <BackBtn link='/'/>
            <Row>
                <Col>
                    <img src={require('../../assets/wl-white.png')} style={{width:'25vw'}} className='mx-auto '/>      
                </Col>
            </Row>
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
                                    <div className="ml-2 my-2 w-100" style={{float:'left'}}>
                                        < Row >
                                            <Col sm={5} >
                                                <SearchBar  
                                                    {...props.searchProps} 
                                                    style={{ width: "200px"}}
                                                    
                                                />
                                            </Col>
                                            <Col className='pl-0'>
                                                <ClearSearchButton 
                                                    {...props.searchProps} 
                                                    className="welearn-btn"
                                                />
                                                <Button onClick={()=>navigate('/add-session')}
                                                    className="welearn-btn font-weight-bold m-1"
                                                >＋
                                                </Button>
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