import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountdownTimer from '../CountTimer';
import Typewriter from '../Typewriter';
// import {GoAlert} from 'react-icons/go'

import src from "../../Assets/Photos/scroll-down-hero.png"

import * as C from "./HeroElements"

const HeroSection = ({id}) => {


    return(
            <C.HeroContainer id={id}>
                <C.HeroBg>
                    <C.Content>
                        <C.Pincipe>
                            <Typewriter />
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