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
  MDBInput,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBModal,
  MDBBadge,
  MDBDataTableV5,
  
}
 from 'mdbreact';
 import EspaceDroit from './espaceDroit';
import SectionContainer from '../components/sectionContainer'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

class EspacePersonnls extends React.Component {
    state = {
        modal1: false,
        checkbox1: '',
        checkbox2: '',
        multiple: '',
        data: {
            columns: [
                {
                  label: 'Nom',
                  field: 'nom',
                  width: 150,
                  attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name'
                  }
                },
                {
                  label: 'Matricule',
                  field: 'matricule',
                  width: 270
                },
                {
                  label: 'Statut',
                  field: 'statut',
                  width: 200
                },
                {
                  label: 'ACtion',
                  field: 'action',
                  sort: 'asc',
                  width: 100
                },
               
              ],
              rows: [
                {
                  nom: 'Tiger Nixon',
                  matricule: 'System Architect',
                  statut: 'Edinburgh',
                  action: '61',
                 
                },
               
                {
                    nom: 'Tiger Nixon',
                    matricule: 'System Architect',
                    statut: 'Edinburgh',
                    action: '61',
                },
                {
                    nom: 'Tiger Nixon',
                    matricule: 'System Architect',
                    statut: 'Edinburgh',
                    action: '61',
                },
                {
                    nom: 'Tiger Nixon',
                    matricule: 'System Architect',
                    statut: 'Edinburgh',
                    action: '61',
                },
                {
                    nom: 'Tiger Nixon',
                    matricule: 'System Architect',
                    statut: 'Edinburgh',
                    action: '61',
                },
                {
                  nom: 'Tiger Nixon',
                  matricule: 'System Architect',
                  statut: 'Edinburgh',
                  action: '61',
                  }
                ]
              }        
     
      };
    //==================================//
    showLogs1 = e => {
        this.setState({ checkbox1: e });
      };
    
      showLogs2 = e => {
        this.setState({ checkbox2: e });
      };
    
      multiPle = e => {
        this.setState({ multiple: e });
      };


    // ========================//
      toggle = nr => () => {
        const modalNumber = `modal${nr}`;
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      };
    render() {
        const { modal1,data, multiple, checkbox1, checkbox2 } = this.state;
        const badgesData = {
            columns: [
              {
                label: 'ID',
                field: 'badge'
              },
              ...data.columns
            ],
            rows: [
              ...data.rows.map((row, order) => ({
                ...row,
                badge: (
                  <MDBBadge pill color='primary' className='p-1 px-2' key={order} searchvalue={order}>
                    ID: {order + 1}
                  </MDBBadge>
                  
                )
              }))
            ]
          };
      
          const widerData = {
            columns: [
              ...data.columns.map(col => {
                col.width = 200;
                return col;
              })
            ],
            rows: [...data.rows]
          };
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
            
        <SectionContainer header='' flexCenter style={{marginTop:'100px'}}>
          <MDBBtn  rounded onClick={this.toggle(1)}>
          <b>Liste des utilisateurs</b>
          </MDBBtn>
          <MDBModal isOpen={modal1} toggle={this.toggle(1)} size='lg'>
          <MDBRow>
          <MDBCol md='12'>
           
                <MDBCard>
                   <MDBContainer>
                   <h3>Liste de utilisateurs</h3>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    searchTop
                    searchBottom={false}
                  />
                  <MDBBtn>
                    <b>Cosulter</b>
                  </MDBBtn>
                   </MDBContainer>
                </MDBCard>
               
          </MDBCol>
        </MDBRow>
            
          </MDBModal>
        </SectionContainer>
      </div>
        
      );
    }
}
export default EspacePersonnls; 
