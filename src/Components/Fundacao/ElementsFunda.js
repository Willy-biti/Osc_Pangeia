import styled from "styled-components";
import theme from "../../Theme/theme";

import Bgd from "../../Assets/Photos/rega.jpg";

export const Container = styled.section`
    height: autto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.background1};

`
export const Content = styled.section`
    widht: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    // background: ${theme.background1};


`

export const Div1 = styled.section`
    widht: 80%;
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-image: url(${Bgd});
    background-size: cover;
    background-position: center;
    overflow: hidden;

    
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.8); /* Sobreposição escura */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // clip-path: circle(50% at 50% 50%);
    
    z-index: 1;



`
export const Div1Content = styled.section`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    // background: ${theme.background1};

    h1{
        color: ${theme.secondary};
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 20px;
        
    }

    p{
        color: ${theme.background};
        text-align: center;
    }

`

export const Div2 = styled.section`
    widht: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    // background: ${theme.background1};

`