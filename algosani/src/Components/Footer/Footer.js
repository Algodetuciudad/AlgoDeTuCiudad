import React from 'react';
import './Footer.css';

function Footer(){

    return (
           <footer className="footer">
        <div className="container footer-grid">

          <div>
            <h4>Algo de tu Ciudad</h4>
            <a href="https://www.instagram.com/algodesanisidro/">Nosotros</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Algodetuciudad@gmail.com">Contacto</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Algodetuciudad@gmail.com">Publicidad</a>
          </div>

          <div>
            <h4>Secciones</h4>
            <a href="/sanIsidro">San Isidro</a>
            <a href="/sanMiguel">San Miguel</a>
            
          </div>

        </div>

        <div className="copy">
          © 2026 Algo de tu Ciudad
        </div>
      </footer>
    )
}

export default Footer;
