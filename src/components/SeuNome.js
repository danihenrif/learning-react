function SeuNome({setNome}) {
    
    return (
        <div>
            <h1>Digite o nome:</h1>
            <input type="text" placeholder="Nome :" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}
export default SeuNome;