import React, { useState } from 'react';

function Condicional(props) {
    const [email, setEmail] = useState('');

    function enviarEmail(e) {
        e.preventDefault();
        alert(`Email enviado com sucesso: ${email}`);
    }

    return (
        <div>
            <h1>Condicional</h1>
            {props.numero % 2 === 0 ? <p>Par</p> : <p>Ímpar</p>}
            <form>
                <input
                    type="email"
                    placeholder="Digite o email:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            {
                email && (
                    <div>
                        <p>Email: {email}</p>
                    </div>
                )
            }
            </form>
        </div>
    );
}

export default Condicional;
