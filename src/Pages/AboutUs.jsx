import QuemSomos from "../Components/QuemSomos";
import {useState} from "react";
import Sidebar from "../Components/Sidebar";
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";


function AboutUs() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar2 toggle={toggle}/>
      <QuemSomos />
      <Footer />
    </>
  )
}

export default AboutUs;