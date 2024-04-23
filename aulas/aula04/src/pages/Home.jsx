import Titulo from '../components/Titulo';

function Home(){

    const items = ["Item1", "Item2", "Item3"];

    return <>
    <Titulo text="Home"/>
    <ul>
        {
            items.map((elemento) => (<li>{elemento}</li>))
        }
    </ul>
    </>
}

export default Home;