import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import SanIsidro from "./Pages/SanIsidro/SanIsidro";
import NoticiaDetalle from "./Pages/NoticiaDetalle/NoticiaDetalle"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SanFernando from './Pages/SanFernando/SanFernando';



import "./Styles/theme.css"
import "./Styles/layout.css"

function App() {
  return (
    <React.Fragment>
      
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sanIsidro" component={SanIsidro} />
         <Route exact path="/sanMiguel" component={SanFernando} />
          <Route exact path="/detalle/:id" component={NoticiaDetalle} />
        </Switch>
        <Footer/>
   
    </React.Fragment>
  );
}

export default App;
