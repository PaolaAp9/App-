import './CaixaTexto.css';

const CaixaTexto = (props) => {

    const labelModificada = `${props.label}:`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='caixa-texto'>
            <label>{labelModificada}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
};

export default CaixaTexto;