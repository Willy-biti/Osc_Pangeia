// src/Components/Equipe/index.jsx
import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase/firebaseConfig'; // Importa o armazenamento do Firebase
import { teamMembers } from './items';
import {
  TeamSection,
  TeamTitle,
  TeamDescription,
  TeamGallery,
  Card,
  CardFront,
  CardImage,
  CardTitle,
  CardRole,
  MoreButton,
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalTitle,
  ModalDescription
} from './elementsequipe';

const Equipe = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    // Pré-carregar todas as imagens da equipe ao montar o componente
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      // Cria uma lista de promessas para buscar todas as imagens da equipe
      const imagePromises = teamMembers.map(async (member) => {
        const url = await storage.ref(member.imagePath).getDownloadURL();
        return { ...member, image: url };
      });

      // Aguarda todas as promessas serem resolvidas e atualiza o estado
      const images = await Promise.all(imagePromises);
      setTeamMembers(images);
    } catch (error) {
      console.error('Erro ao carregar imagens do Firebase Storage:', error);
    }
  };

  const handleShowModal = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <TeamSection>
      <TeamTitle>Nossa Equipe</TeamTitle>
      <TeamDescription>
        Conheça os membros talentosos e dedicados da nossa equipe.
      </TeamDescription>
      <TeamGallery>
        {teamMembers.map((member) => (
          <Card key={member.id} isFlipped={false}>
            <CardFront bgImage={member.image}>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <CardRole>{member.role}</CardRole>
              </div>
              <MoreButton onClick={() => handleShowModal(member)}>+</MoreButton>
            </CardFront>
          </Card>
        ))}
      </TeamGallery>
      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedMember.image} alt={selectedMember.name} />
            <ModalTitle>{selectedMember.name}</ModalTitle>
            <ModalDescription>{selectedMember.bio}</ModalDescription>
          </ModalContent>
        </ModalOverlay>
      )}
    </TeamSection>
  );
};

export default Equipe;
