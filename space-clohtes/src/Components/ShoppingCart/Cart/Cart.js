import Items from "../Items/Items";
import { Container } from "./cartStyle";


export default function Cart () {

    return (
        <Container>
            <div className="cart">
                <h2> Cart </h2>
                <Items />
            </div>
        </Container>


    )
};
