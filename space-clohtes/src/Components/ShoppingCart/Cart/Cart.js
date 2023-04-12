import Items from "../Items/Items";

import { Container } from "./cartStyle";

export default function Cart () {
    return (
        <Container>
            <div>
                <h2> Cart </h2>
            </div>


            <Items />

        </Container>


    )
};

