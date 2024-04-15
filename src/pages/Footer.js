import React from "react";
import { SiGooglemybusiness } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa"; 
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {

    return (
<div className="container">
<div className="footer">
<SiGooglemybusiness /> Paseo de las Gladiolas #25-B Col. Jardines de San Antonio <br/>
<FaWhatsapp /> 331327658<br/>
<FaFacebook /> Snacks kary<br/>
</div>
<p className="company">Desde 2020 dando sabor a su paladar</p>
</div>
    );
}
export default Footer;