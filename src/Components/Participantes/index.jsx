import React, {useEffect} from 'react';
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {

    CliqueLinkR,

    ParticipantesContainer,
    ParticipantesContent,
    ParticipantesAtuais,
    ParticipantesPassados,
    ParticipantesConexoes,
    ParticipantesCentral,
    ParticipantesCentralP,
    ParticipantesTxt,
    ParticipantesClique,
    ParticipantesTitle,
    ParticipantesP,
    ParticipantesTxtP,
    ParticipantesTitleP,
    ParticipantesPP,
    ParticipantesCliqueP,
    ParticipantesCliqueRadius,
    ParticipantesCliqueRadiusP,

    ParticipantesContext,
    ParticipantesContextTitle,
    ParticipantesContextP,
    ParticipantesContextStatistique,
    ParticipantesContextStatistiqueCards,
    ParticipantesContextStatistiqueNumber,
    ParticipantesContextStatistiqueName,
} 
from './ParticipantesElements';

const Participantes = (
    idA,
    idP,
    idC,
) => {

    useEffect(() => {
        Aos.init({duration: 2000, offset: 200,});
    }, []);

    return (
        <>
            <ParticipantesContainer>
                <ParticipantesContext>
                        <ParticipantesContextTitle><h1>Particpantes</h1></ParticipantesContextTitle>
                        <ParticipantesContextP data-aos="zoom-in">
                        O números dos participantes desta associação cresce cada vez mais. Em média uma pessoa em duas semanas. O grupo que começou com 4 pessoas, atualmente  conta com mais de 83 participantes, no qual cerca de 50% estão ativos em atividades gerais e 30% em apenas na atividade esportiva e o restante é passivo. O Pangeia também conta com mais de 10 participantes (conexões) fora do Brasil. E contabilizando, mais de 20 ex- membros que ajudaram no processo de construção desta associação.
                        </ParticipantesContextP>
                        <ParticipantesContextStatistique>
                            <ParticipantesContextStatistiqueCards data-aos="zoom-in">
                                <ParticipantesContextStatistiqueNumber>
                                    + <CountUp end={100} duration={4}/>
                                </ParticipantesContextStatistiqueNumber>
                                <ParticipantesContextStatistiqueName>
                                    <h3>Participantes Atuais</h3>
                                </ParticipantesContextStatistiqueName>
                            </ParticipantesContextStatistiqueCards>
                            
                            <ParticipantesContextStatistiqueCards data-aos="zoom-in">
                                <ParticipantesContextStatistiqueNumber>
                                + <CountUp end={20} duration={2}/>
                                </ParticipantesContextStatistiqueNumber>
                                <ParticipantesContextStatistiqueName>
                                    <h3>Participantes Passados</h3>
                                </ParticipantesContextStatistiqueName>
                            </ParticipantesContextStatistiqueCards>
                            
                            <ParticipantesContextStatistiqueCards data-aos="zoom-in">
                                <ParticipantesContextStatistiqueNumber>
                                    + <CountUp end={10} duration={2}/>
                                </ParticipantesContextStatistiqueNumber>
                                <ParticipantesContextStatistiqueName>
                                    <h3>Conexões</h3>
                                </ParticipantesContextStatistiqueName>
                            </ParticipantesContextStatistiqueCards>
                        </ParticipantesContextStatistique>
                </ParticipantesContext>
                <ParticipantesContent>
                    
                    <ParticipantesAtuais id='ParicipantesAtuais'>
                        <ParticipantesCentral data-aos="fade-up">
                            <ParticipantesTxt>
                                <ParticipantesTitle>
                                    <h2>Participantes Atuais</h2>
                                </ParticipantesTitle>
                                <ParticipantesP>
                                    <p>Conforme mencionado em cima, o Pangeia atualmente conta com mais de 83 participantes que são de diferentes países do mundo, clica no botão a direita para ver fotos de alguns membros.</p>
                                </ParticipantesP>
                            </ParticipantesTxt>
                            <ParticipantesClique>
                                <ParticipantesCliqueRadius>
                                    <CliqueLinkR to="/participantes-atuais">Cliqueaqui!</CliqueLinkR>
                                </ParticipantesCliqueRadius>
                            </ParticipantesClique>
                        </ParticipantesCentral>
                    </ParticipantesAtuais>
                    
                    <ParticipantesPassados  id='ParticipantesPassados'>
                        <ParticipantesCentralP data-aos="fade-up">
                        <ParticipantesCliqueP>
                            <ParticipantesCliqueRadiusP>
                                <CliqueLinkR to="#">Cliqueaqui!</CliqueLinkR>
                            </ParticipantesCliqueRadiusP>
                        </ParticipantesCliqueP>
                        <ParticipantesTxtP>
                                <ParticipantesTitleP>
                                    <h2>Participantes Passados</h2>
                                </ParticipantesTitleP>
                                <ParticipantesPP>
                                    <p>Mais de 20 pessoas já fizeram parte do pangeia, alguns até ajudaram na construção do grupo, na maioria deles acadêmicos, quando o curso deles terminou voltaram para os países nativos deles, mantemos contato com alguns e com outros perdemos</p>
                                </ParticipantesPP>
                            </ParticipantesTxtP>
                        </ParticipantesCentralP>
                    </ParticipantesPassados>
                    
                    <ParticipantesConexoes  id='Conexoes'>
                        <ParticipantesCentral data-aos="fade-up">
                        <ParticipantesTxt>
                            <ParticipantesTitle>
                                <h2>Conexões </h2>
                            </ParticipantesTitle>
                            <ParticipantesP>
                                <p>Alguns membros do Pangeia se encontram atualmente fora do Brasil, o que os impede de participar em atividades presenciais, mas quando é o evento online, eles participam. Além disso, alguns fazem doação ou contribuem quando um evento está para acontecer.</p>
                                </ParticipantesP>
                            </ParticipantesTxt>
                            <ParticipantesClique>
                                <ParticipantesCliqueRadius>
                                    <CliqueLinkR to="#">Cliqueaqui!</CliqueLinkR>
                                </ParticipantesCliqueRadius>
                            </ParticipantesClique>
                        </ParticipantesCentral>
                    </ParticipantesConexoes>
                </ParticipantesContent>
            </ParticipantesContainer>
        </>
    )
}

export default Participantes