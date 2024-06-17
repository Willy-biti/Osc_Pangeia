import styled from "styled-components";
import theme from "../../Theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justyfy-content: space-between;
  width: 100%;
  margin-top: 80px;
  color: ${theme.primary};

//   background: blue;
`;


// Definindo o contêiner do título
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const H1Title = styled.div`
//   font-family: 'Courier New', Courier, monospace;
  font-size: 32px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
//   background: blue;
`;

// Definindo o contêiner para o texto de máquina de escrever
export const TypewriterContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    color: ${theme.primary};
    white-space: nowrap;
`;

export const TextLine = styled.div`
  overflow: hidden;
//   border-right: 0.15em solid ${theme.primary}; 
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
`;

