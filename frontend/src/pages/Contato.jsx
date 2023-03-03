import {Container, Button, Form} from 'react-bootstrap'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <Container className='conteudo-margin'>
            <h1>Contato</h1>
            <p>Entre em contato conosco</p>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="CPF">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="number" placeholder="Digite seu cpf" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Data de nascimento">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="date" placeholder="Digite sua data de nascimento" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="tel" placeholder="Digite seu telefone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Deixe seu feedback" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Enviar contato
                </Button>
            </Form>

          
        </Container>
    );
}

export default Contato;