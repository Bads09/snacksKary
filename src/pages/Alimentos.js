import React from "react";
import Aros from "./Aros.jpg";
import Dedos from "./Dedos.jpg"
import Alas from "./Alas.jpg";
import Nachos from "./Nachos.jpg";
import Pulpos from "./Pulpos.jpg";
import Tacos from "./Tacos.jpg";
import Tostitos from "./Tostitos.jpg";
import Footer from "./Footer";
import { GrBottomCorner } from "react-icons/gr";

const alimentos = () =>{
    return (
<div className="fondo">
    <h1>Contamos con una gran variedad de alimentos</h1>
    <h2>Revisa nuestro menú y ordena tus alimentos</h2>
    <div class="alimento">
  <img className="alimento" src= {Alas}/>
  <div class="desc">orden de 10 alitas con vegetales incluidos $120</div>
</div>
<div class="alimento">
  <img className="alimento" src= {Aros}/>
  <div class="desc">orden de 10 aros de cebolla $80</div>
</div>
<div class="alimento">
  <img className="alimento" src= {Dedos}/>
  <div class="desc">orden de 6 aros de cebolla $70</div>
</div>
<div class="alimento">
  <img className="alimento" src= {Nachos}/>
  <div class="desc">Nachos ch: $55 G: $70</div>
</div>
<div class="alimento">
  <img className="alimento" src= {Pulpos}/>
  <div class="desc">Salchipulpos Ch: $40 G: $55 EG: $70</div>
</div>
<div class="alimento">
  <img className="alimento" src= {Tacos}/>
  <div class="desc">Salchitacos Ch: $40 G: $55 EG: $70 </div>
</div>
<div class="alimento">
  <img className="alimento" src= {Tostitos}/>
  <div class="desc">Tostilocos $55</div>
</div>


</div>

    );
    
    


}

export default alimentos;