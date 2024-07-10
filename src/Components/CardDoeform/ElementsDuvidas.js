
import styled from 'styled-components';
import theme from '../../Theme/theme';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  top: 120vh;
  left: 50%;
  right: 0px;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 200px;
  font-weight: bold;
  box-shadow: 0 25px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;  
  display: flex;
  z-index: 3;
`;

export const Content = styled.div`
  width: calc(50% - 50px);
  height: 100%;
  background-color: #000;
  box-sizing: border-box;
  border-top-left-radius: 10px; 
  border-bottom-left-radius: 10px;

  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
`;

export const Content2 = styled.div`
  width: calc(50% + 50px);
  height: 100%;
  background-color: ${theme.primary};
  box-sizing: border-box;
  border-left: 100px solid #000;
  border-bottom:  200px solid transparent;
  border-top-right-radius: 10px;  
  border-bottom-right-radius: 10px;
  color: ${theme.background};
`;

export const OverlayDiv = styled.div`
  position: absolute;
  width: 450px;;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
`;

export const ContainerC2 = styled.div`
  	display: grid;
    grid-template-rows: 1fr 2fr 2fr;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.background};

  // background: red;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${theme.background};
  padding-left: 15px;
  padding-right: 15px;
    
  p{
    width: 80%;
  }

`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.background}; 
`;

export const Button = styled(Link)`
  width: 100px;
  height: 20px;
  background-color: ${theme.primary};
  border: none;
  color: ${theme.background};
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  font-weight: bold;
`;