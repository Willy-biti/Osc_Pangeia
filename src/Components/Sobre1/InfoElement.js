import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import theme from "../../Theme/theme";



export const SobreContainer = styled.div`
display: flex;
justify-content: center;
color:${theme.background};
background:  ${theme.primary};
min-width: 100vw;
`

export const SobreWrapper = styled.div`
z-index: 1;
height: 660px;
width: 80vw;
max-width: auto;
margin-top: 70px;
display: flex;
justify-content: center;


@media screen and (max-width: 830px) {
    height: auto;
};
`

export const SobreRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;


@media screen and (max-width: 768px) {
    flex-direction: column;
};

`

export const Column1 = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;

    @media screen and (max-width: 830px) {
        width: 80%;
    }
`

export const Column2 = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;

@media screen and (max-width: 830px) {
    display: none;
}
`

export const TextWrapper = styled.div` 
padding-bottom: 60px;
max-width: 540px
`

export const TopLine = styled.p` 
// color: ${theme.secondary};
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;

@media screen and (max-width: 830px) {
    margin-top: 40px;
};
`

export const Heading = styled.h1` 

font-size: 48px;
line-height: 1.1;
font-weight: 600;
letter-spacing: 1.4px;
margin-bottom: 24px;
color: ${theme.Title};

@media screen and (max-width: 480px) {
    font-size: 35px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
// color: ${theme.secondary};
`

export const SaibaMaisItem = styled.div `
display: flex;
background-color: ${theme.Title};
color: ${theme.secondary};
align-items: center;
border-radius: 50px;
justify-content: center;
width: 150px;
height: 40px;
transition: all 0.2s ease-in-out;


`

export const BtnWrapLinkR =  styled(LinkR)`
color: ${theme.background};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
transition: 0.6s;
font-weight: bold;
transition: .6s;
outline: none;


&:hover{
    transform: scale(0.95);
    color: ${theme.secondary};
}
`

export const ImgWrap = styled.div`
max-width: 500px;
heigh: 100% ;
`;

export const Img = styled.img` 
    width: 350px;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 30px;
`