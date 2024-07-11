import React, { useState } from 'react';
import { teamMembers } from './Items';
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
} from './ElementEquipe';

const Equipe = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

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
