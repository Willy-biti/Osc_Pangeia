import React, { useState, useEffect } from 'react';
// import { GalleryContainer, Photo } from './GalleryContainer';
import { storage } from '../../Firebase/FireFotosGaleria';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import ModalSlider from './ModalFotos';
import styled from 'styled-components';
import theme from '../../Theme/theme';

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background: ${theme.background};
`

const Content = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 colunas com largura igual */
    grid-template-rows: 250px;              /* altura fixa de 250px para as linhas */
    grid-gap: 2px;                         /* espaçamento entre as células */
    padding: 100px 0;                       /* preenchimento acima e abaixo do grid */

    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Reduzir o tamanho das colunas para telas menores */
      }
    
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Ainda mais redução para telas menores */
      }
`;

// Estilizando o componente Photo
const Photo = styled.img`
  width: 100%;            /* ocupar 100% do espaço da célula */
  height: 100%;           /* ocupar 100% do espaço da célula */
  object-fit: cover;      /* ajustar a imagem dentro do espaço disponível */
  cursor: pointer;

  /* Aplicando estilos específicos ao primeiro filho */
  &:nth-child(1) {
    grid-column-start: span 2;  /* ocupa duas colunas */
  }

  &:nth-child(4) {
    grid-column-start: span 2;  /* ocupa duas colunas */
  }

  &:nth-child(8) {
    grid-column-start: span 2;  /* ocupa duas colunas */
  }

  &:nth-child(103) {
    grid-column-start: span 2;  /* ocupa duas colunas */
  }

  @media (max-width: 768px) {
    /* Para telas menores, fazer os primeiros itens ocuparem apenas uma coluna */
    &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10) {
      grid-column: span 1;  /* cada um ocupa uma coluna */
    }
  }
`;


const FotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const imagesRef = ref(storage, 'images');
        const imagesList = await listAll(imagesRef);
        const urls = await Promise.all(
          imagesList.items.map((item) => getDownloadURL(item))
        );
        setPhotos(urls);
      } catch (error) {
        console.error('Error fetching images from Firebase:', error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <Container>
        <Content>
        {photos.map((url, index) => (
        <Photo key={index} src={url} onClick={() => setSelectedPhoto(url)} />
      ))}
      {selectedPhoto && (
        <ModalSlider
          photos={photos}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      )}
        </Content>
    </Container>
  );
};

export default FotoGallery;



// src/Components/Gallery/Gallery.jsx
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { storage } from '../../Firebase/FireFotosGaleria';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import ModalSlider from './ModalFotos';
// import theme from '../../Theme/theme';

// const Container = styled.div`
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     background: ${theme.background};
// `

// const Content = styled.div`
//     width: 80%;
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);  /* 3 colunas com largura igual */
//     grid-template-rows: 250px;              /* altura fixa de 250px para as linhas */
//     grid-gap: 2px;                         /* espaçamento entre as células */
//     padding: 100px 0;                       /* preenchimento acima e abaixo do grid */

//     @media (max-width: 1024px) {
//         grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Reduzir o tamanho das colunas para telas menores */
//       }
    
//       @media (max-width: 768px) {
//         grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Ainda mais redução para telas menores */
//       }
// `;

// // Estilizando o componente Photo
// const Photo = styled.img`
//   width: 100%;            /* ocupar 100% do espaço da célula */
//   height: 100%;           /* ocupar 100% do espaço da célula */
//   object-fit: cover;      /* ajustar a imagem dentro do espaço disponível */
//   cursor: pointer;

//   /* Aplicando estilos específicos ao primeiro filho */
//   &:nth-child(1) {
//     grid-column-start: span 2;  /* ocupa duas colunas */
//   }

//   &:nth-child(4) {
//     grid-column-start: span 2;  /* ocupa duas colunas */
//   }

//   &:nth-child(8) {
//     grid-column-start: span 2;  /* ocupa duas colunas */
//   }

//   &:nth-child(103) {
//     grid-column-start: span 2;  /* ocupa duas colunas */
//   }

//   @media (max-width: 768px) {
//     /* Para telas menores, fazer os primeiros itens ocuparem apenas uma coluna */
//     &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10) {
//       grid-column: span 1;  /* cada um ocupa uma coluna */
//     }
//   }
// `;

// const FotoGallery = () => {
//   const [photos, setPhotos] = useState([]);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const imagesRef = ref(storage, 'images');
//         const imagesList = await listAll(imagesRef);
//         const urls = await Promise.all(
//           imagesList.items.map((item) => getDownloadURL(item))
//         );
//         setPhotos(urls);
//       } catch (error) {
//         console.error('Error fetching images from Firebase:', error);
//       }
//     };
//     fetchPhotos();
//   }, []);

//   return (
//     <Container>
//         <Content>
//             {photos.map((url, index) => (
//             <Photo key={index} src={url} onClick={() => setSelectedPhoto(url)} />
//         ))}
//         {selectedPhoto && (
//             <ModalSlider
//             photos={photos}
//             selectedPhoto={selectedPhoto}
//             setSelectedPhoto={setSelectedPhoto}
//             />
//         )}
//         </Content>
//     </Container>
//   );
// };

// export default FotoGallery;



// // src/Components/Gallery/Gallery.jsx
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { storage } from '../../Firebase';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import ModalSlider from './ModalFotos';

// const GalleryContainer = styled.div`
//     margin-top: 80px;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 16px;

//   background: blue; 
// `;

// const Photo = styled.img`
//   width: 500px;
//   height: 200px;
//   object-fit: cover;
//   cursor: pointer;
// `;

// const FotoGallery = () => {
//   const [photos, setPhotos] = useState([]);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const imagesRef = ref(storage, 'images'); // Aqui ajustamos para 'images'
//       const imagesList = await listAll(imagesRef);
//       const urls = await Promise.all(
//         imagesList.items.map((item) => getDownloadURL(item))
//       );
//       setPhotos(urls);
//     };
//     fetchPhotos();
//   }, []);

//   return (
//     <GalleryContainer>
//       {photos.map((url, index) => (
//         <Photo key={index} src={url} onClick={() => setSelectedPhoto(url)} />
//       ))}
//       {selectedPhoto && (
//         <ModalSlider
//           photos={photos}
//           selectedPhoto={selectedPhoto}
//           setSelectedPhoto={setSelectedPhoto}
//         />
//       )}
//     </GalleryContainer>
//   );
// };

// export default FotoGallery;


// // src/Components/Gallery/Gallery.jsx
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { storage } from '../../Firebase';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import ModalSlider from './ModalFotos';

// const GalleryContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
//   background: blue;
// `;

// const Photo = styled.img`
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
//   cursor: pointer;
// `;

// const FotoGallery = () => {
//   const [photos, setPhotos] = useState([]);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const photosRef = ref(storage, 'photos');
//       const photosList = await listAll(photosRef);
//       const urls = await Promise.all(
//         photosList.items.map((item) => getDownloadURL(item))
//       );
//       setPhotos(urls);
//     };
//     fetchPhotos();
//   }, []);

//   return (
//     <GalleryContainer>
//       {photos.map((url, index) => (
//         <Photo key={index} src={url} onClick={() => setSelectedPhoto(url)} />
//       ))}
//       {selectedPhoto && (
//         <ModalSlider
//           photos={photos}
//           selectedPhoto={selectedPhoto}
//           setSelectedPhoto={setSelectedPhoto}
//         />
//       )}
//     </GalleryContainer>
//   );
// };

// export default FotoGallery;
