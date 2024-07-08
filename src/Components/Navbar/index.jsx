// import React, { useState, useEffect } from "react";
// import { FaBars } from 'react-icons/fa'
// import { IconContext } from "react-icons/lib";
// import { animateScroll as scroll } from "react-scroll";


// import {
//     Nav,
//     NavbarContainer,
//     NavLogo,
//     NavMenu,
//     NavLinks,
//     NavItem,
//     MobileIcon,
//     NavLinkR
// }
//     from './NavbarElements';

// const Navbar = ({ toggle }) => {

//     const [scrollNav, setScrollNav] = useState(false)

//     const changeNav = () => {
//         if (window.scrollY >= 80) {
//             setScrollNav(true)
//         } else {
//             setScrollNav(false)
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', changeNav)
//     }, [])

//     const toggleHome = () => {
//         scroll.scrollToTop()
//     }

//     return (
//         <>
//             <IconContext.Provider value={{ color: '#f1f1f1' }}>
//                 <Nav $scrollNav={scrollNav}>
//                     <NavbarContainer>
//                         <NavLogo onClick={toggleHome} to="/">Pangeia</NavLogo>
//                         <MobileIcon onClick={toggle}>
//                             <FaBars />
//                         </MobileIcon>
//                         <NavMenu>
//                             <NavItem>
//                                 <NavLinks to='Inicio'
//                                     smooth={true}
//                                     // duration={600}
//                                     spy={true}
//                                 >Inicio</NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLinks to='Sobre1'
//                                     smooth={true}
//                                     // duration={600}
//                                     spy={true}
//                                 >Sobre pangeia</NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLinks to='Gallery'
//                                     smooth={true}
//                                     // duration={600}
//                                     spy={true}
//                                 >Galeria</NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLinks to='Eventos'
//                                     smooth={true}
//                                     // duration={600}
//                                     spy={true}
//                                 >Eventos</NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLinkR to='/contato'>Contato</NavLinkR>
//                             </NavItem>
//                         </NavMenu>
//                     </NavbarContainer>
//                 </Nav>
//             </IconContext.Provider>
//         </>
//     )
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { FaBars, FaAngleDown } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, NavItem, MobileIcon, NavLinkR, SubMenu, SubMenuItem } from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <IconContext.Provider value={{ color: '#f1f1f1' }}>
            <Nav $scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to="/">Pangeia</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="#">Sobre nós<FaAngleDown style={{color: '#4CAF50' }} /></NavLinks>
                            <SubMenu>
                                <SubMenuItem to='/historia'>História</SubMenuItem>
                                <SubMenuItem to='/sobre-pangeia'>Sobre Pangeia</SubMenuItem>
                            </SubMenu>
                        </NavItem>
                        <NavItem>
                            <NavLinks  to="#">Galeria  <FaAngleDown style={{color: '#4CAF50' }} /></NavLinks>
                            <SubMenu>
                                <SubMenuItem to='/fotos'>Fotos</SubMenuItem>
                                <SubMenuItem to='/videos'>Vídeos</SubMenuItem>
                            </SubMenu>
                        </NavItem>
                        <NavItem>
                            <NavLinks  to="#">Eventos <FaAngleDown style={{color: '#4CAF50' }} /></NavLinks>
                            <SubMenu>
                                <SubMenuItem to='/viagem-escola-eifa'>Viagem Eifa</SubMenuItem>
                                <SubMenuItem to='/viagem-fraiburgo'>Viagem Friburgo</SubMenuItem>
                                <SubMenuItem to='/festa-haiti'>Festa Haiti</SubMenuItem>
                                <SubMenuItem to='/evento-palestina'>Palestina</SubMenuItem>
                            </SubMenu>
                        </NavItem>
                        <NavItem>
                            <NavLinkR to='/contatos'>Contato</NavLinkR>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;
