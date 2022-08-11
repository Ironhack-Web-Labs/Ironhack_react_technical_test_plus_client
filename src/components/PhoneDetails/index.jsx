
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


import PhoneImages from './../../utils/PhoneImages'

const phoneDetails = (props) => {

    const { name, description, color, imageFileName, manufacturer, price, ram, screen } = props
    const img = PhoneImages[imageFileName.split('.')[0]]

    return (
        <Card>
            <fugure style={{ display: 'flex', justifyContent: 'center' }}>
                <Card.Img variant="top" src={img} style={{ width: '300px' }} />
            </fugure>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Specs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>color</td>
                        <td>{color}</td>

                    </tr>
                    <tr>
                        <td>price</td>
                        <td>{price}</td>
                    </tr>
                    <tr>
                        <td>ram</td>
                        <td>{ram}</td>
                    </tr>
                    <tr>
                        <td>screen</td>
                        <td>{screen}</td>
                    </tr>
                </tbody>
            </Table>

        </Card>
    );
}

export default phoneDetails