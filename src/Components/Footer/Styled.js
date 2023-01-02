import styled from "styled-components";
import background from "../Header/assets/Header-Background.gif"

export const FooterWrapper = styled.div`
width: 100%;
height: 10vh;
display:flex;
align-items:center;
justify-content:center;
background-image: url(${background});
background-repeat: no-repeat;
background-position: center;
background-size:cover;
box-shadow:0px -5px 8px gray;
`

export const Footcontainer = styled.div `
width: 98%;
height: 8vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #eeeeee;
box-shadow:0px 5px 8px white;
border: 2px solid white;
border-radius: 10px;`