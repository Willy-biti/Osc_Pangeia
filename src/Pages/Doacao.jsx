import React from 'react';
import {useState} from "react";
import Navbar2 from "../Components/Navbar2";
// import ContainerFooter from '../Components/Footer';
import Donate from '../Components/Doacao';

function Doacao() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar2 toggle={toggle}/>
      <Donate />
      {/* <ContainerFooter /> */}
    </>
  )
}

export default Doacao;