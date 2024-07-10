import styled from "styled-components";
import theme from "../../Theme/theme";
import { Link as LinkR } from "react-router-dom";

import Ft from '../../Assets/Photos/rega.jpg';

// import Img from "../../Assets/Photos/rega.jpg";

export const GallaryContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 600px;
    min-width: 100vw;
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
    color: ${theme.secondary};
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
    color: ${theme.secondary};
`

export const DivLeftBaixo = styled.div`
    width: 32vw;
    height: 300px;
    position: absolute;
    top: 25vh;  
    border-radius: 0 50px 0 50px ;
    background: ${theme.secondary};
    border: 1px solid ${theme.secondary};
    z-index: 1;
`

export const DivLeftCima = styled.div`
    position: absolute;
    top: 200px;  // ajuste conforme necessário
    left: -1vw; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 32vw;
    height: 300px;
    border-radius: 0 50px 0 50px ;
    background-size: cover;
    background-position: center;
    z-index: 2;
`


export const DivFoto = styled(LinkR)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Ft});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 50%;
    color: ${theme.secondary};
    border-radius: 50px 0 0 0 ;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px 0 0 0 ;
    background: rgba(0, 0, 0, 0.6); /* Sobreposição escura */
    z-index: 1; /* Coloca a sobreposição atrás do conteúdo */
  }
    
`
export const DivVideo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    border-radius: 0 0 50px 0 ;
`
export const Video = styled.video`
    position: relative  ;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 0 50px 0 ;
    // background: rgba(0, 0, 0, 0.6);
    object-fit: cover; /* Ajusta o vídeo para cobrir toda a área */
    z-index: 1;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px 0 0 0 ;
    background: rgba(0, 0, 0, 0.8); /* Sobreposição escura */
    z-index: 1; /* Coloca a sobreposição atrás do conteúdo */
  }
`
export const Overlay = styled.div`
  position: absolute;
//   top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  border-radius: 0 0 50px 0 ;
  z-index: 4;
  background: rgba(0, 0, 0, 0.7); /* Cor clara com transparência */
`;

export const DivLinkF = styled(LinkR)`
    position: absolute;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    color: ${theme.secondary};
    text-align: center;
    transition: 0.6s;

    &:hover{
        color: ${theme.secondary};
        transform: scale(0.90)
    }
`
export const DivLinkV = styled(LinkR)`
    position: absolute;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    color: ${theme.secondary};
    text-align: center;
    transition: 0.6s;

    &:hover{
        color: ${theme.secondary};
        transform: scale(0.90)
    }
`

export const DivRight = styled.div`
    flex: 1;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column; 
    // align-items: center;
    color: ${theme.Title};
    text-align: justify;
`


export const GallaryLink = styled(LinkR)`
    jusify-self: flex-start;
    color: ${theme.background};
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
export const Highlight = styled.span`
  font-weight: bold;
  color: ${theme.primary}; /* Escolha a cor que você preferir */
`;

export const H1 = styled.h1`
    Background: ${theme.primary};
    width: 30px;
`