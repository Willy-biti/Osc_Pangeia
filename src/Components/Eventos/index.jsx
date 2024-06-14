import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

// import Eift from "../../images/Eventos/EoftPerfil.jpeg";
// import Fraid from "../../images/Eventos/Fraiburgo/FrProfil.jpeg";
// import HaitiFoto from "../../images/Eventos/Haiti/Perfilcard.png"

import {
    EventosContainer,
    EventosContent,
    EventosH1,
    EventosWrapper,
    EventosCard,
    EventosCardM,
    EventosIcon,
    EventosH2,
    EventosP,
    BtnEnventos,
    BtnEntvosLink
} 
from "./EventosElements"

const Eventos = () => {

    useEffect(() => {
        Aos.init({duration: 2000, offset: 200,});
    }, []);

    return(
            <EventosContainer id="Eventos">
                <EventosContent>
                    <EventosH1>Eventos</EventosH1>
                    <EventosWrapper>

                        <EventosCard data-aos="zoom-in">
                            {/* <EventosIcon  src={Fraid}/> */}
                            <EventosH2>Viagem Fraiburgo</EventosH2>
                            <EventosP>
                                Viagem  para Fraiburgo, município catarinense .
                            </EventosP>
                            <BtnEnventos>
                                <BtnEntvosLink to="/viagem-fraiburgos">Detalhes</BtnEntvosLink>
                            </BtnEnventos>
                        </EventosCard>

                        <EventosCardM data-aos="zoom-in">
                            {/* <EventosIcon  src={Eift}/> */}
                            <EventosH2>Eifa Pira Rupa</EventosH2>
                            <EventosP>
                                Visita à escola Eifa Pira Rupa numa aldeia indígina em Palhoça
                            </EventosP>
                            <BtnEnventos>
                                <BtnEntvosLink to="/Eifa-Pira-Rupa">Detalhes</BtnEntvosLink>
                            </BtnEnventos>
                        </EventosCardM>

                        <EventosCard data-aos="zoom-in">
                            {/* <EventosIcon  src={HaitiFoto} /> */}
                            <EventosH2>Festa haitiana</EventosH2>
                            <EventosP>
                                Evento organizado para falar e mostar outro lado do Haiti. 
                            </EventosP>
                            <BtnEnventos>
                                <BtnEntvosLink to="/festa-do-haiti">Detalhes</BtnEntvosLink>
                            </BtnEnventos>
                        </EventosCard>

                    </EventosWrapper>
                </EventosContent>
            </EventosContainer>
    )
}

export default Eventos;