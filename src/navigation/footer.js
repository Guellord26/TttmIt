import React, { Component, useState } from 'react';
import {
 
  MDBFooter,
  MDBIcon,
 

} from 'mdbreact';
// import SectionContainer from './components/sectionContainer';
// import Reservation from '../pages/reservation'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';
// import { ReactComponent as Logo } from '../assets/logo.svg';
// import NosClasses from '../pages/nosclasses';
// import NosDestination from '../pages/nosDestination';

const Footer = () =>{

    return(
        <div className="w3-container">
             <MDBFooter style={{backgroundColor:'#333333'}}>
          <div className="w3-container">
            <div className="w3-row-padding w3-padding-16 w3-center" id="food">
              <div className="w3-quarter">            
                <h3>CONTENU</h3>
                <p>Reservation</p>
                <p>Voyages</p>
                <p>Promotions</p>
              </div>
              <div className="w3-quarter">
                
              <h3>INFORMATION</h3>
                <p>Forfaits & Prix</p>
                <p>Itinerairs</p>
                <p>A propos de nous</p>
              </div>
              <div className="w3-quarter">
                
                <h3>LEGAL</h3>
                <p>Condition general</p>
                <p>Politique de confidentialite</p>
                <p>Aides</p>
                <p>Contact</p>
              </div>
              <div className="w3-quarter">
                <h3>RESEAUX SOCIAUX</h3>
                <p style={{fontSize:'30px'}}><MDBIcon fab icon="facebook"></MDBIcon></p>
                <p style={{fontSize:'30px'}}><MDBIcon fab icon="twitter"></MDBIcon></p>
                <p style={{fontSize:'30px'}}><MDBIcon fab icon="pinterest"></MDBIcon></p>
                <p style={{fontSize:'30px'}}><MDBIcon fab icon="instagram"></MDBIcon></p>
              </div>
            </div>
            </div>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.TTM.com'> TravelTechnologyManagement.com </a>
            </p>
          </MDBFooter>
        </div>
    );

}
export default Footer;