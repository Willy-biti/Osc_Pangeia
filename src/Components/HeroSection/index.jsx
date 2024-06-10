import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountdownTimer from '../CountTimer'
// import {GoAlert} from 'react-icons/go'

import src from "../../Assets/Photos/scroll-down-hero.png"

import * as C from "./HeroElements"

const HeroSection = ({id}) => {


    return(
            <C.HeroContainer id={id}>
                <C.HeroBg>
                    <C.Content>
                        <C.Pincipe>
                            <C.h2Principe>AntiRascimo</C.h2Principe>
                            <C.h2Principe>AntiOmofobia</C.h2Principe>
                            <C.h2Principe>AntiFascismo</C.h2Principe>
                            <C.h2Principe>AntiRascimo</C.h2Principe>
                        </C.Pincipe>
                        <C.CounterHero>
                            <CountdownTimer />
                        </C.CounterHero>
                    </C.Content>
                </C.HeroBg>
            </C.HeroContainer>
    )
}


export default HeroSection;