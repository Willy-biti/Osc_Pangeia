import styled from 'styled-components';
import theme from '../../Theme/theme';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.header`
    width: 100vw;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    background: ${theme.background1};
`;

export const Content = styled.header`
    width: 80%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Div1 = styled.header`
    display: flex;
    justify-content: flex-start;
`;

export const LogoLink = styled(LinkR)`
    width: 100px; 
    height: 100px; 
    display: flex; 
    align-items: center; 
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const Div2 = styled.header`
    display: flex;
    justify-content: flex-end;
`;

export const RedeSociais = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // background: red;
`;

export const BotaoRedes = styled.div`
    width: 50px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin: 2px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.2);  
      }

    // background: red;
`

export const BotaoDoar = styled(LinkR)`
    width: 80px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.secondary};
    background: ${theme.Title};
    margin-right: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);  
      }
`