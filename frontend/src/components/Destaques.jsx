import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://www.queroviajarmais.com/wp-content/uploads/2020/02/por-onde-passear-em-santo-domingo.jpg" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar o EstudoApp</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://wtourtravel.com/wp-content/uploads/2021/12/WTOUR-Fotos-de-Imagens-1-1.png" />
                    <Card.Body>
                        <Card.Title>Rápido e confiável</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://www.enjoytrip.com.br/wp-content/uploads/2021/05/ilhas-maldivas.png" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;
