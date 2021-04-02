import React, { Component, useState } from 'react';
import {
 
  MDBIcon,
  MDBBtn, 
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
}
 from 'mdbreact';
 import EspaceDroit from './espaceDroit';
 import CreationEntreprise from './creationEntreprise'
import SectionContainer from '../components/sectionContainer'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

class GererEntreprise extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        modal: false,
        prenom: '',
        nom: '',
        postnom: '',
        sexe: '',
        numeroTel: '',       
        mail: '',
        mattricule: '',
        statut: ''
      };
    
   }
      toggle = () => {
        const { modal } = this.state;
        this.setState({
          modal: !modal
        });
      };
    
      render() {
        const { modal, prenom,nom,postnom,sexe,numeroTel,mail,mattricule,statut } = this.state;
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
             
           {/* ============== content ============= */}
           <div className='text-center py-4 mt-3'>
                <MDBBtn className="text-center"color="deep-purple" type='submit' onClick={this.toggle}>
                    Création du DG
                </MDBBtn>
              </div>
          <MDBModal
            isOpen={modal}
            toggle={this.toggle}
            className='cascading-modal'>
            <div className='modal-header w3-deep-purple white-text'>
              <h4 className='title'> 
                <MDBIcon icon='user' />Création du DG
              </h4>
              <button type='button' className='close' onClick={this.toggle}>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <MDBModalBody>
              <form className='grey-text'>
                <MDBInput
                  size='sm'
                  label='Prénom'
                  value={this.state.prenom}                
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                 <MDBInput
                  size='sm'
                  label='Nom' 
                  value={this.state.nom}               
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                 <MDBInput
                  size='sm'
                  label='PostNom' 
                  value={this.state.postnom}               
                  group
                  type='text' 
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  size='sm'
                  label='Adresse Mail'
                  value={this.state.mail}
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  size='sm'
                  label='Numéro de téléphone'
                  value={this.state.numTel}
                  group
                  type='number'
                  validate
                  error='wrong'
                  success='right'
                />
                 <MDBInput
                  size='sm'
                  label='Matricule'
                  value={this.state.matricule}
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                 <MDBInput
                  size='sm'
                  label='statut'
                  value={this.state.statut}
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
               
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='danger' onClick={this.toggle}>
                Fermer
              </MDBBtn>
              <MDBBtn color='deep-purple'>
                Créer <MDBIcon icon='paper-plane' className='ml-1' />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>

      </div>
        
      );
    }
}
export default GererEntreprise; 
