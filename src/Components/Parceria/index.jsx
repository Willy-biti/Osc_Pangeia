import React from "react";

import img1 from '../../Assets/Photos/Praceiros/barrigaverde.png';
import img2 from '../../Assets/Photos/Praceiros/escola.png';
import img3 from '../../Assets/Photos/Praceiros/Sinjusc.png';

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
                                <a href="https://www.churrascariabarrigaverde.com.br/" target={"_blank"} rel="noreferrer"><img src={img1} width="120px" height="100px" alt="BarrigaVerde"/></a>
                                <a href="https://www.sinjusc.org.br/site/" target={"_blank"} rel="noreferrer"><img src={img2} width="120px" height="100px" alt="Sinjusc"/></a>
                                <a href="http://www.escoladostrabalhadores.org.br/" target={"_blank"} rel="noreferrer"><img src={img3} width="120px" height="50px" alt="Escola dos trabalhadores"/></a>
                            </ParceriaParceirosContents>
                        </ParceriaParceiros>
                    </ParceriaContent>
                </ParceriaContainer>
            </>
    )
}

export default Parceria;