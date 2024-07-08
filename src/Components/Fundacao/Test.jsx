import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#4CAF50' : '#ccc')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#45a049' : '#aaa')};
  }
`;

const ToggleComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const options = ['Sim', 'Não'];

  const handleToggle = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <Container>
      <Button onClick={handleToggle} active={activeIndex === 0}>
        {options[activeIndex]}
      </Button>
      <Button onClick={handleToggle} active={activeIndex === 1}>
        {options[1 - activeIndex]}
      </Button>
    </Container>
  );
};

export default ToggleComponent;
