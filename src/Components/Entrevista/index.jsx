import * as C from './ElementsEntrevista';
import ReactPlayer from "react-player";

function Entrevista() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.DivLeft>
                    <C.Title>
                        <C.TitlePrev>O que nos</C.TitlePrev>
                        <C.TitleNext>move</C.TitleNext>
                    </C.Title>
                    <C.Desc>
                    Nossa associação é uma verdadeira família, unindo pessoas de diferentes origens através da paixão pelo futebol e eventos culturais. Valorizamos a diversidade, oferecendo um lar onde cada voz é ouvida e respeitada. O apoio mútuo e a amizade são nossos pilares, proporcionando um ambiente de inclusão e crescimento pessoal. Juntos, celebramos vitórias e enfrentamos desafios, sempre comprometidos em construir um futuro resiliente e unido. Aqui, cada membro é parte de algo maior, e juntos criamos um impacto positivo e duradouro.
                    </C.Desc>
                </C.DivLeft>
                <C.DivRight>
                    <C.Div2Baixo/>
                    <C.Div2BCima>
                    <ReactPlayer 
                    url='https://youtu.be/FHhkNoq9Q9g'
                    width='100%'
                    height='100%'
                    style={{ borderRadius: '15px', overflow: 'hidden' }}
                    controls={true}
                    />
                    </C.Div2BCima>
                </C.DivRight>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Entrevista;