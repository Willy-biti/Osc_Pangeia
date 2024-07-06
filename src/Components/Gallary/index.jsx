

import * as C from "./GalleryElements";
import Vdo from "../../Assets/Videos/Gallary/VideoGallery.mp4";
import { DataGallary } from "./Items";

const Gallary = () => {
    return (
        <>
            <C.GallaryContainer>
                <C.GallaryContent>
                    <C.ContentTitle>
                        <h1>{DataGallary.TitleA}</h1>
                        <C.H1>{DataGallary.TitleB}</C.H1>
                    </C.ContentTitle>
                    <C.ContentContent>
                        <C.DivLeft>
                            <C.DivLeftBaixo />
                            <C.DivLeftCima>
                                <C.DivFoto >
                                    <C.DivLinkF to="/Foto">
                                        <h2>{DataGallary.TitleF}</h2>
                                    </C.DivLinkF>
                                </C.DivFoto>
                                <C.DivVideo>
                                    <C.Video autoPlay loop mute>
                                    <source src={Vdo} type="video/mp4" />
                                    </C.Video>
                                    <C.Overlay />
                                    <C.DivLinkV to="/videos">
                                        <h2>{DataGallary.TitleV}</h2>
                                    </C.DivLinkV>
                                </C.DivVideo>
                            </C.DivLeftCima>
                        </C.DivLeft>
                        <C.DivRight>
                            <p>{DataGallary.Desc} <br/></p>
                            <p><C.Highlight>Fotos : </C.Highlight>{DataGallary.DsccFoto} <br/></p>
                            <p><C.Highlight>Videos : </C.Highlight>{DataGallary.DescVideo}</p>
                        </C.DivRight>
                    </C.ContentContent>
                </C.GallaryContent>
            </C.GallaryContainer>
        </>
    )
}

export default Gallary;

