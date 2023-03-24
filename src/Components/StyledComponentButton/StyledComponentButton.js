import styled from "styled-components"; // npm i --save styled-components



// const Button = styled.button``; // tagget template literal: default js feature


const Button = styled.button`
.button {
    padding: 8px;
    border: 1px solid grey;

    &:focus {
        border: 1px solid black;
    }
}`;


export default Button;

