import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriterH1 = () => {
  return (
    <>
      <Typewriter
        words={['FESTIVAL SEM FRONTEIRA 2024']}
        loop={1}
        // cursor   
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={90}
        delaySpeed={1000}
      />
    </>
  );
};

export default TypeWriterH1;
