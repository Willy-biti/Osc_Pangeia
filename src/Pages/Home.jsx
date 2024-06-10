import Navbar from '../Components/Navbar';
import {useState} from "react";
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/HeroSection';
import IdInicio from "../Components/HeroSection/DataHero";
import CountdownTimer from '../Components/CountTimer'

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
      <CountdownTimer />
    </>
  )
}

export default Home;