import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    SobreContainer,
    SobreWrapper,
    SobreRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    SaibaMaisItem, 
    BtnWrapLinkR,
    ImgWrap,
    Img
} 
from "./InfoElement";

import img from "../../Assets/Photos/Logo.png"

const SobrePangeia = ({
    id, 
    imgStart,
    lighBg,
    topLine, 
    headline, 
    description, 
    alt,
    
}) => {

    useEffect(() => {
        Aos.init({duration: 2000, offset: 200,});
    }, []);

    return(
            <SobreContainer  >
                <SobreWrapper>
                    <SobreRow >
                        <Column1 data-aos="fade-right">
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading>{headline}</Heading>
                            <Subtitle>{description}</Subtitle>
                            <SaibaMaisItem >
                                <BtnWrapLinkR to="/historia">Saiba Mais! </BtnWrapLinkR>
                            </SaibaMaisItem>
                        </TextWrapper>
                        </Column1>
                        <Column2 data-aos="fade-left">
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </SobreRow>
                </SobreWrapper>
            </SobreContainer>
    )
}

export default SobrePangeia;