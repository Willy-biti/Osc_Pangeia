import styled from "styled-components";
import Theme from "../../Theme/theme";

export const ParceriaContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 40vh;
    background: ${Theme.primary};
    min-width: 100vw;

    @media screen and (max-width: 570px) {
        height: auto;
    } 
`

export const ParceriaContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75vw;
    // background: ${Theme.background};

    @media screen and (max-width: 760px){
        align-items: center;
        margin-right: 
    }
`
export const ParceriaParceiros = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
`

export const ParceriaParceirosH1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;

    h2{
        color: ${Theme.background};

        @media screen and (max-width: 570px) {
            margin-bottom: 40px;
        } 
    }

    @media screen and (max-width: 570px) {
        margin-top: 25px;
        margin-bottom: 20px;
    } 
`

export const ParceriaParceirosContents = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80%;
    // background: ${Theme.background}

    a{
        text-decoration: none;
        outline: none;
        transition: 0.6s;

        &:hover{
            transform: scale(0.95);
        }

        @media screen and (max-width: 400px) {
            margin-top: 25px;
            margin-bottom: 20px;
        } 
    }

    @media screen and (max-width: 400px) {
        flex-direction: column;
    } 
`

