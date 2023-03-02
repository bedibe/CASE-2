import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.LjsXuuso9sdcMgElme7Y3AHaE8?pid=ImgDet&rs=1" />
                    <Card.Body>
                        <Card.Title>Paris/França</Card.Title>
                        <Card.Text>
                           Viage com segurança, conforto, tranquilidade e muito mais.
                           Assine o nosso pacote de viagem.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Saiba mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://wtourtravel.com/wp-content/uploads/2021/12/WTOUR-Fotos-de-Imagens-1-1.png" />
                    <Card.Body>
                        <Card.Title>Rio de Janeiro/Brasil</Card.Title>
                        <Card.Text>
                        Viage com segurança, conforto, tranquilidade e muito mais.
                           Assine o nosso pacote de viagem.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Saiba mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://www.enjoytrip.com.br/wp-content/uploads/2021/05/ilhas-maldivas.png" />
                    <Card.Body>
                        <Card.Title>Maldivas/República das Maldivas</Card.Title>
                        <Card.Text>
                        Viage com segurança, conforto, tranquilidade e muito mais.
                           Assine o nosso pacote de viagem.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                        <Button variant="warning">Saiba mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;
