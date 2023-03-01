import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-5'>
            <Col sm="7" md="2" className='img2'>
                <img src="https://www.guiadecidades.com/wp-content/uploads/2021/05/passagens-aereas-baratas.jpg" alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="10" md="10">
                <strong>Sobre</strong>
                <p>
                Somos uma empresa de tecnologia e inovação que hoje busca o seu espaço como plataforma de viagens online e estamos facilitando a compra de viagens online no Brasil desde 2020! 
Com a missão de otimizar viagens por meio de tecnologia, conseguimos chegar cada vez mais longe, visando sempre otimizar também o tempo dos nossos viajantes através da ciência. 
Não podemos nos esquecer do nosso princípio fundamental: libertar as pessoas de preocupações. 
Afinal, buscamos proporcionar aos clientes um momento de lazer e pausa na rotina, sem qualquer estresse.

Além do Brasil, já estamos em mais de 4.700 cidades internacionais, contabilizando mais de 500 mil usuários registrados na plataforma. Nos anos de 2020 e 2021, nosso volume bruto de mercadorias (GMV) foi de respectivamente R$1,8bi e R$1,9bi.
Somos uma empresa feita de pessoas para pessoas e conseguimos deixar a experiência de viajar mais simples, acessível e humana para os nossos viajantes. Afinal, it's all about people! 
Ao mesmo tempo que buscamos humanizar processos, também queremos entregar inovação. Por isso, otimizar viagens através da tecnologia é o compromisso do Hurb.
Estamos transformando o sonho de milhares de pessoas em realidade porque acreditamos na democratização do acesso à viajar. Aqui você sempre vai estar em primeiro lugar!
                </p>
            </Col>
        </Row>
       
        </>
    )
}

export default Depoimentos