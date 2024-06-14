import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


import {
    NoticiasContainer,
    NoticiasContent,
}
from "./NoticiasElements.js"
import ReactPlayer from "react-player";



const Noticias = () => {

    useEffect(() => {
        Aos.init({duration: 2000, offset: 200,});
    }, []);

    return(
            <NoticiasContainer>
                <NoticiasContent>
                    <ReactPlayer 
                    url='https://youtu.be/FHhkNoq9Q9g'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </NoticiasContent>
            </NoticiasContainer>
    )
}

export default Noticias;