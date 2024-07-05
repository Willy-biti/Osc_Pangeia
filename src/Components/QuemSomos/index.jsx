import * as C from "./ElementsQuemSomos";
import { DataAbout } from "./DataQuemSomos";
import Equipe from "../Equipe";

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
        <Equipe />

    </>
  )
}

export default QuemSomos;