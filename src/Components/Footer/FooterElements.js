import styled from "styled-components";
import theme from "../../Theme/theme";

export const Rodape = styled.footer`
    display: flex;
    justify-content: center;
    height: 40vh;
    background: ${theme.background1};
    min-width: 100vw;

    @media screen and (max-width: 800px){
        height: auto;
    }
`


export const RodapeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 90%;
`


export const RodapeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70%;

    @media screen and (max-width: 760px){
        flex-direction: column;
    }
`

export const RodapeDroit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30%;
    border-top: 1px solid ${theme.quatrieme};


    @media screen and (max-width: 760px){
        flex-direction: column;
    }


`

export const RodapeContatos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;

    // background: blue;
    
    @media screen and (max-width: 760px){
        width: 100%;
        align-items: center;
    }

`


export const RodapeContatosTitle = styled.h3`
    color: ${theme.secondary};
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: bold;

    @media screen and (max-width: 760px){
        margin-bottom: 30px;
        margin-top: 30px;
    }

`
export const RodapeContatosLink = styled.a`
color: ${theme.cinquieme};
margin-bottom: 10px;
font-size: 14px;
text-decoration: none;
cursor: pointer;
align-items: center;
display: flex;
width:  60%;


&:hover{
    // color: ${theme.primary};
    transition: 200ms ease-in-out
}

@media screen and (max-width: 1100px){
    text-align: center;
}

@media screen and (max-width: 400px){
    width:  100%;
    justify-content: center;
}
`
export const RodapeContatosP =styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px; 
`

export const RodapeContatosIco =styled.div`
    display: flex;
    align-items: center;
    
`

export const RodapeRedes = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 760px){
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

`


export const RodapeRedesLink = styled.a`
color: ${theme.cinquieme};
margin: 15px;
font-size: 14px;
text-decoration: none;
cursor: pointer;
align-items: center;
&:hover{
    color: ${theme.primary};
    transition: 200ms ease-in-out
}
@media screen and (max-width: 1100px){
    text-align: center;
}
`



export const LogoRodape = styled.h3`
    color: ${theme.quatrieme};
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 35px;
    transition: 0.6s;
    
    &:hover{
        // color: ${theme.primary};
        transform: scale(0.90)
    }
`

export const RodapeWebsitRights = styled.p`
    color: ${theme.quatrieme};
    font-size: 11px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 35px;

    &:hover{
        // color: ${theme.primary};
        transition: 200ms ease-in-out
    }
    @media screen and (max-width: 446px){
        text-align: center;
    }
`
export const RodapeProgrammeur = styled.a`
color: ${theme.quatrieme};
font-size: 11px;
text-decoration: none;
cursor: pointer;
align-items: center;
font-weight: bold;
cursor: pointer;
margin-top: 35px;

&:hover{
    // color: ${theme.primary};
    transition: 200ms ease-in-out;
}

@media screen and (max-width: 800px){
    margin-bottom: 35px;
}
`