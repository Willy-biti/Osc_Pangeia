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
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

   
`
export const Div2 = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: ${theme.background};
`
export const TitleDiv2 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    // align-items: center;
    // color: ${theme.background};

    h1{
        margin-top: 30px;
    }

    h4{
        margin-top: 30px;
        color: ${theme.Title};
    }
`
export const DescDiv2 = styled.div`
    height: 80%;
    display: flex;
    // justify-content: flex-start;
    flex-direction: column;
    // align-items: center;
    // color: ${theme.background};

    h2{
        margin-top: 20px;
        margin-bottom: 30px;
    }

    h4{
        text-align: justify;
        color: ${theme.Title};
    }
`


