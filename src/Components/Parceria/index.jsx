import React from "react";

import Icom from '../../Assets/Photos/Praceiros/ICOM.png';
import Sintuf from '../../Assets/Photos/Praceiros/Sintufsc.png';
import Sinj from '../../Assets/Photos/Praceiros/Sinjusc.png';
import Barriga from '../../Assets/Photos/Praceiros/barrigaverde.png';

import {
    ParceriaContainer,
    ParceriaContent,
    ParceriaParceiros,
    ParceriaParceirosH1,
    ParceriaParceirosContents,
}
from "./ParceriaElement.js"

const Parceria = () =>{
    return(
            <>
                <ParceriaContainer>
                    <ParceriaContent>
                        <ParceriaParceiros>
                            <ParceriaParceirosH1>
                                <h2>Parceiros</h2>
                            </ParceriaParceirosH1>
                            <ParceriaParceirosContents>
                                <a href="https://www.icomfloripa.org.br/" target={"_blank"} rel="noreferrer"><img src={Icom} width="120px" height="100px" alt="Icom"/></a>
                                <a href="https://www.sinjusc.org.br/site/" target={"_blank"} rel="noreferrer"><img src={Sinj} width="120px" height="100px" alt="Sinjusc"/></a>
                                <a href="https://www.sintufsc.com.br/" target={"_blank"} rel="noreferrer"><img src={Sintuf} width="120px" height="80px" alt="Sintufsc"/></a>
                                <a href="https://www.churrascariabarrigaverde.com.br/" target={"_blank"} rel="noreferrer"><img src={Barriga} width="120px" height="80px" alt="Escola dos trabalhadores"/></a>
                            </ParceriaParceirosContents>
                        </ParceriaParceiros>
                    </ParceriaContent>
                </ParceriaContainer>
            </>
    )
}

export default Parceria;