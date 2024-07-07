import * as C from "./ElementsSobreTwo";
import {DataSobre2} from "./Items";

function Principios() {
  return (
    <>
        <C.Container>
          <C.Content>
            <C.Cards>
              <C.ContentCards1>
                <C.hautTitle>{DataSobre2.Outline}</C.hautTitle>
                <C.Title><h2>{DataSobre2.Title1}</h2></C.Title>
                <C.Desc><p>{DataSobre2.Desc1}</p></C.Desc>
              </C.ContentCards1>
            </C.Cards>
            <C.Cards>
              <C.ContentCards2>
                <C.hautTitle>{DataSobre2.Outline}</C.hautTitle>
                <C.Title><h2>{DataSobre2.Title2}</h2></C.Title>
                <C.Desc><p>{DataSobre2.Desc2}</p></C.Desc>
              </C.ContentCards2>
            </C.Cards>
            <C.Cards>
              <C.ContentCards3>
                <C.hautTitle>{DataSobre2.Outline}</C.hautTitle>
                <C.Title><h2>{DataSobre2.Title3}</h2></C.Title>
                <C.Desc><p>{DataSobre2.Desc3}</p></C.Desc>
              </C.ContentCards3>
            </C.Cards>
          </C.Content>
        </C.Container>
    </>
  )
}

export default Principios;