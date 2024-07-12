import styled from "styled-components";
import theme from "../../Theme/theme";
import Bg from "../../Assets/Photos/rega.jpg";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background: ${theme.secondary};
`
export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`
export const Div1 = styled.div`
    width: 50%;
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1{
        color: ${theme.background};
    }
    
    h4{
        text-align: justify;
        margin-top: 30px;
        margin-right: 30px;
        color: ${theme.Title};

    }
`
export const Div2 = styled.div`
    width: 50%;
    height: 60vh;
    display: flex;
    justify-content: flex-end;
    // flex-direction: column;
    align-items: center;
    color: ${theme.background};
    
    
`

export const TitleDiv2 = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

`
export const ContentDiv2 = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    background-image: url(${Bg});
    background-size: cover;
    background-position: center;
    position: relative;

    &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1; 
  }
`
export const Lema = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    font-size: 1.5rem;
    z-index: 2; 

`