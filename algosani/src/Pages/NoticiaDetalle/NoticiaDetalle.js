import {useParams} from "react-router-dom"
import {noticias} from "../../data/noticias"
import "./detalle.css"

export default function NoticiaDetalle(){

const { id } = useParams()

const noticia = noticias.find(n => n.id === Number(id))

if(!noticia){
return(
<div style={{padding:"40px"}}>
<h2>Noticia no encontrada</h2>
</div>
)
}

return(

<div className="detalle-page">

<div className="detalle-container">

{/* TITULO */}

<h1 className="section-title">
{noticia.titulo}
</h1>

<p className="detalle-meta">

<span>{noticia.fecha}</span>

<span className="separator">-</span>

<span>{noticia.ciudad}</span>

</p>
{/* LAYOUT */}

<div className="detalle-layout">

{/* FOTO VERTICAL */}

<div className="detalle-banner">

<img src={noticia.img2} alt={noticia.titulo}/>

</div>

{/* CONTENIDO */}

<div className="detalle-contenido">

<p className="detalle-texto">
{noticia.contenido}
</p>

{/* FOTO INTERNA */}

<img
className="detalle-foto"
src={noticia.img}
alt={noticia.titulo}
/>

<p className="detalle-texto">
{noticia.contenido}
</p>

</div>

</div>

</div>

</div>

)

}