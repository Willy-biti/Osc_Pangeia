import React from 'react';
import * as C from './Elements';
import { DataLema } from './Items';

function Lema() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1>
                    <h1>{DataLema.Title}</h1>
                    <h4>{DataLema.Desc}</h4>
                </C.Div1>
                <C.Div2>
                    {/* <C.TitleDiv2>{DataLema.TitleLema}</C.TitleDiv2> */}
                    <C.ContentDiv2>
                        <C.Lema>{DataLema.Lema1}</C.Lema>
                        <C.Lema>{DataLema.Lema2}</C.Lema>
                        <C.Lema>{DataLema.Lema3}</C.Lema>
                        <C.Lema>{DataLema.Lema4}</C.Lema>
                    </C.ContentDiv2>
                </C.Div2>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Lema;