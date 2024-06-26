import styled from "styled-components";
import theme from "../../Theme/theme";
import { Link as LinkR } from "react-router-dom";

export const EventosContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 800px;
    font-weight: bold;
    background: ${theme.background1};
    min-width: 100vw;

    @media screen and (max-width: 785px){
        height: 1400px;
    }
`

export const EventosContent = styled.div`
    display: flex;
    width: 80vw;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const EventosH1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
    height: 200px;
    color: ${theme.Title};
    font-size: 2.5rem;
    margin-top: 60px;

    @media screen and (max-width: 785px){
        margin-bottom: 30px;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const EventosWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1100px;

    @media screen and (max-width: 785px){
        flex-direction: column;
    }
`

export const EventosCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 350px;
    border-radius: 10px;
    margin: 5px;
    background: ${theme.primary};

    &:hover {
        cursor:pointer;
    }

    @media screen and (max-width: 785px){
        width: 70vw;
    }
`

export const EventosCardM = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 380px;
    border-radius: 10px;
    margin: 5px;
    background: ${theme.primary};

    &:hover {
        cursor:pointer;
    }

    @media screen and (max-width: 785px){
        width: 70vw;
    }
`
export const EventosIcon = styled.img`
    width: 80%;
    height: 40%;
    margin-top: 10px
`

export const EventosH2 = styled.h2`
    width: 80%;
    height: 20%;
    text-align: center;
    margin-top: 10px;
    color: ${theme.primary};
`

export const EventosP = styled.p`
    width: 80%;
    height: 40%;
    font-size: 1rem;
    text-align: center;
    color: ${theme.Title};
    margin: 10px;
`


export const BtnEnventos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background: ${theme.Title};
    margin-bottom: 20px;
    transition: 0.2s;
    border-radius: 10px;

    &:hover{
        color: ${theme.primary};
        transform: scale(0.90);
    }
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