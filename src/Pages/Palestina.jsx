import React from 'react';
import {useState} from "react";
import Navbar2 from "../Components/Navbar2";
import EventoPalestina from "../Components/Palestina";
import ContainerFooter from '../Components/Footer';

function Palestina() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar2 toggle={toggle}/>
      <EventoPalestina />
      <ContainerFooter />
    </>
  )
}

export default Palestina;