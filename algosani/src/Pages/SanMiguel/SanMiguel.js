import NewsCard from "../../Components/NewCard";
import { noticias } from "../../data/noticias";

export default function SanMiguel() {
  
  const noticiasFiltradas = noticias.filter(n => n.ciudad === "San Miguel");

  return (
    <div>
      <div className="container">
        <h1 className="section-title">Noticias de San Miguel</h1>
        <div className="grid">
          {noticiasFiltradas.length > 0 ? (
            noticiasFiltradas.map((n) => (
              <NewsCard key={n.id} noticia={n} />
            ))
          ) : (
            <p>No hay noticias para esta localidad.</p>
          )}
        </div>
      </div>
    </div>
  );
}