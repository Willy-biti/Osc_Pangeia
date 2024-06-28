// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import styled from 'styled-components';
// import Modal from 'react-modal';
// import './Carroussel.css';
// import theme from '../../Theme/theme';

// import Img from "../../Assets/Photos/camiseta1.png"

// const Section = styled.section`
//   display: flex;
//   justify-content: center;
//   background-color: ${theme.primary};
//   padding: 20px 0;
// `;

// const Container = styled.div`
//   width: 80%;
//   height: 80%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const CarouselContainer = styled.div`
//   width: 80%;
//   height: 80%;
// `;

// const CarouselItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 20px 0;
// `;

// const Image = styled.img`
//   width: 50%;
  
// `;

// const Content = styled.div`
//   width: 50%;
//   padding: 20px;
//   color: white;

//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   background: red;
// `;

// const Title = styled.h2`
//   color: white;
// `;

// const Description = styled.p`
//   color: white;
// `;

// const Button = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ModalContent = styled.div`
//   width: 80%;
//   background-color: #000;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const ModalImage = styled.img`
//   width: 100%;
//   max-width: 500px;
//   margin-bottom: 20px;
// `;

// Modal.setAppElement('#root');

// const items = [
//   {
//     title: "Título 1",
//     description: "Descrição 1",
//     image: Img,
//     detail: "Detalhes 1"
//   },
//   {
//     title: "Título 2",
//     description: "Descrição 2",
//     image: Img,
//     detail: "Detalhes 2"
//   },
//   {
//     title: "Título 3",
//     description: "Descrição 3",
//     image: Img,
//     detail: "Detalhes 3"
//   },
//   {
//     title: "Título 4",
//     description: "Descrição 4",
//     image: Img,
//     detail: "Detalhes 4"
//   }
// ];



// const CarouselSection = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedItem(null);
//   };

//   return (
//     <Section>
//       <Container>
//         <CarouselContainer>
//           <Carousel showThumbs={false} showStatus={false}>
//             {items.map((item, index) => (
//               <CarouselItem key={index}>
//                 <Image src={item.image} alt={item.title} />
//                 <Content>
//                   <Title>{item.title}</Title>
//                   <Description>{item.description}</Description>
//                   <Button onClick={() => openModal(item)}>Saiba Mais</Button>
//                 </Content>
//               </CarouselItem>
//             ))}
//           </Carousel>
//         </CarouselContainer>
//       </Container>
//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         {selectedItem && (
//           <ModalContent>
//             <ModalImage src={selectedItem.image} alt={selectedItem.title} />
//             <Title>{selectedItem.title}</Title>
//             <Description>{selectedItem.detail}</Description>
//             <Button onClick={closeModal}>Fechar</Button>
//           </ModalContent>
//         )}
//       </Modal>
//     </Section>
//   );
// };

// export default CarouselSection;

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Modal from 'react-modal';
import './Carroussel.css';


import Img from "../../Assets/Photos/camiseta1.png";

const Section = styled.section`
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 20px 0;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

const CarouselItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 50%;
`;

const Content = styled.div`
  width: 50%;
  padding: 20px;
  color: white;
`;

const Title = styled.h2`
  color: white;
`;

const Description = styled.p`
  color: white;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ModalContent = styled.div`
  width: 80%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ModalImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

Modal.setAppElement('#root');

const items = [
  {
    title: "Título 1",
    description: "Descrição 1",
    image: Img,
    detail: "Detalhes 1"
  },
  {
    title: "Título 2",
    description: "Descrição 2",
    image: Img,
    detail: "Detalhes 2"
  },
  {
    title: "Título 3",
    description: "Descrição 3",
    image: Img,
    detail: "Detalhes 3"
  },
  {
    title: "Título 4",
    description: "Descrição 4",
    image: Img,
    detail: "Detalhes 4"
  }
];

const CarouselSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <Section>
      <Container>
        <CarouselContainer>
          <Carousel 
            showThumbs={false} 
            showStatus={false} 
            autoPlay 
            infiniteLoop
            interval={3000}
            stopOnHover
            showArrows={true}
            showIndicators={true}
          >
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <Image src={item.image} alt={item.title} />
                <Content>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <Button onClick={() => openModal(item)}>Saiba Mais</Button>
                </Content>
              </CarouselItem>
            ))}
          </Carousel>
        </CarouselContainer>
      </Container>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedItem && (
          <ModalContent>
            <ModalImage src={selectedItem.image} alt={selectedItem.title} />
            <Title>{selectedItem.title}</Title>
            <Description>{selectedItem.detail}</Description>
            <Button onClick={closeModal}>Fechar</Button>
          </ModalContent>
        )}
      </Modal>
    </Section>
  );
};

export default CarouselSection;
