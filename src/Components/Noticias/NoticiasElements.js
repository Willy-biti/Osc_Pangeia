import styled from 'styled-components';
import theme from '../../Theme/theme';
// import { Link as LinkS } from "react-scroll";


export const NoticiasContainer = styled.aside`
    background: ${theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    max-width: 1200px;
    min-width: 100vw;

    @media screen and (max-width: 850px) {
        height: 120vh;
    }

    @media screen and (max-width: 360px) {
        height: 100vh;
    }
`

export const NoticiasBg = styled.div`

    position: absolute;
    top: 0 ;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`


export const NoticiasContent = styled.div`
    max-width: 1200px;
    display: flex;
    width: 75vw;
    height: 80%;
    justify-content: center;
    align-items: center;
    



    border-radius: 10px;

    h1{
        color: white;
    }


`

