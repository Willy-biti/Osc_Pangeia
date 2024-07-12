import styled from "styled-components";
import theme from "../../Theme/theme";

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


