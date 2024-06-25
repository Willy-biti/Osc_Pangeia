import React from 'react';
import  * as C from"./ElementsDuvidas";

import { FaDonate } from 'react-icons/fa';
import {FaWpforms} from 'react-icons/fa6'

function Duvidas() {
  return (
    <>
        <C.Container>
            <C.Content>
              <C.Icon>
                <FaDonate style={{ 
                  color: '#4CAF50', 
                  fontSize: '40px', 
                  margin: '10px',
                   }}/>
              </C.Icon>
              <C.Description>
                <p> Com sua ajuda, o ICOM pode trabalhar para fortalecer a sociedade civil da cidade, coletar e organizar conhecimento do território, e fomentar o investimento social privado na região</p>
              </C.Description>
              <C.DivButton>
                <C.Button>Apoie agora</C.Button>
              </C.DivButton>
            </C.Content>
            <C.Content2>
              <C.OverlayDiv>
              <C.Icon>
                <FaWpforms style={{ 
                  color: '#000', 
                  fontSize: '40px', 
                  margin: '10px',
                   }}/>
              </C.Icon>
              <C.Description>
                <p> Quer se tornar membro? clique em saiba mais para preencher o formulário</p>
              </C.Description>
              <C.DivButton>
                <C.Button style={{
                  background: '#000',
                  color: ''
                }}
                >Apoie agora</C.Button>
              </C.DivButton>
              </C.OverlayDiv>
            </C.Content2>
        </C.Container>
    </>
  )
}

export default Duvidas
