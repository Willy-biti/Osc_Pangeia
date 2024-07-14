import React from 'react';
import * as C from './Elements';
import { DataEixos } from './Items';
import {GiSoccerKick, GiGoalKeeper, GiLaserBurst} from 'react-icons/gi';
import {LiaBeerSolid} from 'react-icons/lia';
import {GiWindyStripes} from 'react-icons/gi';
import {MdOutlineEventAvailable} from 'react-icons/md';
import {FaUmbrellaBeach } from 'react-icons/fa';


function Eixos() {
  return (
    <>
        <C.Container>
            <C.Content>
                <C.Div1>
                    <C.TitleDiv1>
                        <h1>{DataEixos.TeteDiv1}</h1>
                        <h4>{DataEixos.DescDiv1}</h4>
                    </C.TitleDiv1>
                    <C.ContentDiv1>
                        <C.DivIcon style={{color:'#2E8B57'}}>
                            <h3>ESPORTE</h3>
                            <div>
                                <GiSoccerKick size={120}/>
                                {/* <GiGoalKeeper size={40}/> */}
                            </div>
                        </C.DivIcon>
                        <C.DivIcon style={{color:'#FFD700'}}>
                            <h3>LAZER</h3>
                            <div>
                                <GiLaserBurst size={120} />
                            </div>
                        </C.DivIcon>
                        <C.DivIcon style={{color:'#FF6347'}}>
                            <h3>EVENTOS</h3>
                            <div>
                                <MdOutlineEventAvailable size={120} />
                            </div>
                        </C.DivIcon>
                        <C.DivIcon style={{color:'#0077FF'}}>
                            <h3>PRAIA</h3>
                            <div>
                                <FaUmbrellaBeach size={120} />
                            </div>
                        </C.DivIcon>
                        <C.DivIcon style={{color:'#8B4513'}}>
                            <h3>BAR</h3>
                            <div>
                                <LiaBeerSolid size={120} />
                            </div>
                        </C.DivIcon>
                        <C.DivIcon style={{color:'#1E90FF'}}>
                            <h3>VIAGENS</h3>
                            <div>
                                <GiWindyStripes size={120} />
                            </div>
                        </C.DivIcon>
                    </C.ContentDiv1>
                </C.Div1>
                <C.Div2>
                    <C.TitleDiv2>
                        <h1>{DataEixos.Title}</h1>
                        <h4>{DataEixos.SubTitle}</h4>
                    </C.TitleDiv2>
                    <C.DescDiv2>
                        <h2>{DataEixos.TitleEixo1}</h2>
                        <h4>{DataEixos.DescEixo1}</h4>
                        <h2>{DataEixos.TitleEixo2}</h2>
                        <h4>{DataEixos.DescEixo2}</h4>
                    </C.DescDiv2>
                </C.Div2>
            </C.Content>
        </C.Container>
    </>
  )
}

export default Eixos;