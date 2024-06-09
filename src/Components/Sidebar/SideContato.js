import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    NavLinkR

} from "./SidebarElements";

const SideContato = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <NavLinkR to="/">Início</NavLinkR>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideContato;