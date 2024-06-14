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
    BtnWrap,
} 
from "./InfoElement2";



const SobrePangeia2 = () => {

    useEffect(() => {
        Aos.init({duration: 2000, offset: 200,});
    }, []);
    
    return(
            <SobreContainer >
                <SobreWrapper>
                    <SobreRow >
                    
                        <Column1 data-aos="zoom-in">
                        <TextWrapper>
                            <TopLine>PANGEIA</TopLine>
                            <Heading>Missão</Heading>
                            <Subtitle>Oferecer um espaço de convívio e prática do futebol a imigrantes, tanto estrangeiros como Brasileiros, moradores em Florianópolis vinculados ou não à UFSC.</Subtitle>
                            <BtnWrap>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2 data-aos="zoom-in">
                        <TextWrapper>
                            <TopLine>PANGEIA</TopLine>
                            <Heading>Visão</Heading>
                            <Subtitle>Consolidar a associação como espaço onde a solidariedade viva do futebol junto com o intercâmbio cultural transcende as barreiras geográficas das nações.</Subtitle>
                            <BtnWrap>
                            </BtnWrap>
                        </TextWrapper>
                        </Column2>
                        <Column1 data-aos="zoom-in">
                        <TextWrapper>
                            <TopLine>PANGEIA</TopLine>
                            <Heading>Princípios</Heading>
                            <Subtitle>
                                A associação esportiva e cultura pangeia FC promove princípios que atua no combate ao preconceito e descriminação do <strong>Racismo</strong>, <strong>Machismo</strong>, <strong>Fascismo</strong> e <strong>Homofobia</strong>.
                            </Subtitle>
                            <BtnWrap>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                    </SobreRow>
                </SobreWrapper>
            </SobreContainer>
    )
}

export default SobrePangeia2;