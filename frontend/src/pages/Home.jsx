import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Banners from '../components/Banners'



function Home() {
    return (
        <>
            <Banners />
            <Container>
                <Destaques />
            </Container>
        </>
    );
}

export default Home;