import {useState} from "react";
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/HeroSection';
// import Noticias from "../Components/Noticias";
import IdInicio from "../Components/HeroSection/DataHero";
import SobrePangeia from "../Components/Sobre1";
import {homeObjOne} from "../Components/Sobre1/Data";
import SobrePangeia2 from "../Components/Sobre2";
// import SobrePangeia3 from "../Components/Sobre3";
import Gallary from "../Components/Gallary";
import Eventos from "../Components/Eventos";
import ContainerFooter from "../Components/Footer";
import Parceria from "../Components/Parceria";
import Duvidas from "../Components/Duvidas";
// import DataSobre3 from "../Components/Sobre3/Data";
// import Participantes from "../Components/Participantes";
import Sobre3 from "../Components/SobreTree";
import Principios from "../Components/SobreTwo";
import TopHeader from "../Components/TopHeader";


function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <TopHeader />
      <Navbar toggle={toggle}/>
      <HeroSection {...IdInicio}/>  
      <SobrePangeia { ...homeObjOne}/>
      <Duvidas />
      <Principios />
      {/* <SobrePangeia2 /> */}
      {/* <SobrePangeia3 { ...DataSobre3}/> */}
      <Sobre3 />
      {/* <Participantes /> */}
      <Gallary />
      <Eventos />
      <Parceria />
      <ContainerFooter />
      
    </>
  )
}

export default Home;