import styled from "styled-components";
import theme from "../../Theme/theme";
import { Link as LinkR } from "react-router-dom";

export const GallaryContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 600px;
    background: ${theme.primary};
    min-width: 100vw;

    @media screen and (max-width: 550px){
        height: 1000px;
    }
`

export const GallaryContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    max-width: 1200px;
`

export const GallaryTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
`

export const GallaryH1 = styled.h1`
font-size: 2.5rem;
color: ${theme.Title};
align-text: center;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const GallaryContext = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;

    @media screen and (max-width: 550px){
        flex-direction: column;
    }
`

export const GallaryPhotos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;

    @media screen and (max-width: 550px){
        width: 100%;
    }
`
export const GallaryVideos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;
    
    @media screen and (max-width: 550px){
        width: 100%;
    }
`
export const GallaryCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    transition: 0.6s;
    border-radius: 30px;
    background: ${theme.background1};
    // border: 2px solid ${theme.primary};
    border-radius: 50% 25% 50% 25% / 25% 50% 25% 50% ;
    padding: 25px;

`
export const GallaryCardTitle =styled.div`
    display: flex;
    jiustify-content: center;
    align-items: center;
    width: auto;
    height: 30%;
    color: ${theme.primary};
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;

    // background: blue;
`
export const GallaryCardTxt =styled.div`
    display: flex;
    jiustify-content: center;
    align-items: center;
    width: auto;
    height: 40%;
    color: ${theme.Title};
    font-size: 14px;
    text-align: center;
    // margin-top: 44px;
    // max-width: 600px;
    cursor: pointer;
    transition: 0.6s;
`

export const GallaryCardBtn =styled.div`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.primary};
    color: ${theme.background};
    border-radius: 10px;
    margin-top: 15%;
    cursor: pointer;
    font-weight: bold;
    transition: 0.6s;
    margin-bottom: 20px;
    &:hover{
        // background: ${theme.primary};
        // color: ${theme.secondary};
        transform: scale(0.90);
    }
    @media screen and (max-width: 300px) {
        background: transparent;
        trasition: 0.6s;
        
        &:hover{
            tranform: scale(0.90)
        }
    }
`

export const GallaryLink = styled(LinkR)`
    color: ${theme.background};
    jusify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    transition: 0.6s;
    text-align: center;
    
    &:hover{
        color: ${theme.secondary};
        transform: scale(0.90)
    }
`

export const RRR = styled(LinkR)`
    color: ${theme.background};
    jusify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    transition: 0.6s;
    text-align: center;

    
    &:hover{
        color: ${theme.secondary};
        transform: scale(0.90)
    }
`