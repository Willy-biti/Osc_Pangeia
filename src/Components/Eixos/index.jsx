import React from 'react';
import * as C from './Elements';
import { DataEixos } from './Items'
// import { DataEixo} from './Items';

function Eixos() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1>
                    hhhdddddd
                </C.Div1>
                <C.Div2>
                    <C.TitleDiv2>
                        <h1>{DataEixos.Title}</h1>
                        <h4>{DataEixos.SubTitle}</h4>
                    </C.TitleDiv2>
                    <C.DescDiv2>
                        <h2>{DataEixos.TitleEixo1}</h2>
                        <h4>{DataEixos.DescEixo1}</h4>
                        <h2>{DataEixos.TitleEixo2}</h2>
                        <h4>{DataEixos.DescEixo2}</h4>
                    </C.DescDiv2>
                </C.Div2>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Eixos;