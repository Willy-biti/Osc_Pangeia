import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
    GallaryContainer,
    GallaryContent,
    GallaryTitle,
    GallaryH1,
    GallaryContext,
    GallaryPhotos,
    GallaryVideos,
    GallaryCard,
    GallaryCardTitle,
    GallaryCardTxt,
    GallaryCardBtn,
    GallaryLink,
} 
from "./GalleryElements"

const Gallary = (
    id,
    Title,
    description,

) => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
            <GallaryContainer id="Gallery">
                <GallaryContent>
                    <GallaryTitle>
                        <GallaryH1>Galeria</GallaryH1>
                    </GallaryTitle>
                    <GallaryContext>
                        <GallaryPhotos>
                            <GallaryCard data-aos="zoom-in">
                                <GallaryCardTitle>Fotos</GallaryCardTitle>
                                <GallaryCardTxt>A pangeia tem algumas fotos arquivadas de todos os encontros desde a sua criação</GallaryCardTxt>
                                <GallaryCardBtn>
                                    <GallaryLink to="/fotos">Clique</GallaryLink>
                                </GallaryCardBtn>
                            </GallaryCard>
                        </GallaryPhotos>
                        <GallaryVideos>
                            <GallaryCard data-aos="zoom-in">
                            <GallaryCardTitle>Vídeos</GallaryCardTitle>
                                <GallaryCardTxt>A pangeia tem algumas Videos arquivadas de todos os encontros desde a sua criação</GallaryCardTxt>
                                <GallaryCardBtn>
                                <GallaryLink to="/videos">Clique</GallaryLink>
                                </GallaryCardBtn>
                            </GallaryCard>
                        </GallaryVideos>
                    </GallaryContext>
                </GallaryContent>
            </GallaryContainer>
    )
}

export default Gallary;

