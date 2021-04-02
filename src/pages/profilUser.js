import React, { Component, useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBButtonLink,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardGroup,
  MDBJumbotron,
  MDBContainer, MDBRating,
  MDBRow,
  MDBCol,
  MDBInputSelect, 
  MDBInput
}
 from 'mdbreact';
 import EspaceDroit from './espaceDroit';
import SectionContainer from '../components/sectionContainer'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

class ProfilUser extends React.Component {
    render() {
      return (
        <div className="">
            <div className="w3-btn-group " style={{width:'1300px'}}>  
                           
                <NavLink to="/espaceEntreprise" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{Color:'green'}}>
                    <button className="w3-bar-item w3-text-white w3-deep-purple w3-padding w3-hover-white  w3-hover-white w3-button "
                    style={{width:'15.3%'}}>ESPACE ENTREPRISE</button>
                </ NavLink>             
                <NavLink to="/espacePersonnels" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                    <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button " style={{width:'15.3%'}}>
                    ESPACE PERSONNELS
                    </button>
                </NavLink>
                <NavLink to="/espaceVoyages" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                    <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button " style={{width:'15.3%'}}>
                    ESPACE VOYAGES
                    </button>
                </NavLink>
            </div>
             
           
      </div>
        
      );
    }
}
export default ProfilUser; 
