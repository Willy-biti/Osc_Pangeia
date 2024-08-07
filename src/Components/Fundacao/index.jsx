import React from 'react';
import * as C from './ElementsFunda';
import {Meka} from './Items';
import TimeLine from './Timeline/Timeline';

function Fundacao() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1>
                  <C.Div1Content>
                    <h1>{Meka.Title}</h1>
                    <p>{Meka.Desc}</p>
                  </C.Div1Content>
                </C.Div1>
                <C.Div2>
                  <TimeLine />
                </C.Div2>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Fundacao;
