import { Link, useLocation } from "react-router-dom"
import "./Header.css"

export default function Navbar(){

const location = useLocation()

return(

<header className="header">

<div className="topbar">

{/* LOGO */}

<div className="logo">
<img src="\img\Screenshot_2026-03-09_at_22-29-30_Algo_-_Manual_-_Algo_-_Manual.pdf-removebg-preview.png" alt="Algo de tu ciudad" />
<span>De tu Ciudad</span>
</div>

{/* NAV */}

<nav className="nav">

<Link
to="/"
className={location.pathname === "/" ? "active" : ""}
>
Inicio
</Link>

<Link
to="/sanIsidro"
className={location.pathname === "/sanIsidro" ? "active" : ""}
>
San Isidro
</Link>

<Link
to="/sanMiguel"
className={location.pathname === "/sanMiguel" ? "active" : ""}
>
San Miguel
</Link>
<Link
to="/VicenteLopez"
className={location.pathname === "/VicenteLopez" ? "active" : ""}
>
Vicente Lopez
</Link>
<Link
to="/Tigre"
className={location.pathname === "/Tigre" ? "active" : ""}
>
Tigre
</Link>
<Link
to="/sanFernando"
className={location.pathname === "/sanFernando" ? "active" : ""}
>
San Fernando
</Link>

<a
href="https://mail.google.com/mail/?view=cm&fs=1&to=Algodetuciudad@gmail.com"
className={location.pathname === "/sanMiguel" ? "active" : ""}
>
Contacto
</a>

</nav>

{/* REDES */}

<div className="social">

<a href="https://www.instagram.com/algodesanisidro/">
<i className="fa-brands fa-instagram"></i>
</a>

<a href="https://www.tiktok.com/@algodesanisidro">
<i className="fa-brands fa-tiktok"></i>
</a>

<a href="https://www.threads.com/@algodesanisidro">
<i className="fa-brands fa-threads"></i>
</a>

</div>

</div>

</header>

)

}