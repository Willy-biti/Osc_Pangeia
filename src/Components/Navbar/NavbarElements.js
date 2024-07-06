// import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
// import theme from "../../Theme/theme";

// export const Nav = styled.nav`
//     background: 'transparent';
//     height: 80px;
//     width: 100vw ;   
//     // margin-top: -80px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1rem;
//     position: absolute;
//     top: 0;
//     z-index: 10;
    

//     @media screen and (max-width: 960px){
//         transition: 0.8s all ease;
//     }
// `

// export const NavbarContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     height: 80px;
//     width: 80vw ;

// `

// export const NavLogo = styled(LinkR)`
//     color: ${theme.primary};
//     jusify-self: flex-start;
//     cursor: pointer;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
//     font-weight: bold;
//     text-decoration: none;
//     transition: 0.6s;
//     outline: none;
    
//     &:hover{
//         color: ${theme.background};
//         transform: scale(0.90)
//     }
// `

// export const MobileIcon = styled.div`
//     display: none;


//     @media screen and (max-width: 950px){
//         display: block;
//         position: absolute;
//         top: 35%;
//         right: 9%;
//         transform: translate (-100%, 60%);
//         font-size: 1.8rem;
//         cursor: pointer;
//         outline: none;
//         text-decoration: none;
//         color: ${theme.secondary}
//     }
// `
// export const NavMenu = styled.ul`
//     display: flex;
//     align-items: center;
//     height: 100%;
//     list-style: none;
//     text-align: center;

//     @media screen and (max-width: 950px){
//         display: none;
//     }
// `

// export const NavItem = styled.li`
//     height: 80px;

// `

// export const NavLinks = styled(LinkS)`
//     color: ${theme.primary};
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;
//     transition: 0.2s;
//     font-weight: bold;
//     outline: none;
//     text-decoration: none;

//     &.active,
//     &:hover{
//         border-bottom: 3px solid ${theme.background};
//         color: ${theme.background};
//     }
// `

// export const NavLinkR = styled(LinkR)`

//     color: ${theme.primary};
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;
//     transition: 0.6s;
//     font-weight: bold;
//     outline: none;
//     text-decoration: none;

// &.active,
// &:hover{
//     border-bottom: 3px solid ${theme.background};
//     color: ${theme.background};
// }
// `


import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import theme from "../../Theme/theme";

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: absolute;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 80%;
`;

export const NavLogo = styled(LinkR)`
    color: ${theme.primary};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    transition: 0.6s;
    outline: none;

    &:hover {
        color: ${theme.background};
        transform: scale(0.9);
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 950px) {
        display: block;
        position: absolute;
        top: 35%;
        right: 9%;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        outline: none;
        text-decoration: none;
        color: ${theme.secondary};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 950px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    position: relative; /* Para posicionar o SubMenu */
`;

export const NavLinks = styled(LinkS)`
    color: ${theme.primary};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    outline: none;

    &.active,
    &:hover {
        border-bottom: 3px solid ${theme.background};
        color: ${theme.background};
    }
`;

export const NavLinkR = styled(LinkR)`
    color: ${theme.primary};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.6s;
    font-weight: bold;
    outline: none;

    &.active,
    &:hover {
        border-bottom: 3px solid ${theme.background};
        color: ${theme.background};
    }
`;

export const SubMenu = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 160px;
    z-index: 1;
    background-color: ${theme.background};
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

    ${NavItem}:hover & {
        display: block;
    }
`;

export const SubMenuItem = styled(LinkR)`
    color: ${theme.primary};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    transition: 0.3s;
    white-space: nowrap;

    &:hover {
        background-color: ${theme.secondary};
        color: ${theme.background};
    }
`;
