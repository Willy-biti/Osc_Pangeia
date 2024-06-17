import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import {Link as LinkR} from "react-router-dom"
import { FaTimes } from "react-icons/fa";
import theme from "../../Theme/theme";


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${theme.background};
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.8s;
    opacity: ${({ $isOpen}) => ($isOpen ? '100%' :'0%')};
    top: ${({$isOpen}) => ($isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: ${theme.secondary};

&:hover{
    color: ${theme.primary};
}
`


export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.4rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff
`

export const SidebarMenu = styled.ul`

display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;



@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
};

`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;



&:hover {
    color: red;
    transition: 0.2s ease-in-out;
}

`

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`

export const NavLinkR = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;


&:hover {
    color: red;
    transition: 0.2s ease-in-out;
}
`
