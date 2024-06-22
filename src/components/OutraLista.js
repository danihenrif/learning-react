function OutraLista({itens}) {
    return (
        <>
            <h1>Lista:</h1>
            { itens.length > 0 ? 
                <ul>
                {itens.map((item, index) => <li key={index}>{item}</li>)}
            </ul> : <p>Lista vazia</p>
            }
        </>
    )
}
export default OutraLista;