import React from 'react';

import styled from 'styled-components';
import CountdownTimer from '../Contagem/count'

// import CustomCountdown from '../Contagem'

const C = styled.div`
    display: flex;
    justify-content: center;
    widght: 100% ;
    background-color: red;
`

const Contage = styled.div`
  height: 800px;
`

function Tesudo() {
  const targetDate = '2025-01-01T00:00:00';

  return (
    <C>
      <Contage>
        {/* <CustomCountdown targetDate={targetDate} /> */}
        <CountdownTimer />
      </Contage>
    </C>
  )
}

export default Tesudo