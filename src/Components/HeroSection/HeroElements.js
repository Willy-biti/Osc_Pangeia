import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";
import theme from "../../Theme/theme";
import HeroIgmBgd from '../../Assets/Photos/rega.jpg';

export const HeroContainer = styled.main`

    height: 100vh; /* Ocupa a altura total da tela */
    background-image: url(${HeroIgmBgd});
    background-size: cover;
    background-position: center;
    position: relative; /* Necessário para a sobreposição */
    display: flex;
    justify-content: center;
    align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Sobreposição escura */
    z-index: 1; /* Coloca a sobreposição atrás do conteúdo */
  }
`;


export const HeroBg = styled.div`
    width: 80vw; /* Ocupa 40% da largura da tela */
    // background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */
    padding: 20px;
    color: #ffffff;
    display: flex;
    align-items: end;
    z-index: 2; /* Garante que o conteúdo fique acima da sobreposição */
`
;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`
export const Pincipe = styled.div`
    display: flex;
    align-items: center;    
    flex-direction: column;
    width: 40%;

// background-color: blue;
`

export const CounterHero = styled.div`
    display: flex;
    // background-color: blue;
`
export const  h2Principe = styled.h2`
    padding: 20px;
`
