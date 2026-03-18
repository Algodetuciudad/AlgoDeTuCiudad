import React from 'react';
import './Footer.css';

function Footer(){

    return (
           <footer className="footer">
        <div className="container footer-grid">

          <div>
            <h4>Algo de tu Ciudad</h4>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
            <a href="#">Publicidad</a>
          </div>

          <div>
            <h4>Secciones</h4>
            <a href="#">San Isidro</a>
            <a href="#">San Miguel</a>
            <a href="#">Comunidad</a>
          </div>

        </div>

        <div className="copy">
          © 2026 Algo de tu Ciudad
        </div>
      </footer>
    )
}

export default Footer;
