

export default function ProductCard (props) {
    console.log(props.valor)
    return (
        <div className="produto">
            <h4> Produto: {props.nome} </h4>
            <p> Valor: {props.valor}</p>
            <button> Adicionar ao Carrinho </button>
        </div>

    )
}