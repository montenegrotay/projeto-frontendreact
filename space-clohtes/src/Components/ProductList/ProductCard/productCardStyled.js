import styled from "styled-components";

export const Container = styled.div`

    .product {

        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;
        height: 17em;
        width: 300px;
        display: flex;
        flex-direction: column;
        

        h4 {
            font-size: 20px;
            padding: 10px;

        }

        p {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            flex-grow: 1;
            padding: 10px;
        }

        button {
            font-size: 20px;
            color: white;
            background-color: 	#483D8B;
            border: none;
            height: 50px;
            cursor: pointer;
            transition-duration: 0.4s;
            text-align: center;

            :hover {
                background-color: #6959CD;
                color: white;
            }
            
        }
}
`