import styled from 'styled-components';
import theme from '../../../Theme/theme';


export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  background: ${theme.background1};

`;

export const Content = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;


`;

export const YearContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.isEven ? 'flex-start' : 'flex-end')};
  align-items: center;
  margin: 20px 0;
  width: 100%;
  position: relative;
`;

export const YearContent = styled.div`
  background:  ${theme.Title};
  color: ${theme.secondary};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 40%;
  text-align: ${props => (props.isEven ? 'left' : 'right')};
  order: ${props => (props.isEven ? 2 : 0)};
`;

export const YearDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.Title};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const VerticalLine = styled.div`
  width: 15px;
  background-color: ${theme.secondary};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
`;
