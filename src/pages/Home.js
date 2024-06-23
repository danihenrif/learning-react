import { useState } from 'react';
import HelloWorld from "../components/HelloWorld"
import SayMyName from '../components/SayMyName';
import List from '../components/List';
import Evento from '../components/eventos/Evento';
import Form from '../components/Form';
import Condicional from '../components/Condicional';
import OutraLista from '../components/OutraLista';
import SeuNome from '../components/SeuNome';
import Saudacao from '../components/Saudacao';
function Home() {
    const [nome, setNome] = useState()
    const name = 'Daniel';
    const meusItens = [1, 2, 3, 4, 5, 6,];
    
    return (
        <div className='App'> 
            <HelloWorld />
            <SayMyName name="Matheus" />
            <List />
            <Evento numero={1} />
            <Evento numero={2} />
            <Form />
            <Condicional numero={11} />
            <OutraLista itens={meusItens} />
            <OutraLista itens={[]} />
            <SeuNome setNome={setNome} />
            {nome}
            <Saudacao nome={nome} />
        </div>
    )
}
export default Home