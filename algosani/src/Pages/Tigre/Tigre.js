import NewsCard from "../../Components/NewCard";
import { noticias } from "../../data/noticias";

export default function Tigre() {
  
  const noticiasFiltradas = noticias.filter(n => n.ciudad === "Tigre");

  return (
    <div>
      <div className="container">
        <h1 className="section-title">Noticias de Tigre</h1>
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