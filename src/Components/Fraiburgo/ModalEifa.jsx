import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
    width: 80%;
  position: relative;
  background: white;
//   padding: 20px;
  border-radius: 8px;
`;

const Photo = styled.img`
    width: 95vw;
  max-width: 80vw;
  max-height: 80vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  background: none;
  border: none;
  font-size: 54px;
  cursor: pointer;

  z-index: 2;
`;

const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarouselButton = styled.button`
  background: #fff;
  color: #000;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

const ModalSlider = ({ photos, selectedPhoto, setSelectedPhoto }) => {
  const [currentSlide, setCurrentSlide] = useState(photos.indexOf(selectedPhoto));

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % photos.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + photos.length) % photos.length;
    setCurrentSlide(newIndex);
  };

  return (
    <ModalOverlay onClick={() => setSelectedPhoto(null)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setSelectedPhoto(null)}>&times;</CloseButton>
        <CarouselControls>
          <CarouselButton onClick={prevSlide}>&lt;</CarouselButton>
          <Photo src={photos[currentSlide]} />
          <CarouselButton onClick={nextSlide}>&gt;</CarouselButton>
        </CarouselControls>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalSlider;



// src/Components/Gallery/ModalSlider.jsx
// import React from 'react';
// import styled from 'styled-components';

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const ModalContent = styled.div`
//   position: relative;
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
// `;

// const Photo = styled.img`
//   max-width: 80vw;
//   max-height: 80vh;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

// const ModalSlider = ({ selectedPhoto, setSelectedPhoto }) => {
//   return (
//     <ModalOverlay onClick={() => setSelectedPhoto(null)}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <CloseButton onClick={() => setSelectedPhoto(null)}>&times;</CloseButton>
//         <Photo src={selectedPhoto} />
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default ModalSlider;



// // src/Components/Gallery/ModalSlider.jsx
// import React from 'react';
// import styled from 'styled-components';

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const ModalContent = styled.div`
//   position: relative;
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
// `;

// const Photo = styled.img`
//   max-width: 80vw;
//   max-height: 80vh;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

// const ModalSlider = ({ photos, selectedPhoto, setSelectedPhoto }) => {
//   return (
//     <ModalOverlay onClick={() => setSelectedPhoto(null)}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <CloseButton onClick={() => setSelectedPhoto(null)}>&times;</CloseButton>
//         <Photo src={selectedPhoto} />
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default ModalSlider;
