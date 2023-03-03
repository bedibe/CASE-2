import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190513885/122581245-lista-de-verificaci%C3%B3n-portapapeles-con-l%C3%A1piz-dise%C3%B1o-de-ilustraciones-vectoriales.jpg" />
                    <Card.Body>
                        <Card.Title>Lista</Card.Title>
                        <Card.Text>
                           Viage com tranquilidade e muito mais.
                           Utilize nossa lista de planejamento.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Saiba mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://play-lh.googleusercontent.com/fvhPW8dpGXM42Y-6aQU8Yl25L1l_mVgeoM-n08FxAkM7umAHkNs8wcs4MA49E67a7WVt=w240-h480-rw" />
                    <Card.Body>
                        <Card.Title>Contato</Card.Title>
                        <Card.Text>
                        Entre em contato conosco para qualquer dúvida, estamos sempre a disposição!
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Saiba mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                    <Card.Body>
                        <Card.Title>Sobre Nós</Card.Title>
                        <Card.Text>
                        Saiba mais sobre a planejatour e descubra mais da nossa historia!
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
