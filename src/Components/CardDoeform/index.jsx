import React from 'react';
import  * as C from"./ElementsDuvidas";

import { FaDonate } from 'react-icons/fa';
import {FaWpforms} from 'react-icons/fa6';

const openForm = () => {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSfoq9jGLJFJ28ZYqqOkWUAH92RflaG0V4xotjUD55Cm04QzdA/viewform?usp=pp_url", "_blank");
};


function CardDoeForm() {
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
                <p> Faça parte dessa jornada e doe agora!</p>
              </C.Description>
              <C.DivButton>
                <C.Button to='/doacao'>Apoie agora</C.Button>
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
                <p> Quer se tornar membro? clique em baixo para preencher o formulário</p>
              </C.Description>
              <C.DivButton>
                <C.Button2 onClick={openForm}
                >Clique aqui</C.Button2>
              </C.DivButton>
              </C.OverlayDiv>
            </C.Content2>
        </C.Container>
    </>
  )
}

export default CardDoeForm;
