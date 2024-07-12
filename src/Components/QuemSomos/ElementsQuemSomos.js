import styled from "styled-components";
import Bg from "../../Assets/Photos/rega.jpg";

export const Container = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    background-image: url(${Bg});
    background-size: cover;
    background-position: center;
    position: relative;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9); /* Sobreposição escura */
    z-index: 1; /* Coloca a sobreposição atrás do conteúdo */
  }
    
`
export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    z-index: 2;

`

export const DiveText = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    // background: black;
`
export const Text = styled.h3`
    margin-top: 30px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff
`
