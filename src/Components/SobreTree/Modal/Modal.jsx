import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './ElementsModal';

const Modal = ({ onClose, content }) => (
  <ModalOverlay>
    <ModalContent>
      <CloseButton onClick={onClose}>×</CloseButton>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <p>{content.content}</p>
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
