import { Container } from "./filtersStyle";

export default function Filters () {
    return (
        <Container>
            <h2> Filters </h2>
            <div>
                
                
                <label type="number"> Valor mínimo: </label>
                <input type="number" id="minimo" name="minimo"/>

                <label type="number"> Valor máximo: </label>
                <input type="number" id="maximo" name="maximo"/>

                <label type="text"> Buscar por nome: </label>
                <input type="text" id="nome" name="nome"/>
            </div>

        </Container>
    )
};