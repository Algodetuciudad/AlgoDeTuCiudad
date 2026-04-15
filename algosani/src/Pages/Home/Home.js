
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

<div className="hero"
style={{backgroundImage:"url('/img/1440x810_30643432_museo-de-san-fernando-municipio-2024.jpg')"}}
>

        <div className="hero-content">
          <h1 className="hero-title">
            Capturamos la esencia <br />
            <span>de San Fernando</span>
          </h1>
        </div>

</div>
<div className="hero-line"></div>
<div className="container">
<h2 className="section-title">Últimas noticias San Fernando</h2>

<div className="carousel">

{noticias.filter(n => n.ciudad === "San Fernando").map(n => (
<NewsCard key={n.id} noticia={n}/>
))}

</div></div>
<div className="hero"
style={{backgroundImage:"url('/img/Café_de_París_en_Vicente_López,_Provincia_de_Buenos_Aires.jpg')"}}
>
        <div className="hero-content2">
          <h1 className="hero-title">
            Capturamos la esencia <br />
            <span>de Vicente López</span>
          </h1>
        </div>
</div>
<div className="hero-line"></div>
<div className="container">
<h2 className="section-title">Últimas noticias Vicente López</h2>

<div className="carousel">
{noticias.filter(n => n.ciudad === "Vicente Lopez").map(n => (
<NewsCard key={n.id} noticia={n}/>
))}
</div></div>
<div className="hero"
style={{backgroundImage:"url('/img/Estación_Tigre_-_panoramio.jpg')"}}
>
        <div className="hero-content">
          <h1 className="hero-title">
            Capturamos la esencia <br />
            <span>de Tigre</span>
          </h1>
        </div>
</div>
<div className="hero-line"></div>
<div className="container">
<h2 className="section-title">Últimas noticias Tigre</h2> 
<div className="carousel">
{noticias.filter(n => n.ciudad === "Tigre").map(n => (
<NewsCard key={n.id} noticia={n}/>
))}
</div></div>
</div>



)

}