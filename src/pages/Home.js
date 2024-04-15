import React from "react";
import Kary from "./Kary.png"
import { SiGooglemybusiness } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa"; 
import { FaFacebook } from "react-icons/fa";
import Footer from "./Footer";

const home = () =>{
    return  (
<div className="portada">
<header className= "App-header">
    <img className="logo" src= {Kary}/>
    <p className="descripcion"> Contamos con excelente calidad y servicio en nuestro productos.</p>
</header>
<Footer/>



</div>
    );
}

export default home;