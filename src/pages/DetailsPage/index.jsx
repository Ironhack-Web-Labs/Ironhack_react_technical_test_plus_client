
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import phoneServices from "../../services/phone.services";
import PhoneDetails from "../../components/PhoneDetails";
import Container from "react-bootstrap/Container";

import Spinner from 'react-bootstrap/Spinner';

const DetailsPage = () => {
    const { id } = useParams()
    const [phoneDetails, setPhoneDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        phoneServices
            .getPhone(id)
            .then(({ data }) => {
                setPhoneDetails(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>


            <h2>Details</h2>
            <br />
            {isLoading ?

                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <PhoneDetails {...phoneDetails} />

            }
        </Container>

    );
}

export default DetailsPage