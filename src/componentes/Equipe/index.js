import Candidato from '../Aluno';
import './Equipe.css';

const Equipe = (props) => {

    const cssFundo = { backgroundColor: props.corSegundario }
    const cssTitulo = { borderColor: props.corPrimaria }

    return (
        (props.candidatos.length > 0) ? <section className='equipe' style={cssFundo} >
            <h3 style={cssTitulo}>{props.nome}</h3>
            <div className='candidatos'>
                {props.candidatos.map(candidato => <Candidato
                    nome={candidato.nome}
                    email={candidato.email}
                    imagem={candidato.imagem}
                    especializacao={candidato.especializacao}
                />)}
            </div>
        </section >
            : ''
    )
}

export default Equipe;