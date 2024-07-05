import React, { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";


import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavLinks,
    NavItem,
    MobileIcon,
    NavLinkR
}
    from './Navbar2Elements';

const Navbar2 = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#f1f1f1' }}>
                <Nav $scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo onClick={toggleHome} to="/">Pangeia</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinkR to='/doar'>Doação</NavLinkR>
                            </NavItem>
                            <NavItem>
                                <NavLinkR to='/fotos'>Fotos</NavLinkR>
                            </NavItem>
                            <NavItem>
                                <NavLinkR to='/videos'>Videos</NavLinkR>
                            </NavItem>
                            <NavItem>
                                <NavLinkR to='/contato'>Contato</NavLinkR>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar2;