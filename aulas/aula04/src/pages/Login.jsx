import Titulo from '../components/Titulo';
import Container from "../components/Container";

function Login(props){
    return (
    <>
        <Container>
            <Titulo text="Login" />
            <button onClick={props.onLogar}>Entrar</button>
        </Container>
    </>
    )
}

export default Login;