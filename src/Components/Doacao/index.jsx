import React from 'react';
import * as C from './Elements';
import DataDonate from './Items';

function Donate() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1>
                    <h1>{DataDonate.Title}</h1>
                    <h2>{DataDonate.Desc}</h2>
                </C.Div1>
                <C.Div2>
                    <C.DivDescForm>
                        <div>
                            <h2>{DataDonate.TitleDescForm1}</h2>
                            <h4>{DataDonate.TexteDescForm1}</h4>
                        </div>
                        <div>
                            <h2>{DataDonate.TitleDescForm2}</h2>
                            <h4>{DataDonate.TexteDescForm2}</h4>
                        </div>
                    </C.DivDescForm>
                    <C.DivForm>
                    </C.DivForm>
                </C.Div2>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Donate;