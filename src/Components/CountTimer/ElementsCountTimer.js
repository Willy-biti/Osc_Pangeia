import styled from 'styled-components';
import theme from '../../Theme/theme';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  // background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: ${theme.primary};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  width: 80%;
  display: flex;
   justify-content: start;
   font-weight: bold;
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
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 5px 10px; 
  border-radius: 50px;
`;

export const TimerLabel = styled.div`
  font-size: 1rem;
  padding-top: 10px;
`;

export const MoreInfoButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  width: 150px;
  font-size: 1rem;
  color: ${theme.background};
  background-color: ${theme.primary}; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: 0.6s;

  &:hover {
    transform: scale(0.9);
    background-color: ${theme.primary}; 
  }
`;