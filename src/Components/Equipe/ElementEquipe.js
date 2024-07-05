// src/Components/Equipe/elementsequipe.js
import styled from 'styled-components';

export const TeamSection = styled.section`
  padding: 40px 20px;
  background: #f8f8f8;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TeamTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const TeamDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 40px;
`;

export const TeamGallery = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  height: 350px;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${(props) => props.bgImage}) no-repeat center center/cover;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 5px;
`;

export const CardRole = styled.p`
  margin-bottom: 10px;
`;

export const MoreButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 80%;
`;

export const ModalImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 10px;
`;

export const ModalDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
`;
