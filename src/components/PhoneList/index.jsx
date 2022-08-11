import { useEffect, useState } from 'react';

import phoneServices from './../../services/phone.services';
import PhoneCard from '../PhoneCard';

import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PhoneList = () => {
    const [phoneList, setPhoneList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        phoneServices
            .getPhones()
            .then(({ data }) => {
                setPhoneList(data)
                setIsLoading(false)
            })
    }, [])

    const phonesListJsx = phoneList.map(phone => {
        return (
            <Col xs={12} md={4} key={phone.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <PhoneCard  {...phone} />
            </Col>
        )
    })

    return (
        <Container>
            {isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

                :
                <Row>
                    {phonesListJsx}
                </Row>
            }
        </Container>
    )
}

export default PhoneList