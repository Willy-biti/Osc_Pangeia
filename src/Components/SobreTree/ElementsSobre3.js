import styled from 'styled-components';
import theme from '../../Theme/theme';

export const Section = styled.section`
  padding: 20px;
  background: ${theme.primary};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const Haederobre3 = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const H1Header = styled.div`
    Color: ${theme.background};
    display: flex;
    justify-content: center;
`

export const DescHeader = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    Color: ${theme.Title};
`

export const Content = styled.div`
  
  position: relative;
  display: flex;
  justify-content: center;
  height: 550px;

  // background: red;

`;

export const Div1 = styled.div`
  width: 50%;
//   margin-right: 10px;
`;
export const Div1Baixo = styled.div`
  width: 500px;
  height: 200px;
  left: 50px; 
  top: 155px;
  position: absolute;
  border-radius: 0px 50px 0 50px ;
  background: ${theme.Title}; 
`;
export const Div1Cima = styled.div`
  width: 500px;
   height: 400px;
  position: absolute;
  top: 50px;
  left: 50px; 
  background-size: cover;
    background-position: center;
  overflow: hidden;
  z-index: 2;
`;


export const Div2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${theme.Title};
`;

export const Description = styled.p`
  width: 80%;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${theme.background};
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${theme.Title};
  color: ${theme.background};
  border: none;
  cursor: pointer;
`;
