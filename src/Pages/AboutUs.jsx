import QuemSomos from "../Components/QuemSomos";
import {useState} from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";


function AboutUs() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <QuemSomos />
    </>
  )
}

export default AboutUs;