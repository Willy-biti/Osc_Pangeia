import styled from "styled-components";
import theme from "../../Theme/theme";

export const SobreContainer = styled.div`
color:${theme.secondary};
background:  ${theme.background1};
font-weight: bold;
// min-width: 100vw;

// @media screen and (max-width: 768px) {
//     padding: 100px 0;
// }

  //   position: relative;
  //   overflow: hidden;

  //    &::before,
  // &::after {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 50px;
  //   left: 0;
  //   z-index: 1;
  // }

  // &::before {
  //   top: 0;
  //   background: linear-gradient(
  //     to bottom,
  //     ${theme.background1},
  //     transparent
  //   );
  //     }

  // &::after {
  //   bottom: 0;
  //   background: linear-gradient(
  //     to top,
  //     ${theme.primary},
  //     transparent
  //   );
  // }

`

export const SobreWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
max-width: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;


@media screen and (max-width: 768px) {
    height: auto;
}
`

export const SobreRow = styled.div`
display: flex;
align-items: center;
width: 80vw;


@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

export const Column1 = styled.div` 
margin-bottom: 15px;
padding: 0 15px;
grid-area: cols2;
height: 70%;
display: flex;
align-items: flex-end;

`

export const Column2 = styled.div` 
margin-bottom: 15px;
padding: 0 15px;
grid-area: cols2;
algn-items: center;
height: 70%;
display: flex;
align-items: flex-start;
`

export const TextWrapper = styled.div` 
padding-bottom: 60px;
padding: 0 15px;
max-width: 540px
`

export const TopLine = styled.p` 
color: ${theme.Title};
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
text-align: center;

@media screen and (max-width: 900px){
    ont-size: 14px;
}
`

export const Heading = styled.h1` 

font-size: 48px;
line-height: 1.1;
font-weight: 600;
letter-spacing: 1.4px;
margin-bottom: 24px;
color: ${theme.primary};
text-align: center;

@media screen and (max-width: 480px) {
    fonte-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${theme.Title};
text-align: center;
`

export const BtnWrap = styled.div `
display: flex;
justify-content: flex-start;

`

export const ImgWrap = styled.div`
max-width: 500px;
heigh: 80% ;

`;

export const Img = styled.img` 
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 90px;
    background:  linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0% , rgba(0, 0, 0, 0.50)100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0% , rgba(0, 0, 0, 0.50)100%);
    transition: 0.6s;

    &:hover{
        transform: scale(0.90);
    }
`