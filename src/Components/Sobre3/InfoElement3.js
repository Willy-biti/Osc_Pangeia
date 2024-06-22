// import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../Theme/theme";

export const SobreContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80vh;
    background: ${theme.primary};
    min-width: 100vw;

    @media screen and (max-width: 1230px){
        height: auto;
    }
`

export const SobreContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    max-width: 1200px;
`
export const SobreRowCards = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1230px){
        flex-direction: column;
        margin-top: 25px;
        margin-bottom: 25px;
        height: 800px;
    }
`
export const SobreRowCardsImg = styled.div`
    display: flex;
    width: 50%;
    height: 80%;

    @media screen and (max-width: 1230px){
        width: 80%;
        height: 50%;
    }

    @media screen and (max-width: 400px){
        width: 90%;
    }
`

export const SobreRowCardsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;

    @media screen and (max-width: 1230px){
        width: 80%;
        height: 50%;
    }

    @media screen and (max-width: 400px){
        width: 90%;
    }
`

export const SobreRowCardsInfopangeia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const SobreRowCardsInfoAno = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    color: ${theme.Title};
    font-size: 24px;
`
export const SobreRowCardsInfoDesc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    color: ${theme.background};

    p{
        text-align: center;
    }
`

export const SobreRowCardsInfoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`

export const ButtonModal = styled.button`
    min-widht: 100px;
    width: auto;
    height: 40px;
    padding: 10px 32px;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    background: #000;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    text-decoration: none;

    @media screen and (max-width: 500px){
        font-size: 12px;
    }

`
export const BtnVoltar =styled.button`
    position: absolute;
    top: 50%;
    left: 0px;
    width: auto;
    height: auto;
    outline: none;
    text-decoration: none;
    background: transparent;

    @media screen and (max-width: 400px){
        left: -15%;
    }
`

export const BtnIr =styled.button`
    position: absolute;
    top: 50%;
    right: 0px;
    width: auto;
    height: auto;
    outline: none;
    text-decoration: none;
    background: transparent;

    @media screen and (max-width: 400px){
        right: -15%;
    }
`




