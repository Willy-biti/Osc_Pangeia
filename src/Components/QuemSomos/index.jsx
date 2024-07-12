import * as C from "./ElementsQuemSomos";
import { DataAbout } from "./DataQuemSomos";
import Equipe from "../Equipe";
import Entrevista from '../../Components/Entrevista';
import Lema from "../Lema";
import Eixos from "../Eixos";

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
        <Lema />
        <Eixos />
        <Entrevista />
        <Equipe />

    </>
  )
}

export default QuemSomos;