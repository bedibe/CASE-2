import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-5'>
            <Col sm="10" md="10">
                <h3 className='sobre'>Sobre Nós</h3>
                <p className='desc'>
                Somos uma empresa de tecnologia e inovação que hoje busca o seu espaço como plataforma de Planejamento de viagens! 
Com a missão de otimizar viagens por meio de tecnologia, conseguimos chegar cada vez mais longe, visando sempre otimizar também o tempo dos nossos viajantes. Afinal, 
não podemos nos esquecer do nosso princípio fundamental: libertar as pessoas de preocupações. 
Nisso, buscamos proporcionar aos clientes um momento de lazer e pausa na rotina, sem qualquer estresse.
                </p>
            </Col>
        </Row>
       
        </>
    )
}

export default Depoimentos