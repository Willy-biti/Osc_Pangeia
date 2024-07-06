// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Section, Container, Haederobre3, H1Header, DescHeader, Content, Div1, Div2, Title, Description, Button } from './ElementsSobre3';
// import Modal from './Modal/Modal';
// import items from './Items';
// import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr';

// const Sobre3 = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState({});

//   const handleOpenModal = (item) => {
//     setModalContent(item.modalInfo);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const renderArrowPrev = (onClickHandler, hasPrev, label) =>
//     hasPrev && (
//       <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 'calc(50% - 60px)' }}>
//         <GrCaretPrevious size={23} />
//       </button>
//     );

//   const renderArrowNext = (onClickHandler, hasNext, label) =>
//     hasNext && (
//       <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 'calc(50% - 60px)' }}>
//         <GrCaretNext size={23} />
//       </button>
//     );

//   const arrowStyles = {
//     position: 'absolute',
//     bottom: 20,
//     backgroundColor: 'transparent',
//     color: '#F5F5F5',
//     border: 'none',
//     padding: '10px',
//     cursor: 'pointer',
//     zIndex: 2,
//     fontSize: '20px',
//   };

//   return (
//     <Section>
//       <Container>
//         <Haederobre3>
//           <H1Header>Coleção de uniforme pangeia</H1Header>
//           <DescHeader>
//             <p>
//               Aqui apresentamos as uniformes do Pangeia conforme a linha do tempo.
//             </p>
//           </DescHeader>
//         </Haederobre3>
//         <Carousel
//           autoPlay={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           showIndicators={false}
//           interval={2000}
//           renderArrowPrev={renderArrowPrev}
//           renderArrowNext={renderArrowNext}
//         >
//           {items.map((item) => (
//             <Content key={item.id}>
//               <Div1>
//                 <img src={item.Photo} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//               </Div1>
//               <Div2>
//                 <Title>{item.title}</Title>
//                 <Description>{item.description}</Description>
//                 <Button onClick={() => handleOpenModal(item)}>Abrir</Button>
//               </Div2>
//             </Content>
//           ))}
//         </Carousel>
//       </Container>
//       {isModalOpen && <Modal onClose={handleCloseModal} content={modalContent} />}
//     </Section>
//   );
// };

// export default Sobre3;



import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Section, Container, Haederobre3, H1Header, DescHeader,Div1Baixo, Div1Cima, Content, Div1, Div2, Title, Description, Button } from './ElementsSobre3';
import Modal from './Modal/Modal';
import items from './Items';


const Sobre3 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpenModal = (item) => {
    setModalContent(item.modalInfo);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 'calc(50% - 60px)' }}>
        {/* <GrCaretPrevious size={23} /> */}
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 'calc(50% - 60px)' }}>
        {/* <GrCaretNext size={23} />  */}
      </button>
    );

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyles = {
      background: isSelected ? '#000' : '#bbb',
      width: 10,
      height: 10,
      display: 'inline-block',
      margin: '0 8px',
      borderRadius: '50%',
      cursor: 'pointer',
    };

    return (
      <li
        style={indicatorStyles}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  const arrowStyles = {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'transparent',
    color: '#F5F5F5',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 2,
    fontSize: '20px',
  };

  return (
    <Section>
      <Container>
         {/* <Haederobre3>
          <H1Header>Coleção de uniforme pangeia</H1Header>
          <DescHeader>
            <p>
              Aqui apresentamos as uniformes do Pangeia conforme a linha do tempo.
            </p>
          </DescHeader>
        </Haederobre3> */}
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          renderIndicator={renderIndicator}
          interval={2000}
        >
          {items.map((item) => (
            <Content key={item.id}>
              <Div2>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button onClick={() => handleOpenModal(item)}>Abrir</Button>
              </Div2>
              <Div1>
                <Div1Baixo />
                <Div1Cima>
                <img src={item.Photo} alt={item.title} style={{ width: '80%', height: '100%', objectFit: 'cover' }} />
                </Div1Cima>
              </Div1>
            </Content>
          ))}
        </Carousel>
      </Container>
      {isModalOpen && <Modal onClose={handleCloseModal} content={modalContent} />}
    </Section>
  );
};

export default Sobre3;


// import React, { useState, useRef, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Section, Container, Haederobre3, H1Header, DescHeader, Div1Baixo, Div1Cima, Content, Div1, Div2, Title, Description, Button } from './ElementsSobre3';
// import Modal from './Modal/Modal';
// import items from './Items';

// const Sobre3 = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState({});
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'ArrowLeft') {
//         carouselRef.current.prev();
//       } else if (event.key === 'ArrowRight') {
//         carouselRef.current.next();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const handleOpenModal = (item) => {
//     setModalContent(item.modalInfo);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const renderArrowPrev = (onClickHandler, hasPrev, label) =>
//     hasPrev && (
//       <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 'calc(50% - 60px)' }}>
//         &#9664; {/* Substitua pelo ícone de sua escolha */}
//       </button>
//     );

//   const renderArrowNext = (onClickHandler, hasNext, label) =>
//     hasNext && (
//       <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 'calc(50% - 60px)' }}>
//         &#9654; {/* Substitua pelo ícone de sua escolha */}
//       </button>
//     );

//   const renderIndicator = (onClickHandler, isSelected, index, label) => {
//     const indicatorStyles = {
//       background: isSelected ? '#000' : '#bbb',
//       width: 10,
//       height: 10,
//       display: 'inline-block',
//       margin: '0 8px',
//       borderRadius: '50%',
//       cursor: 'pointer',
//     };

//     return (
//       <li
//         style={indicatorStyles}
//         onClick={onClickHandler}
//         onKeyDown={onClickHandler}
//         value={index}
//         key={index}
//         role="button"
//         tabIndex={0}
//         aria-label={`${label} ${index + 1}`}
//       />
//     );
//   };

//   const arrowStyles = {
//     position: 'absolute',
//     bottom: 20,
//     backgroundColor: 'transparent',
//     color: '#F5F5F5',
//     border: 'none',
//     padding: '10px',
//     cursor: 'pointer',
//     zIndex: 2,
//     fontSize: '20px',
//   };

//   return (
//     <Section>
//       <Container>
//          {/* <Haederobre3>
//           <H1Header>Coleção de uniforme pangeia</H1Header>
//           <DescHeader>
//             <p>
//               Aqui apresentamos as uniformes do Pangeia conforme a linha do tempo.
//             </p>
//           </DescHeader>
//         </Haederobre3> */}
//         <Carousel
//           ref={carouselRef}
//           autoPlay={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           renderArrowPrev={renderArrowPrev}
//           renderArrowNext={renderArrowNext}
//           renderIndicator={renderIndicator}
//           interval={2000}
//         >
//           {items.map((item) => (
//             <Content key={item.id}>
//               <Div2>
//                 <Title>{item.title}</Title>
//                 <Description>{item.description}</Description>
//                 <Button onClick={() => handleOpenModal(item)}>Abrir</Button>
//               </Div2>
//               <Div1>
//                 <Div1Baixo />
//                 <Div1Cima>
//                 <img src={item.Photo} alt={item.title} style={{ width: '80%', height: '100%', objectFit: 'cover' }} />
//                 </Div1Cima>
//               </Div1>
//             </Content>
//           ))}
//         </Carousel>
//       </Container>
//       {isModalOpen && <Modal onClose={handleCloseModal} content={modalContent} />}
//     </Section>
//   );
// };

// export default Sobre3;
