import {useState} from "react";
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/HeroSection';
import IdInicio from "../Components/HeroSection/DataHero";
import ContainerFooter from "../Components/Footer";
import Parceria from "../Components/Parceria";


function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection {...IdInicio}/>  
      <Parceria />
      <ContainerFooter /> 
      
    </>
  )
}

export default Home;