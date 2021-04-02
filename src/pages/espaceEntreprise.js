import React, { Component, useState } from 'react';
import {
 
  MDBBtn,
  MDBRow,
  MDBCol,
 
}
 from 'mdbreact';
 import EspaceDroit from './espaceDroit';
 import CreationEntreprise from './creationEntreprise'
import SectionContainer from '../components/sectionContainer'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';
import { getListeEpt } from '../Actions/back-end'

class EspaceEntreprise extends React.Component {
    state = {
        listEntreprise : []
    }
 
    componentDidMount(){
         
     getListeEpt().then(
        (res)=>{
         console.log(res.data)
        this.setState({listEntreprise : res.data.data })
            
      }).catch(
        (error) =>{
         console.log(error)
      })
    }     
    render() {
        const ListEntreprise = this.state.listEntreprise
        return (
             
        <div className="">
         
            <div className="w3-btn-group " style={{width:'1300px'}}>  
                           
               <NavLink to="/espaceEntreprise" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{Color:'green'}}>
                 <button className="w3-bar-item w3-text-white w3-deep-purple w3-padding w3-hover-white  w3-hover-white w3-button "
                  style={{width:'15.3%'}}>ESPACE ENTREPRISE</button>
               </ NavLink>             
               <NavLink to="/espacePersonnels" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                 <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button " style={{width:'15.3%'}}>
                   ESPACE UTILISATEURS
                 </button>
               </NavLink>
             <NavLink to="/espaceVoyages" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                 <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button " style={{width:'15.3%'}}>
                 ESPACE VOYAGES
                 </button>
             </NavLink>
           </div>
             
            {
                ListEntreprise.map(items=>(
                    <MDBRow key={items.idCompagnie} style={{marginTop:'50px'}}>
                        <MDBCol md='4'>
                            <h3>ENTREPRISE</h3>
                            <p>Nom Entreprise : {items.nom}</p>
                            <p>Code Entreprise : {items.code}</p>
                            <p>Nom du DG : MULAND </p>
                        </MDBCol>
                        <MDBCol md='4'>
                            <h3>CONTRAT</h3>
                            <p>Type : Annuel</p>
                            <Link to="/contrat">Contrat</Link>
                        
                        </MDBCol>   
                        <MDBCol md='4'>
                        <Link to="/gererEntreprise">
                            <MDBBtn color='warning' type='submit'>
                                GERER
                            </MDBBtn>
                        </Link>
                        </MDBCol>                            
                    </MDBRow> 
                ))
            }
            

             <CreationEntreprise/>
      </div>
        
      );
    }
}

export default EspaceEntreprise; 

