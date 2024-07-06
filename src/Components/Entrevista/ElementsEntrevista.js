import styled from 'styled-components';
import theme from '../../Theme/theme';

export const Container = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    background: ${theme.background1};

`
export const Content = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    justify-content: center;
`
export const DivLeft = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.div`
    display: flex;
    height: 20%;
    align-items: center;
    color: ${theme.primary};
`
export const TitlePrev = styled.h2`
    display: flex;
`
export const TitleNext = styled.h2`
    background: ${theme.secondary};
    margin-left: 7px;
    padding: 5px;
`

export const Desc = styled.div`
    display: flex;
    height: 60%;
    color: ${theme.Title};
    text-align: justify;
`

export const DivRight = styled.div`
    flex:1.5;
    display: flex;
    justify-content: center;

`

export const Div2Baixo = styled.div`
    width: 450px;
    height: 300px;
    position: absolute;
    top: 60px;  
    border-radius: 0 50px 0 50px;
    border: 1px solid ${theme.secondary};
    // left: 0;
    z-index: 1;

    background: ${theme.secondary};
`
export const Div2BCima = styled.div`
    position: absolute;
    top: 100px;  // ajuste conforme necessário
    right: -30px; 
    display: flex;
    justify-content: center;
    width: 500px;
    height: 300px;
    z-index: 2;
`