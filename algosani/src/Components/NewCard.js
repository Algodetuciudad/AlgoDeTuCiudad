import {Link} from "react-router-dom"

export default function NewsCard({noticia}){

return(

<Link to={"/detalle/"+noticia.id} style={{textDecoration:"none",color:"inherit"}}>

<div className="card">
<div className="date-badge">
{noticia.fecha}
</div>
<img src={noticia.img}/>
<h3>{noticia.titulo} </h3>

</div>

</Link>

)

}