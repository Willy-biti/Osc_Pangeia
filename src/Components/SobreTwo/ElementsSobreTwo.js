import styled from 'styled-components';
import theme from '../../Theme/theme';

export const Container = styled.section`
    height: 80vh;
    display: flex;
    justify-content: center;
`
export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
`
export const ContentCards1 = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.secondary};
    color: ${theme.Title};
    border-radius: 0 70px 0 70px ;
`
export const ContentCards2 = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.primary};
    color: ${theme.secondary};
    border-radius: 0 70px 0 70px ;
`
export const ContentCards3 = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.secondary};
    color: ${theme.Title};
    border-radius: 0 70px 0 70px ;
`
export const hautTitle = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    // align-items: center;
`
export const Desc = styled.div`
    flex:3;
    display: flex;
    justify-content: center;
    // align-items: center;
    text-align: center;

    // background: red;

    p{
        width: 80%;
    }
`