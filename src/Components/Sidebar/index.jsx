import React from "react";


import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    NavLinkR

} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer $isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Inicio" onClick={toggle}> Inicio</SidebarLink>
                    <SidebarLink to="Sobre" onClick={toggle}>  Sobre</SidebarLink>
                    <NavLinkR to="/participantes"  onClick={toggle}> Participantes</NavLinkR>
                    <SidebarLink to="Gallery" onClick={toggle}>  Galeria</SidebarLink>
                    <SidebarLink to="Eventos" onClick={toggle}> Eventos</SidebarLink>
                    <NavLinkR to="/contato">Contato</NavLinkR>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;