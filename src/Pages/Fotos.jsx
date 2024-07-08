import React from 'react';
import {useState} from "react";
import Navbar2 from "../Components/Navbar2";
import ContainerFooter from '../Components/Footer';

function Fotos() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar2 toggle={toggle}/>
      {/* <ContainerFooter /> */}
    </>
  )
}

export default Fotos;