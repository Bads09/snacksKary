import Footer from "./Footer";
import { useForm } from "react-hook-form";

const pedido = () => {
   const{ register, handleSubmit } = useForm;
    
    return  <div className="fondo">
    <h1>Tu pedido se ha registrado </h1>
    <h2>Registra tus datos, a dónde será enviado el pedido</h2>
   <form>
    <div>
<label>Nombre</label>
<input type="text" name=""/>
</div>
<div>
<label>Domicilio</label>
<input type="text" name=""/>
</div>
<div>
<label>Teléfono</label>
<input type="text" name=""/>
</div>
<div>
<label>Orden a:</label>
<select>
    <option value="dom">Domicilio</option>
    <option value="rec">Recoger</option>
</select>
</div>
<input type="submit" value="Enviar"></input>
   </form>
   
</div>
    
}

export default pedido;