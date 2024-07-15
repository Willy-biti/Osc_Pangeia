import React, {useState} from 'react';
import CadastroForm from '../Components/FormCad';
import Navbar2 from "../Components/Navbar2";
import ContainerFooter from '../Components/Footer';


function FormularioCad() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Navbar2 toggle={toggle}/>
        <CadastroForm />
        <ContainerFooter />
    </>
  )
}

export default FormularioCad;