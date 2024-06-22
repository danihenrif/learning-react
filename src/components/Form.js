import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(nome);
        alert("Nome cadastrado com sucesso");
    }
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder="Digite o seu nome : " onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder="Digite a senha : " onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    )
}
export default Form;