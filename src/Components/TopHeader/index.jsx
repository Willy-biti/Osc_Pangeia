// TopHeader.jsx
import React from 'react';
import * as C from './Elements';
import { DataTop } from './Items';
import { FaInstagram, FaWhatsapp, FaYoutube, FaDonate } from 'react-icons/fa';

function TopHeader() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <C.Container>
            <C.Content>
                <C.Div1>
                    <C.LogoLink onClick={toggleHome} to='/'>
                        <C.Logo src={DataTop.Logo} alt="Logo" />
                    </C.LogoLink>
                </C.Div1>
                <C.Div2>
                    <C.RedeSociais>
                        <C.BotaoDoar to='/doar'>
                        {DataTop.Doe} 
                        <FaDonate style={{marginLeft:'8px'}}/>
                        </C.BotaoDoar>
                        <C.BotaoRedes >
                            <a href="https://www.instagram.com/pangeia_florianopolis/" target='_blank' rel="noreferrer">
                            <FaInstagram size={35} color='#E1306C'/>
                            </a>
                            
                        </C.BotaoRedes>
                        <C.BotaoRedes>
                            <a href="https://wa.me/message/ENYBD2CG6QTEF1" target="_blank" rel="noreferrer">
                            <FaWhatsapp size={35} color='#25D366'/>
                            </a>
                            
                        </C.BotaoRedes>
                        <C.BotaoRedes>
                            <a href="#" target="_blank" rel="noreferrer">
                            <FaYoutube size={35} color='#FF0000'/>
                            </a>
                        </C.BotaoRedes>
                    </C.RedeSociais>
                </C.Div2>
            </C.Content>
        </C.Container>
    );
}

export default TopHeader;
