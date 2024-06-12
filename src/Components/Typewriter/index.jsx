
import React, { useState, useEffect } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

import {Container, Title, H1Title, TypewriterContainer, TextLine} from './ElementTypewriter'



const texts = [
  'AntiFascismo',
  'AntiRacismo',
  'AntiRacismo',
  'AntiRacismo',
];

const Typewriter = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedTexts, setDisplayedTexts] = useState([]);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const timer = setTimeout(() => {
        setDisplayedTexts((prevTexts) => [...prevTexts, texts[currentTextIndex]]);
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 4000); // 3 segundos para digitar + 1 segundo de pausa

      return () => clearTimeout(timer);
    } 
    // else {
    //   const loopTimer = setTimeout(() => {
    //     setDisplayedTexts([]);
    //     setCurrentTextIndex(0);
    //   }, 10000); // Tempo de pausa antes de reiniciar o loop

    //   return () => clearTimeout(loopTimer);
    // }
  }, [currentTextIndex]);

  return (
    <Container>
        <Title>
            <H1Title>
                Uma associação : 
            </H1Title>
        </Title>
      <TypewriterContainer>
        {displayedTexts.map((text, index) => (
          <TextLine key={index}>
            <TypeWriterEffect
              textStyle={{ color: 'white' }}
              startDelay={100}
              cursorColor="white"
              text={text}
              typeSpeed={100}
              hideCursorAfterText={true}
            />
          </TextLine>
        ))}
      </TypewriterContainer>
    </Container>
  );
};

export default Typewriter;

