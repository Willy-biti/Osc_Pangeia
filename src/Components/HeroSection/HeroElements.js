import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";
import theme from "../../Theme/theme"

export const HeroContainer = styled.main`

    background: ${theme.background1};
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    min-width: 100vw;
;
    @media screen and (max-width: 850px) {
        height: 120vh;
    }

    @media screen and (max-width: 360px) {
        height: 100vh;
    }
`;

export const OverLay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background:  rgba(0, 0, 0, .40);
    z-index: 2
`

export const HeroBg = styled.div`

    position: absolute;
    top: 0 ;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

;

export const VideoBg = styled.video`

    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;

`;


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;

    // background: green;

    @media screen and (max-width: 889px) {
        margin-top: 35%;
    }

    @media screen and (max-width: 559px) {
        margin-top: 45%;
    }

    @media screen and (max-width: 446px) {
        margin-top: 65%;
    }

    @media screen and (max-width: 300px) {
        margin-top: 75%;
    }

    @media screen and (max-width: 237px) {
        margin-top: 100%;
    }
`

export const HeroH1 = styled.h1`
    color: ${theme.primary};
    font-size: 70px;
    text-align: center;
    font-weight: bold;
    // border-right: 2px solid red;


    @media screen and (max-width: 768) {
        font-size: 50px;
    }

    @media screen and (max-width: 480px) {
        font-size: 42px;
    }

`

export const HeroP = styled.h2`
color: ${theme.secondary};
font-size: 24px;
text-align: center;
margin-top: 44px;
max-width: 600px;
cursor: pointer;
transition: 0.6s;


&:hover {
    transform: scale(0.90);
    
}

@media screen and (max-width: 768) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const HeroDesce = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: ${theme.secondary};
    border-radius: 10px;
    margin-top: 15%;
    cursor: pointer;
    font-weight: bold;
    transition: 0.6s;

    &:hover{
        color: ${theme.secondary};
        transform: scale(0.90);
    }

    @media screen and (max-width: 320px) {
        margin-top: 30%;
    }
`

export const HeroDesceLink = styled(LinkS)`
color: ${theme.troisieme};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
transition: 0.6s;
font-weight: bold;

&.active,
&:hover{
    color: ${theme.troisieme};
}
`

export const Aviso = styled.div`
    position: absolute;
    width: 40vw;
    height: 20vh;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: red;
    border-radius: 30px;
    // margin-top: -25%;


    // @media screen and (max-width: 1700px){
    //     margin-top: -15%;
    // }

    @media screen and (max-width: 400px){
        width: 60vw;
    }

    h1{
        margin-top: 30px;
        margin-bottom: 30px;
        color: black;
        text-align: center;

        @media screen and (max-width: 527px){
            font-size: 16px;
        }

        @media screen and (max-width: 330px){
            font-size: 13px;
        }
    }

    h3{
        color: black;
        text-align: center;
    }

`