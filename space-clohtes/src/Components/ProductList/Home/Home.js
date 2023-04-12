import ProductCard from "../ProductCard/ProductCard";

import { Container } from "./homeStyle";

export default function Home () {
    return (
        <Container>
            <div>
                <h2> Home </h2>
                <ProductCard nome="Blusa" valor="R$ 100,00"/>
                <ProductCard nome="Casaco" valor="219.90" />
                <ProductCard nome="Camisa" valor="119,90"/>
            </div>

        </Container>
    )
};