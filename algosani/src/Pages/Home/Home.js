
import NewsCard from "../../Components/NewCard"
import {noticias} from "../../data/noticias"

export default function Home(){

return(

<div>

{/* HEADER EDITORIAL */}

<div className="header-info">

<h1 className="titulo-principal">
Capturamos la esencia de tu ciudad
</h1>

<p className="subtitulo">
Noticias, historias y comunidad desde la mirada de los vecinos
</p>

</div>
<div className="hero"
style={{backgroundImage:"url('/img/Algo - Manual_page-0029.jpg')"}}
>

        <div className="hero-content">
          <h1 className="hero-title">
            Capturamos la esencia <br />
            <span>de San Isidro</span>
          </h1>
        </div>

</div>
<div className="hero-line"></div>
<div className="container">

<h2 className="section-title">Últimas noticias San Isidro</h2>

<div className="carousel">

{noticias.filter(n => n.ciudad === "San Isidro").map(n => (
<NewsCard key={n.id} noticia={n}/>
))}

</div>

</div>
<div className="hero"
style={{backgroundImage:"url('/img/Algo - Manual_page-0022.jpg')"}}
>

        <div className="hero-content2">
          <h1 className="hero-title">
            Capturamos la esencia <br />
            <span>de San Miguel</span>
          </h1>
        </div>

</div>
<div className="hero-line"></div>
<div className="container">

<h2 className="section-title">Últimas noticias San Miguel</h2>

<div className="carousel">

{noticias.filter(n => n.ciudad === "San Miguel").map(n => (
<NewsCard key={n.id} noticia={n}/>
))}

</div>

</div>

</div>

)

}