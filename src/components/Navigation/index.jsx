import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const Navigate = useNavigate()

    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand onClick={() => Navigate('/')}>Home</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation