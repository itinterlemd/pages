import React, {Component} from 'react';
import Header from "../components/header";
import Footer from "../components/footer"; 
import PropTypes from 'prop-types';

export class MainLayout extends Component {
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
export default MainLayout

