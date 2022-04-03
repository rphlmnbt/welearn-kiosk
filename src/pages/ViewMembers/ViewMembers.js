import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BackBtn from '../../components/BackBtn/BackBtn';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory, {  } from 'react-bootstrap-table2-paginator';
import { useDispatch, useSelector } from 'react-redux'

export default function ViewMembers() {

    const session = useSelector(state => state.session.session)

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(session.users)

    }, []);


    const columns = [
        { dataField: 'user_detail.first_name', text: 'First Name'}, 
        { dataField: 'user_detail.last_name', text: 'Last Name'},
        { dataField: 'email', text: 'Email'},
        { dataField: 'user_detail.contact_number', text: 'Contact Number'},
        { dataField: 'user_detail.course', text: 'Course'},

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

    return (
        <Container className='reservations'>
            <BackBtn link='/edit-session'/>
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
                                    <div className="mx-2" style={{fontSize: "20px"}}>
                                        <BootstrapTable 
                                            defaultSorted={defaultSorted}
                                            pagination={pagination}
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