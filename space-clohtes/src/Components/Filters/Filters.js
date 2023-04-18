import React from "react";
import { useState } from "react";
import { Container } from "./filtersStyle";

export default function Filters () {

    const [valorMinimo, setValorMinimo] = useState("")
    const [valorMaximo, setValorMaximo] = useState("")
    const [nome, setNome] = useState("")
    const [ordenacao, setOrdenacao] = useState("")

    return (
        <Container>
            <div className="filters">
            <h2> Filters </h2>
                <p> Quantidade de produtos: 3 </p>

                <label for="sort"> Ordenação: </label>
                <select name="select" id="ordem" value={ordenacao} onChange={e => setOrdenacao (e.target.value)}  >
                    <option value={1}> Crescente </option>
                    <option value={-1}> Decrescente </option>
                </select>
                <br></br>

                <label type="number"> Valor mínimo: </label>
                <input type="number" id="minimo" name="minimo" placeholder="Preço Máximo" value={valorMinimo} onChange= {e => setValorMinimo(e.target.value)}/>

                <label type="number"> Valor máximo: </label>
                <input type="number" id="maximo" name="maximo" placeholder="Preço Mínimo" value={valorMaximo} onChange= {e => setValorMaximo(e.target.value)}/>

                <label type="search"> Buscar por nome: </label>
                <input type="search" id="nome" name="nome" placeholder="Buscar por nome" value={nome} onChange= { ({ target }) => setNome(target.value)} required/>
            
            </div>
        </Container>
    )

};