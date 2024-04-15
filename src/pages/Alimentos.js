import React from "react";
import Aros from "./Aros.jpg";
import Dedos from "./Dedos.jpg"
import Alas from "./Alas.jpg";
import Nachos from "./Nachos.jpg";
import Pulpos from "./Pulpos.jpg";
import Tacos from "./Tacos.jpg";
import Tostitos from "./Tostitos.jpg";
import Footer from "./Footer";

const alimentos = () =>{
    return (
<div className="fondo">
    <h1>Contamos con una gran variedad de alimentos</h1>
    <h2>Revisa nuestro menú y ordena tus alimentos</h2>
    <img className="alimento" src= {Alas}/>
    <img className="alimento" src= {Dedos}/>
    <img className="alimento" src= {Aros}/>
    <img className="alimento" src= {Nachos}/>
    <img className="alimento" src= {Pulpos}/>
    <img className="alimento" src= {Tacos}/>
    <img className="alimento" src= {Tostitos}/>
    <Footer/>
</div>

    );
    
    


}

export default alimentos;