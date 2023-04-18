import styled from "styled-components";

export const Container = styled.div`

    .items {
        margin: 1em;




        p {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            flex-grow: 1;
        }

        button {
            font-size: 20px;
            color: white;
            background-color: 	#483D8B;
            border: none;
            width: 12em;
            height: 40px;
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



