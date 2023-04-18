import { Container } from "./productCardStyled.js";


export default function ProductCard (props) {






    return (
        <Container>
            <div className="product">
                <img src={props.image} alt=""  />
                <h4> {props.name} </h4>
                <p> {props.price}</p>
                <button > Add To Cart </button>
                </div>
        </Container>
    )
};

