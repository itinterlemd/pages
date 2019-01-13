import React, {Component} from 'react';
import Header from "../components/header";
import Footer from "../components/footer"; 
import {  Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="container">
        <Header />
        <Component {...matchProps} />
        <Footer />
      </div>     
    )} />
  )
};

export const EmptyLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="container">
        <header >
       

        <nav className="gridColumn1">

        <div className="logoImgHeader">
            <div className="logoImgMiddle">
              <img src="/images/logo_solo.jpg" alt="Campus ITLI" width="80" /> 
            </div>
            
            <div>
              <p>
                <span className="logoTextHeader"> INSTITUTO TÉCNICO LABORAL INTERLEM'D </span>
                <p> 
                  <span> RESOLUCIÓN No. 0164 de 2018 - Secretaría de Educación y Cultura de Yopal</span>
                </p>
              </p>
            </div>
        </div>     
        <div className="lineColorGreen">
       
        </div>      
       
      </nav>  
      <div className="head class_hidden">
            <h1 className="color_text_head">Instituto Técnico< br/> Laboral INTERLEM'D</h1>
            <div>
              <p  className="color_text_head"> <strong>Fundación Internacional de Libre Expresión Motora y de Destrezas INTERLEM’D, identificado con NIT 900459129-7 y con domicilio principal en la Carrera 24 No. 23-05. 
              Barrio el Salitre - Yopal Casanare, República de Colombia. 
              Teléfono 3142981372 - 3112520242 en la ciudad de Yopal – Casanare.</strong></p>
              <div></div>
            </div>
        </div>
       
      </header>
        <Component {...matchProps} />
        <Footer />
      </div>     
    )} />
  )
};

/*export class MainLayout extends Component {
  propTypes = {
    component: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    
  }

  
render() {
      return (

<div className="container">       
<Header />
{this.props.children}
<Footer />
</div>    
  
      );
    }
  }
export default MainLayout*/

