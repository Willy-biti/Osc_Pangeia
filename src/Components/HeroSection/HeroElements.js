import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";
import theme from "../../Theme/theme";
import HeroIgmBgd from '../../Assets/Photos/rega.jpg';

export const HeroContainer = styled.main`
    height: 100vh; 
    background-image: url(${HeroIgmBgd});
    background-size: cover;
    background-position: center;
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    background: rgba(0, 0, 0, 0.6); 
    z-index: 1; 
  }
`;


export const HeroBg = styled.div`
    width: 80%; 
    padding: 20px;
    display: flex;
    align-items: end;
    z-index: 2; 
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
`

export const CounterHero = styled.div`
    display: flex;
    width: 50%;
`
// export const  h2Principe = styled.h2`
//     // padding: 20px;
// `
