import React from 'react';
import {useState} from "react";
import Navbar2 from "../Components/Navbar2";
import ContainerFooter from '../Components/Footer';
import FestaEifa from '../Components/Eifa';

function Eifa() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar2 toggle={toggle}/>
      <FestaEifa />
      <ContainerFooter />
    </>
  )
}

export default Eifa;