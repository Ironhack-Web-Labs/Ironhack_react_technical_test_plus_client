import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from "react-router-dom";

import PhoneImages from './../../utils/PhoneImages'



const PhoneCard = ({ id, name, description, imageFileName }) => {
    const navigate = useNavigate()
    const img = PhoneImages[imageFileName.split('.')[0]]
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} style={{ height: '300px' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ height: '300px' }}>
                    {description}
                </Card.Text>
                <Button onClick={() => { navigate(`${id}`) }}> Details</Button>
            </Card.Body>
        </Card>
    );
}

export default PhoneCard