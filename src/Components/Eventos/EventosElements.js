import styled from "styled-components";
import theme from "../../Theme/theme";
import { Link as LinkR } from "react-router-dom";

import Bgd from "../../Assets/Photos/rega.jpg";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 140vh;
    font-weight: bold;
    background: ${theme.background1};
    min-width: 100vw;

    @media screen and (max-width: 785px){
        height: 1400px;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`
export const Div1 = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url(${Bgd});
    background-size: cover;
    background-position: center;
    overflow: hidden;

    
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.8); /* Sobreposição escura */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    
`
export const Div1Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: red;
    
    z-index: 2;

    h1{
        margin-bottom: 20px;
        color: ${theme.secondary};
    }
    
    p{
        text-align: center;
        color: ${theme.background};
    }
    
`

export const Div2 = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Card1 = styled.div`
    width: 220px;
    height: 500px;
    margin: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    background-image: url(${Bgd});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border-top-left-radius: 80px 80px;
    

    
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.8); /* Sobreposição escura */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0; 
    // clip-path: polygon(100% 0%, 100% 0%, 100% 70%, 0% 100%);
    // border-top-left-radius: 80px 80px;
    z-index: 1;
    
`
export const Card2 = styled.div`
    width: 220px;
    height: 500px;
    margin: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    background-image: url(${Bgd});
    background-size: cover;
    background-position: center;
    overflow: hidden;

    
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.8); /* Sobreposição escura */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    
`
export const Card3 = styled.div`
    width: 220px;
    height: 500px;
    margin: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    background-image: url(${Bgd});
    background-size: cover;
    background-position: center;
    overflow: hidden;

    
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.8); /* Sobreposição escura */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    
`
export const Card4 = styled.div`
    width: 220px;
    height: 500px;
    margin: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    background-image: url(${Bgd});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border-top-right-radius: 80px 80px;

    
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.8); /* Sobreposição escura */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    
`

export const BtnEntvosLink = styled(LinkR)`
    color: ${theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;

    &.active,
    &:hover{
        color: ${theme.primary};
    }
`