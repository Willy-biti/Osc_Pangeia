import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e04e4a;
  }
`;

const DonateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/donate');
  };

  return (
    <Button onClick={handleClick}>
      Doar Agora
    </Button>
  );
};

export default DonateButton;
