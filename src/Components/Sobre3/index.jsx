import React, {useState} from "react";
import 'aos/dist/aos.css';
import "./Sobre3.css";
import Modal from './Modal/Modal';
import img1 from "../../Assets/Photos/camiseta1.png";

import {
    SobreContainer,
    SobreContent,
    SobreRowCards,
    SobreRowCardsImg,
    SobreRowCardsInfo,
    SobreRowCardsInfopangeia,
    SobreRowCardsInfoAno,
    SobreRowCardsInfoDesc,
    SobreRowCardsInfoButton,
    ButtonModal,

} 
from "./InfoElement3";

const SobrePangeia3 = ({
    id, alt, pangeia1, ano1, button,
}) => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return(
            <SobreContainer  id={id}>
                <SobreContent>
                        <SobreRowCards>
                            <SobreRowCardsImg>
                                <img src={img1} width='100%' height='100%' alt={alt} />
                            </SobreRowCardsImg>
                            <SobreRowCardsInfo>
                                <SobreRowCardsInfopangeia><strong>{pangeia1}</strong></SobreRowCardsInfopangeia>
                                <SobreRowCardsInfoAno><strong>{ano1}</strong></SobreRowCardsInfoAno>
                                <SobreRowCardsInfoDesc><p>Em homenagem ao educador e filósofo - <strong>Paulo Freire</strong></p></SobreRowCardsInfoDesc>
                                <SobreRowCardsInfoButton>
                                    <ButtonModal onClick={openModal} >{button}</ButtonModal>
                                    <Modal showModal={showModal} setShowModal={setShowModal} />
                                </SobreRowCardsInfoButton>
                            </SobreRowCardsInfo>
                        </SobreRowCards>
                </SobreContent>
            </SobreContainer>
    )
}

export default SobrePangeia3;