import React from 'react';
import * as C from './Elements';
import { DataEixo } from './Items';

function Eixos() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1>
                    <h1>{DataEixo.Title}</h1>
                    <h4>{DataEixo.Desc}</h4>
                </C.Div1>
                <C.Div2>
                    {/* <C.TitleDiv2>{DataEixo.TitleLema}</C.TitleDiv2> */}
                    <C.ContentDiv2>
                        <C.Lema>{DataEixo.Lema1}</C.Lema>
                        <C.Lema>{DataEixo.Lema2}</C.Lema>
                        <C.Lema>{DataEixo.Lema3}</C.Lema>
                        <C.Lema>{DataEixo.Lema4}</C.Lema>
                    </C.ContentDiv2>
                </C.Div2>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Eixos;