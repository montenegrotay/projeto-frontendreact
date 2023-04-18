import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import { Container } from "./homeStyle";

import p1 from "../../../assets/p1.jpg";
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";




export default function Home (props) {


    return (
        <Container>
            <div className="home">
                <ProductCard id="1" name="Camiseta Astronauta" price="R$119,90" image={p1} />
                <ProductCard id="2" name="Camisa Universo" price="R$189,90" image={p2}/>
                <ProductCard id="3" name="Jaqueta Planetas" price="R$269,90" image={p3}/>
            </div>
        </Container>
    )
};