import Button from "../Button";
function Evento({numero}) {
    function meuEvento() {
        console.log(`Meu evento ${numero} foi disparado`)
    }

    return (
        <>
            <p>Clique para disparar o evento:</p>
            <Button event={meuEvento} text = "Primeiro evento"/>
            <button onClick={meuEvento}>Aqui</button>
        </>
    )
}
export default Evento;