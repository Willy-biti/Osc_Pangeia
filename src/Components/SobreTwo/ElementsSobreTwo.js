import styled from 'styled-components';
import theme from '../../Theme/theme';

export const Container = styled.section`
    height: auto;
    min-width: 100vw;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;

    // background: red;
`;

export const ContentCards1 = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.secondary};
    color: ${theme.Title};
    border-radius: 0 70px 0 70px;
`;

export const ContentCards2 = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.Title};
    color: ${theme.background};
    border-radius: 0 70px 0 70px;
`;

export const ContentCards3 = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.background};
    color: ${theme.Title};
    border-radius: 0 70px 0 70px;
`;

export const HautTitle = styled.div`
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    height: 45px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h2 {
        text-align: center;
        width: 100%;
        background: ${theme.background1};
        color: ${theme.Title};
        padding: 10px 0; /* Ajuste o padding conforme necessário */
    }
`;

export const Desc = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;

    p {
        width: 80%;
        line-height: 1.6;
        margin-bottom: 60px;
    }

    .highlight {
        color: ${theme.secondary}; 
        font-weight: bold; 
        font-size: 17px;
    }
`;