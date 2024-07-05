import styled from "styled-components";
import theme from "../../Theme/theme";
import { Link as LinkR } from "react-router-dom";

// import Img from "../../Assets/Photos/rega.jpg";

export const GallaryContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 600px;
`

export const GallaryContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
`
export const ContentTitle = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContentContent = styled.div`
    height: 80%;
    display: flex;
    justify-content: center;
`

export const DivLeft = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

export const DivLeftBaixo = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    top: 150px;  
    border-radius: 50px 0 50px 0;
    background: ${theme.secondary};
    border: 1px solid ${theme.secondary};
    // left: 0;
    z-index: 1;
`

export const DivLeftCima = styled.div`
    position: absolute;
    top: 200px;  // ajuste conforme necessário
    left: -30px; 
    display: flex;
    justify-content: center;
    width: 400px;
    height: 300px;
    border-radius: 0 50px 0 50px ;
    background: ${theme.primary};
    z-index: 2;

`

export const DivRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

export const DivRightBaixo = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    top: 150px;  
    border-radius: 0 50px 0 50px ;
    border: 1px solid ${theme.secondary};
    background: ${theme.secondary};
    // left: 0;
    z-index: 1;
`

export const DivRightCima = styled.div`
    position: absolute;
    top: 200px;  // ajuste conforme necessário
    right: -30px; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    height: 300px;
    border-radius: 50px 0 50px 0;
    background: ${theme.primary};
    z-index: 2;
`

export const TitleVideo = styled.div`
    display: flex;
    justify-content: center;
`
export const DescVideo = styled.div`
    display: flex;
    justify-content: center;
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