import React, { Component, useState } from 'react';
import {  
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer, 
  MDBInput
} from 'mdbreact';
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';
import SectionContainer from '../components/sectionContainer'
import { loginUser, getListeStatut } from "../Actions/back-end";
import { getCours } from "../Actions/back-end";
import axios from 'axios'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          modale: false,
          data:{
            codeEntreprise : null,
            matricule : null,
            password : null,
           
           }
        }
   
    }
     
    handleSubmit = e =>{
        e.preventDefault();
        const { data } = this.state
        console.log(data)
      loginUser(data).then(
         (res)=>{
          console.log(res.data)
       }).catch(
         (error) =>{
          console.log(error)
       })
       
    }
    handleChange = e =>{
        const data = { [e.target.name] : e.target.value }
        const tmp = { ...this.state.data, ...data}
        this.setState({data : {...tmp}})       
    };
    componentDidMount(){ 
      let satatut = "DG"
      getListeStatut(satatut).then(
        res =>{
          console.log(res.data)
        }).catch(err =>{
        console.log(err)
      })
    }
    render() {
      
        //const {codeEntreprise,matricule,password} = this.state;
      return (
        <div className="w3-container ">
        <div className="w3-container">
        
         <MDBContainer>
        
            <MDBCard> 
              <MDBCardBody>
                <form onSubmit={this.handleSubmit} noValidate>
                  <p className='h4 text-center py-4'>CONNEXION</p>
                  <div className='grey-text'>
                    <MDBInput
                      label='Code Entréprise'
                      icon='id-card'
                      name="codeEntreprise"
                      onChange={this.handleChange}
                      value={this.state.data.codeEntreprise}
                      group
                      type='text'
                      validate                    
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      label='Matricule'
                      icon='user'
                      name="matricule"
                      onChange={this.handleChange}
                      value={this.state.data.matricule }
                      group
                      type='text'                                         
                      success='right'
                    />
                   
                    <MDBInput
                      label='Mode de passe'
                      icon='lock'
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.data.password }
                      group
                      type='password'
                      validate
                    />
                  </div>
                  <div className='text-center py-4 mt-3'>
                
                    <MDBBtn color='deep-purple' type='submit'>
                        SE CONNECTER
                    </MDBBtn>
                    <Link to="/register">S'inscrire ICi</Link>
                
              </div>
                </form>
              </MDBCardBody>
            </MDBCard>
      
          </MDBContainer>
          
              </div>
          </div>
      );
    }
}
export default SignIn; 
