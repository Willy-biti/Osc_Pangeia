import React from "react";
import {MdClose} from "react-icons/md"

import styled from "styled-components"

const Bg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const MoadaWrapper = styled.div`
    width: 80vw;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: flex;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    // margin-bottom: 10px;

    @media screen and (max-width: 400px){
        flex-direction: column;
        margin-bottom: 60px;
    }
`

const ModalFoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #000;

    @media screen and (max-width: 400px){
        width: 80vw;
    }
`

const ModalImg = styled.img`
    width: 80%;
    height: 80%;
    border-radius: 10px 0 0 10px;
    background: #000;
`

const ModalContent = styled.div`
display: flex;
width: 40vw;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
background: #000;
color: #f1f1f1;

h2{
    color: red;
}

p{
    margin: 15px;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 14px;
}

h5{
    margin: 15px;
    text-align: center;
}

@media screen and (max-width: 400px){
    width: 80vw;
    height: 80vh;
}
`

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0px;
z-index: 10;
color: white;
`

const Modal = ({showModal, setShowModal}) =>{
    return (
        <>
            {
                showModal ? (
                    <Bg>
                        <MoadaWrapper showModal={showModal}>
                            <ModalFoto >
                            <ModalImg src={require('../../../images/PauloFreire.png')} alt="Paulo Freire" />
                            </ModalFoto>
                            <ModalContent>
                                <h2><strong>Paulo Freire</strong></h2>
                                <p>Paulo Reglus Neves Freire foi um educador e filósofo brasileiro. É considerado um dos pensadores mais notáveis na história da pedagogia mundial, tendo influenciado o movimento chamado pedagogia crítica. É também o Patrono da Educação Brasileira.</p>
                                <h5><strong>"Quando a educação não é libertadora, o sonho do oprimido é ser o opressor."</strong></h5>
                            </ModalContent>
                            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal
                            (prev => !prev)} />
                        </MoadaWrapper>
                    </Bg>
                ) : null
            }
        </>
    )
        
    
}

export default Modal;