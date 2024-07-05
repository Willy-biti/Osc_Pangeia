import * as C from "./ElementsQuemSomos";
import { DataAbout } from "./DataQuemSomos";
import Equipe from "../Equipe";
// import Noticias from "../Noticias";
import Entrevista from "../Entrevista";

function QuemSomos() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.DiveText>
                    <C.Text>
                        {DataAbout.desc}
                    </C.Text>
                </C.DiveText>
            </C.Content>
        </C.Container>
        {/* <Noticias /> */}
        <Entrevista />
        <Equipe />

    </>
  )
}

export default QuemSomos;