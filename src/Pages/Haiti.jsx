import React from 'react';
import {useState} from "react";
import Navbar2 from "../Components/Navbar2";
import FestaHaitiana from '../Components/Haiti';
import ContainerFooter from '../Components/Footer';

function Haiti() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar2 toggle={toggle}/>
      <FestaHaitiana />
      <ContainerFooter />
    </>
  )
}

export default Haiti;