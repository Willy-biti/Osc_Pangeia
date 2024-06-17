
import styled from 'styled-components';
import theme from '../../Theme/theme';

export const Container = styled.div`
  position: absolute;
  top: 105%;
  left: 50%;
  right: 0px;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 200px;
  // background-color: green;
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
`;