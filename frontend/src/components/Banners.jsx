import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.f2fitness.com.br/wp-content/uploads/2015/12/imagens-praia-52bd81-1024x576.jpg"
                        alt="Slide incrível"
                    />
                    <Carousel.Caption>
                        
                        <p>Um app para facilitar a vida do estudante!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.carpemundi.com.br/wp-content/uploads/2021/06/pedra-do-bau-sao-bento-do-sapucai.jpg"
                        alt="Outro slide incrível"
                    />
                    <Carousel.Caption>
                        <h5>Quais são as funcionalidades?</h5>
                        <p>Confira os principais recursos disponíveis no app</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://seguroviagempro.com.br/wp-content/uploads/2022/01/seguro-viagem-cruzeiro-internacional.jpg"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                        <h5>Contato para parcerias?</h5>
                        <p>
                            Entre em contato com a nossa equipe para conversar sobre oportunidades de parceria
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners