import React from 'react';
import * as C from './ElementsFunda';
import ToggleComponent from './Test';

function Fundacao() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1></C.Div1>
                <C.Div2></C.Div2>
                <ToggleComponent />
            </C.Content>
        </C.Container>
    </>
  )
}

export default Fundacao;