import React, {useEffect} from "react";
import Video from "../../Assets/Videos/video.mp4";
import {BsFillArrowDownSquareFill} from "react-icons/bs"
import { animateScroll as scroll } from "react-scroll";
import Aos from 'aos';
import 'aos/dist/aos.css';
// import {GoAlert} from 'react-icons/go'

import src from "../../Assets/Photos/scroll-down-hero.png"

import {
    HeroContainer, 
    OverLay,
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroDesce,
    HeroDesceLink,
    Aviso,
} 
from "./HeroElements"

const HeroSection = ({id}) => {

    const toggleHome = () => {
        scroll.scrollToBottom()
    }

    useEffect(() => {
        Aos.init({duration: 2000, offset: 200,});
    }, []);

    return(
            <HeroContainer id={id}>
                <OverLay />
                <HeroBg>
                    < VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
                </HeroBg>
                <HeroContent>
                    <HeroH1 data-aos="zoom-in">Pangeia no mundo</HeroH1>
                    <HeroP data-aos="zoom-in">
                        <strong>AntiFascismo</strong>; <strong>AntiRascismo</strong>;  <strong>AntiMachismo</strong>; <strong>AntiHomofobia</strong>
                    </HeroP>
                    <HeroDesce  onClick={toggleHome}>
                        <HeroDesceLink onClick={toggleHome}>
                            <img src={src} width='50px' height='30px' alt='scroll-down-hero' />
                        </HeroDesceLink>
                    </HeroDesce>
                    {/* <Aviso data-aos="fade-left">
                        <GoAlert size={30}/>
                        <h1>SITE EM CONSTRUÇÃO</h1>
                    </Aviso> */}
                </HeroContent>
            </HeroContainer>
    )
}


export default HeroSection;