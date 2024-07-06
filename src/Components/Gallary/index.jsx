

import * as C from "./GalleryElements";
import Vdo from "../../Assets/Videos/Gallary/VideoGallery.mp4";

const Gallary = () => {
    return (
        <>
            <C.GallaryContainer>
                <C.GallaryContent>
                    <C.ContentTitle>
                        <h1>Gallery</h1>
                    </C.ContentTitle>
                    <C.ContentContent>
                        <C.DivLeft>
                            <C.DivLeftBaixo />
                            <C.DivLeftCima>
                                <C.DivFoto>
                                    <h2>Foto</h2>
                                </C.DivFoto>
                                <C.DivVideo>
                                    <C.Video autoPlay loop mute>
                                    <source src={Vdo} type="video/mp4" />
                                    </C.Video>
                                    <C.Overlay />
                                    <C.DivLink>
                                        <h2>Videos</h2>
                                    </C.DivLink>
                                </C.DivVideo>
                            </C.DivLeftCima>
                        </C.DivLeft>
                        <C.DivRight>
                            hjfgdskjf hgdflhsag lfgyd gfyif otiyf ifyiwfg ugui
                            glflgj jlhgag çfhfhaçl klfgf kljau lurg ghjhçf çufg
                            lgfhsfdkjl lkgjhlf uhfgjgkd jkfghdf fkjhg lkf kj kfl
                            hlfdkjghjksgdf fkjhgfd fhgds kjdhgfhds kfg
                        </C.DivRight>
                    </C.ContentContent>
                </C.GallaryContent>
            </C.GallaryContainer>
        </>
    )
}

export default Gallary;

