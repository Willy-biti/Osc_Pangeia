import React, { useState, useEffect } from 'react';
import {
  CountdownContainer,
  ContentWrapper,
  Title,
  TimerContainer,
  TimerComponent,
  TimerNumber,
  TimerLabel,
  MoreInfoButton
} from './ElementsCountTimer';

import TypeWriterH1 from './TypeWriter';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-17T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <CountdownContainer>
      <ContentWrapper>
        <Title>
          <TypeWriterH1 />
        </Title>
        <TimerContainer>
          <TimerDisplay timeLeft={timeLeft} />
        </TimerContainer>
        <MoreInfoButton onClick={() => alert('Saiba mais sobre o Festival 2024!')}>
          Saiba Mais
        </MoreInfoButton>
      </ContentWrapper>
    </CountdownContainer>
  );
};

const TimerDisplay = ({ timeLeft }) => {
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <TimerComponent key={interval}>
        <TimerNumber>{timeLeft[interval]}</TimerNumber>
        <TimerLabel>{translateLabel(interval)}</TimerLabel>
      </TimerComponent>
    );
  });

  return timerComponents.length ? timerComponents : <span>Em breve, próximo evento!!</span>;
};

const translateLabel = (interval) => {
  const labels = {
    weeks: 'Semanas',
    days: 'Dias',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
  };
  return labels[interval];
};

export default CountdownTimer;