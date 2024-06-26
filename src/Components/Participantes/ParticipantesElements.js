import styled from 'styled-components';
import theme from '../../Theme/theme';
import { Link as LinkR } from "react-router-dom";

export const CliqueLinkR = styled(LinkR)`
    width: 100%;
    height: 100%;

    color: ${theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
`


export const ParticipantesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;

`

export const ParticipantesContext = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: auto;
background: ${theme.background1};
color: white;
`

export const ParticipantesContextTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80vw;
height: 15vh;
color: ${theme.Title};

@media screen and (max-width: 600px){
    display: none;
}
`

export const ParticipantesContextP = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80vw;
height: auto;
text-align: center;
color: ${theme.Title};
`

export const ParticipantesContextStatistique = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);

align-items: center;
width: 80vw;
height: 40vh;


@media screen and (max-width: 480px){
    grid-template-columns: repeat(1, 1fr);
    height: auto;
    grid-gap: 16px;
    margin-bottom: 30px;
    margin-top: 30px;
}
`

export const ParticipantesContextStatistiqueCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 25vw;
height: 30vh;
// background: white;
border-radius: 9px;
color: red;

@media screen and (max-width: 480px){
    width: 80vw;
    background: white;
}
`
export const ParticipantesContextStatistiqueNumber = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 70%;
font-size: 9vw;
font-weight: bold;
color: ${theme.primary};

@media screen and (max-width: 480px){
        font-size: 17vw;
}

@media screen and (max-width: 400px){
        font-size: 60px;
}
`

export const ParticipantesContextStatistiqueName = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 30%;


h3{
    text-align: center;
    color: ${theme.primary};
}

@media screen and (max-width: 480px){
    align-items: flex-start;

    h3{
        padding-left: 10px;
        padding-right: 10px;
        color: ${theme.primary};
    }
}
`


export const ParticipantesContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: auto;
`

export const ParticipantesAtuais = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;

    @media screen and (max-width: 400px){
        height: 400px;
`
export const ParticipantesPassados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    background: ${theme.background1};

    @media screen and (max-width: 400px){
        height: 400px;
    }
`
export const ParticipantesConexoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;

    @media screen and (max-width: 400px){
        height: 400px;
    }
`

export const ParticipantesCentral = styled.div`
    display: flex;
    align-items: center;
    width: 80vw;
    height: 100%;

    @media screen and (max-width: 660px){
        flex-direction: column;
    }
`
export const ParticipantesCentralP = styled.div`
    display: flex;
    align-items: center;
    width: 80vw;
    height: 100%;
    color: ${theme.Title};

    @media screen and (max-width: 660px){
        flex-direction: column;
    }
`

export const ParticipantesTxtP = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
    width: 50%;
    height: 100%;
    color: ${theme.Title};

    @media screen and (max-width: 660px){
        justify-content: center;
        width: 100%;
        height: 50%;
    }
`

export const ParticipantesCliqueP = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
`

export const ParticipantesTitleP = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 30%;

    @media screen and (max-width: 660px){
        justify-content: center;
        margin-top: 25px;
        text-align: center;
    }
`

export const ParticipantesPP = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 70%;

    @media screen and (max-width: 660px){
        justify-content: center;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 35px;
    }

    @media screen and (max-width: 400px){
        margin-bottom: 95px;
    }
`

export const ParticipantesTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    color: ${theme.Title};

    @media screen and (max-width: 660px){
        justify-content: center;
        width: 100%;
        height: 50%;
    }
`

export const ParticipantesClique = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
`

export const ParticipantesCliqueRadius = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    border-radius: 35% 64% 77% 26% / 73% 54% 45% 19%;
    background: ${theme.Title};
    color: white;
    transition: .6s;
    cursor: pointer;

    &:hover{
        border-radius:  26% 77% 64% 35% / 19% 45% 54% 73% ;
    }

    @media screen and (max-width: 660px){
        width: 150px;
        height: 95px;
    }
`

export const ParticipantesCliqueRadiusP = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    border-radius: 35% 64% 77% 26% / 73% 54% 45% 19%;
    background: ${theme.Title};
    color: black;
    transition: .6s;
    cursor: pointer;

    &:hover{
        border-radius:  26% 77% 64% 35% / 19% 45% 54% 73% ;
    }

    @media screen and (max-width: 660px){
        width: 150px;
        height: 95px;
    }
`

export const ParticipantesTitle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;

    @media screen and (max-width: 660px){
        justify-content: center;
        margin-top: 25px;
        text-align: center;
    }
`

export const ParticipantesP = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70%;

    @media screen and (max-width: 660px){
        justify-content: center;
        text-align: center;
        margin-top: 35px;
    }

    
`