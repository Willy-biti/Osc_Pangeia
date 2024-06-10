import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justyfy-content: space-between;
  width: 100%;

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
  color: orange;
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
    color: orange;
    white-space: nowrap;
`;

export const TextLine = styled.div`
  overflow: hidden;
//   border-right: 0.15em solid orange; 
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
`;

