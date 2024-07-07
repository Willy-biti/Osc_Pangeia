import * as C from "./EventosElements";
import {DataEvents} from "./Items";

function Eventos() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1>
                    <C.Div1Content>
                        <h1>{DataEvents.Title}</h1>
                        <p>{DataEvents.Desc}</p>
                    </C.Div1Content>
                </C.Div1>
                <C.Div2>
                    <C.Card1>
                        <C.Frofil1 />
                        <C.DescEvent>{DataEvents.DescEvent1}</C.DescEvent>
                        <C.ButtonEvent>
                            <C.BtnEntvosLink to='/eifa'>
                                Clique aqui
                            </C.BtnEntvosLink>
                        </C.ButtonEvent>
                    </C.Card1>
                    <C.Card2>
                        <C.Frofil2 />
                        <C.DescEvent>{DataEvents.DescEvent2}</C.DescEvent>
                        <C.ButtonEvent>
                            <C.BtnEntvosLink to='/fraiburgo'>
                                Clique aqui
                            </C.BtnEntvosLink>
                        </C.ButtonEvent>
                    </C.Card2>
                    <C.Card3>
                        <C.Frofil3 />
                        <C.DescEvent>{DataEvents.DescEvent3}</C.DescEvent>
                        <C.ButtonEvent>
                            <C.BtnEntvosLink to='/haiti'>
                                Clique aqui
                            </C.BtnEntvosLink>
                        </C.ButtonEvent>
                    </C.Card3>
                    <C.Card4>
                        <C.Frofil4 />
                        <C.DescEvent>{DataEvents.DescEvent4}</C.DescEvent>
                        <C.ButtonEvent>
                            <C.BtnEntvosLink to='/palestina'>
                                Clique aqui
                            </C.BtnEntvosLink>
                        </C.ButtonEvent>
                    </C.Card4>
                </C.Div2>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Eventos;



// import React, {useEffect} from "react";
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// import Eift from "../../Assets/Photos/Eventos/Perfil/EoftPerfil.jpeg";
// import Fraid from "../../Assets/Photos/Eventos/Perfil/FrProfil.jpeg";
// import HaitiFoto from "../../Assets/Photos/Eventos/Perfil/Perfilcard.png";

// import {
//     EventosContainer,
//     EventosContent,
//     EventosH1,
//     EventosWrapper,
//     EventosCard,
//     EventosCardM,
//     EventosIcon,
//     EventosH2,
//     EventosP,
//     BtnEnventos,
//     BtnEntvosLink
// } 
// from "./EventosElements"

// const Eventos = () => {

//     useEffect(() => {
//         Aos.init({duration: 2000, offset: 200,});
//     }, []);

//     return(
//             <EventosContainer id="Eventos">
//                 <EventosContent>
//                     <EventosH1>Eventos</EventosH1>
//                     <EventosWrapper>

//                         <EventosCard data-aos="zoom-in">
//                             <EventosIcon  src={Fraid}/>
//                             <EventosH2>Viagem Fraiburgo</EventosH2>
//                             <EventosP>
//                                 Viagem  para Fraiburgo, município catarinense .
//                             </EventosP>
//                             <BtnEnventos>
//                                 <BtnEntvosLink to="/viagem-fraiburgos">Detalhes</BtnEntvosLink>
//                             </BtnEnventos>
//                         </EventosCard>

//                         <EventosCardM data-aos="zoom-in">
//                             <EventosIcon  src={Eift}/>
//                             <EventosH2>Eifa Pira Rupa</EventosH2>
//                             <EventosP>
//                                 Visita à escola Eifa Pira Rupa numa aldeia indígina em Palhoça
//                             </EventosP>
//                             <BtnEnventos>
//                                 <BtnEntvosLink to="/Eifa-Pira-Rupa">Detalhes</BtnEntvosLink>
//                             </BtnEnventos>
//                         </EventosCardM>

//                         <EventosCard data-aos="zoom-in">
//                             <EventosIcon  src={HaitiFoto} />
//                             <EventosH2>Festa haitiana</EventosH2>
//                             <EventosP>
//                                 Evento organizado para falar e mostar outro lado do Haiti. 
//                             </EventosP>
//                             <BtnEnventos>
//                                 <BtnEntvosLink to="/festa-do-haiti">Detalhes</BtnEntvosLink>
//                             </BtnEnventos>
//                         </EventosCard>

//                     </EventosWrapper>
//                 </EventosContent>
//             </EventosContainer>
//     )
// }

// export default Eventos;