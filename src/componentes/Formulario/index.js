import './Formulario.css';
import CaixaTexto from '../CaixaTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [imagem, setImagem] = useState('')
    const [especializacao, setEspecializacao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoNovoCandidato({
            nome,
            email,
            imagem,
            especializacao,
        })
        console.log('Salvando...', nome, imagem, email, especializacao)
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para se cadastrar: </h2>
                <CaixaTexto
                    obrigatorio={true}
                    label="Nome Completo:"
                    placeholder="Digite seu Nome:"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CaixaTexto
                    label="Email para contato:"
                    placeholder="Digite seu Email:"
                    valor={email}
                    aoAlterado={(valor) => setEmail(valor)}
                />
                <CaixaTexto
                    label="Imagem"
                    placeholder="Imagem:"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}

                />
                <ListaSuspensa
                    label="especializacao"
                    itens={props.nomeLinguagem}
                    valor={especializacao}
                    aoAlterado={(valor) => setEspecializacao(valor)}
                />
                <Botao>Enviar</Botao>
            </form>
        </section>
    );
};

export default Formulario;