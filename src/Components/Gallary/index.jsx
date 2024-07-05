

import * as C from "./GalleryElements"

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
                            <C.DivLeftCima>ggg</C.DivLeftCima>
                        </C.DivLeft>
                        <C.DivRight>
                            <C.DivRightBaixo />
                            <C.DivRightCima>fff</C.DivRightCima>
                        </C.DivRight>
                    </C.ContentContent>
                </C.GallaryContent>
            </C.GallaryContainer>
        </>
    )
}

export default Gallary;

