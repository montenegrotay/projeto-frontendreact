import React from "react";
import { Container } from "./itemsStyle";



export default function Items (props) {
    
    const handleRemoveFromCart = (id) => {

    }




    return (
        <Container>
            <div className="items">
                <p> {props.name} </p>
                <p> {props.price} </p>
                <p> {props.quantify} </p>
                <button onClick={() => handleRemoveFromCart}> Remove From Cart </button>
            </div>
        </Container>

    )
};