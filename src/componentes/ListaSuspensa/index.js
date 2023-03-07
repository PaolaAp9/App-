import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>Que tipo de programação você se identifica: </label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>

    )
};
export default ListaSuspensa;