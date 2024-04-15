import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return <div className="navbar">
<nav className="menu">
<ul className="menu">
<li>
    <Link to={"/"} className="navegacion"> home</Link>
</li>
<li>
    <Link to= {"/alimentos"} className="navegacion">alimentos</Link>
</li>

<li>
    <Link to ={"/pedido"}className="navegacion">pedido</Link>
</li>

</ul>

</nav>
<hr/>
<Outlet/>

    </div>
}

export default Layout;