import styled from 'styled-components';
import theme from '../../Theme/theme';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 80px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  // width: 40%; /* Ocupa 40% da largura da tela */
  // background-color: rgba(255, 255, 255, 0.8); /* Fundo semi-transparente */
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  // text-align: center;
  color: ${theme.primary};
  display: flex;
  flex-direction: column;
  // align-items: center;
  // margin-top: 60px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 45px;
  width: 60%;
  // background: blue;
  display: flex;
   justify-content: start;
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  
  
`;

export const TimerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  width: 60px;

  
`;

export const TimerNumber = styled.div`
  width: 50px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  // color: #fffff;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
  padding: 5px 10px; /* Adicionando espaçamento interno */
  border-radius: 50px; /* Adicionando borda arredondada */
`;

export const TimerLabel = styled.div`
  font-size: 1rem;
  // color: #fffff;
  padding-top: 10px;
`;

export const MoreInfoButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  width: 150px;
  font-size: 1rem;
  color: ${theme.background};
  background-color: ${theme.primary}; /* Cor de fundo do botão */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.secondary}; /* Cor de fundo ao passar o mouse */
  }
`;