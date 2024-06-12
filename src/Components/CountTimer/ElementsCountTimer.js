import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const ContentWrapper = styled.div`
  // width: 40%; /* Ocupa 40% da largura da tela */
  // background-color: rgba(255, 255, 255, 0.8); /* Fundo semi-transparente */
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: #fffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 60px;
`;

export const Title = styled.h1`
  margin-bottom: 60px;
  font-size: 50px;
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TimerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

export const TimerNumber = styled.div`
  font-size: 2rem;
  color: #fffff;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
  padding: 5px 10px; /* Adicionando espaçamento interno */
  border-radius: 5px; /* Adicionando borda arredondada */
`;

export const TimerLabel = styled.div`
  font-size: 1rem;
  color: #fffff;
  padding-top: 10px;
`;

export const MoreInfoButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #007BFF; /* Cor de fundo do botão */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Cor de fundo ao passar o mouse */
  }
`;