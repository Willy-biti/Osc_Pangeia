import React, { useState, useEffect } from 'react';
import { storage } from '../../Firebase/FireFotosGaleria';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import ModalSlider from './ModalHaiti';
import * as C from './Elements';


const FestaHaitiana = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const imagesRef = ref(storage, 'Haiti');
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
    <C.Container>
        <C.Content>
        {photos.map((url, index) => (
        <C.Photo key={index} src={url} onClick={() => setSelectedPhoto(url)} />
      ))}
      {selectedPhoto && (
        <ModalSlider
          photos={photos}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      )}
        </C.Content>
    </C.Container>
  );
};

export default FestaHaitiana;


