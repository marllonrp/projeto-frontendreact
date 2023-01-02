import styled from "styled-components";

export const PageContainer = styled.div `
width: 40%;
height: 60px;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const PageButton = styled.button `
width: 25px;
height: 25px;
border-radius: 50%;
color: gray;
outline:none;
border:none;
box-shadow:0px 5px 8px gray;
cursor: pointer;
&:hover{
    background-color:red;
    color: white;}
&:active{
    filter: brightness(0.8)
} `