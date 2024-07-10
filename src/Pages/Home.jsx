import {useState} from "react";
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/HeroSection';
import IdInicio from "../Components/HeroSection/DataHero";
import SobrePangeia from "../Components/Sobre1";
import {homeObjOne} from "../Components/Sobre1/Data";
import Gallary from "../Components/Gallary";
import Eventos from "../Components/Eventos";
import ContainerFooter from "../Components/Footer";
import Parceria from "../Components/Parceria";
import Sobre3 from "../Components/SobreTree";
import Principios from "../Components/SobreTwo";
import TopHeader from "../Components/TopHeader";
import CardDoeForm from "../Components/CardDoeform";


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
      <CardDoeForm />
      <Principios />
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