import * as C from "./ElementsQuemSomos";
import { DataAbout } from "./DataQuemSomos";
import Equipe from "../Equipe";
import Entrevista from '../../Components/Entrevista';
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
        <Eixos />
        <Entrevista />
        <Equipe />

    </>
  )
}

export default QuemSomos;