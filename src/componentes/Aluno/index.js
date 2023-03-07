import './Aluno.css'

const Candidato = ({nome, imagem, email, especializacao}) => {
    return (
        <div className="candidato">
            <div className="cabecalho">
                <img src={imagem} alt='Foto' />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{email}</h5>
                <h5>{especializacao}</h5>
            </div>
        </div>
    )
}
export default Candidato;