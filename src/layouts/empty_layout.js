import React, {Component} from 'react';
import Footer from "../components/footer"; 
import PropTypes from 'prop-types';
export class EmptyLayout extends Component {
    propTypes = {
      children: PropTypes.node.isRequired,
      
    }
  
    
  render() {
        return ( 
 
  <div className="container">
        <header >
       

        <nav className="gridColumn1">

        <div className="logoImgHeader">
            <div className="logoImgMiddle">
              <img src={process.env.PUBLIC_URL+"/images/logo_solo.jpg"} alt="Campus ITLI" width="80" /> 
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
      <div className="head class_hidden" >
            <h1 className="color_text_head  ">Instituto Técnico< br/> Laboral INTERLEM'D</h1>
            <div>
              <p  className="color_text_head"> <strong>Fundación Internacional de Libre Expresión Motora y de Destrezas INTERLEM’D, identificado con NIT 900459129-7 y con domicilio principal en la Carrera 24 No. 23-05. 
              Barrio el Salitre - Yopal Casanare, República de Colombia. 
              Teléfono 3142981372 - 3112520242 en la ciudad de Yopal – Casanare.</strong></p>
              <div></div>
            </div>
        </div>
       
      </header>
      {this.props.children}
        <Footer />
      </div>     
    
        );
      }
    }
  export default EmptyLayout