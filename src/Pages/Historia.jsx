import React from 'react';
import Fundacao from '../Components/Fundacao';
import {useState} from "react";
import Navbar2 from "../Components/Navbar2";
import ContainerFooter from '../Components/Footer';

function Historia() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar2 toggle={toggle}/>
      <Fundacao />
      <ContainerFooter />
    </>
  )
}

export default Historia;