import React from "react";
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import * as SiIcons from "react-icons/si"
import * as ImIcons from "react-icons/im"
import { animateScroll as scroll } from "react-scroll";


import {
    Rodape,
    RodapeContent,
    RodapeWrapper,
    RodapeDroit,
    RodapeContatos,
    RodapeRedes,
    RodapeContatosTitle,
    LogoRodape,
    RodapeWebsitRights,
    RodapeProgrammeur,
    RodapeContatosLink,
    RodapeRedesLink,
    RodapeContatosIco,
    RodapeContatosP
}
from "./FooterElements.js"

const ContainerFooter = () => {

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
            <>
                <Rodape  id="Footer">
                    <RodapeContent>
                        <RodapeWrapper>
                            <RodapeContatos>
                                <RodapeContatosTitle>Contatos</RodapeContatosTitle>
                                <RodapeContatosLink href="https://mail.google.com/mail/u/0/?ogbl#inbox" target="_blank" rel="noreferrer">
                                    <RodapeContatosIco><SiIcons.SiGmail  size={16}/></RodapeContatosIco>
                                    <RodapeContatosP>pangeiafutebolclube@gmail.com</RodapeContatosP> 
                                </RodapeContatosLink>
                                <RodapeContatosLink href="https://wa.me/message/ENYBD2CG6QTEF1" target="_blank" rel="noreferrer">
                                    <RodapeContatosIco><ImIcons.ImWhatsapp  size={16}/></RodapeContatosIco>
                                    <RodapeContatosP>+55(48)991787038</RodapeContatosP>
                                </RodapeContatosLink>
                            </RodapeContatos>
                            <RodapeRedes>
                                <RodapeRedesLink href="https://www.instagram.com/pangeia_florianopolis/" target='_blank' rel="noreferrer"><FaIcons.FaInstagram size={20}/> </RodapeRedesLink>
                                <RodapeRedesLink href="https://www.facebook.com/profile.php?id=100080142341405" target="_blank" rel="noreferrer">
                                    <FaIcons.FaFacebook size={20}/>
                                </RodapeRedesLink>
                                <RodapeRedesLink href="https://www.youtube.com/channel/UCTKx8b1i3A_chhdbRogTI2w" target='_blank' rel="noreferrer">
                                    <BsIcons.BsYoutube size={20}/>
                                </RodapeRedesLink>
                                <RodapeRedesLink href="https://www.linkedin.com/in/pangeia-no-mundo-95482a236/" target='_blank' rel="noreferrer">
                                    <BsIcons.BsLinkedin size={20}/>
                                </RodapeRedesLink>
                            </RodapeRedes>
                        </RodapeWrapper>
                        <RodapeDroit>
                            <LogoRodape onClick={toggleHome} to="/">Pangeia</LogoRodape>
                            <RodapeWebsitRights>
                                Copyright © {new Date().getFullYear()} Associação cultural e esportiva pangeia.
                            </RodapeWebsitRights>
                            <RodapeProgrammeur href="https://willy-portfolio.herokuapp.com/" target="_blank">
                                By dev | Willy B. Biti
                            </RodapeProgrammeur>
                        </RodapeDroit>
                    </RodapeContent>
                </Rodape>
            </>
    )
}

export default ContainerFooter;