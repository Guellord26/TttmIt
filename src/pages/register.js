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
import {createUser} from '../Actions/back-end'
import {connect } from 'react-redux'

class Register extends React.Component {
    
        state = {
           donnee:{
            userName: null,
            statut: null,
            password : null,
           }
           
        }

    handleSubmit = e =>{
      e.preventDefault();
      const { donnee } = this.state
      console.log(donnee)
     
     createUser(donnee).then(
       (res)=>{
        console.log(res.data)
     }).catch(
       (error) =>{
        console.log(error)
     })
     
  }
  handleChange = e =>{
      const data = { [e.target.name] : e.target.value }
      const tmp = { ...this.state.donnee, ...data}
      this.setState({donnee : {...tmp}})       
  };
    render() {
        const {nom, mail, password} = this.state;
      return (
        <div className="w3-container ">
        <div className="w3-container">
        
         <MDBContainer>       
            <MDBCard >
              <MDBCardBody>
                <form onSubmit={this.handleSubmit} noValidate>
                  <p className='h4 text-center py-4'>INSCRIPTION</p>
                  <div className='grey-text'>
                    <MDBInput
                      label='Nom'
                      icon='id-card'
                      name="userName"
                      onChange={this.handleChange}
                      value={this.state.userName}
                      group
                      type='text'
                      validate                               
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      label='Statut'
                      icon='envelope'
                      name="statut"
                      onChange={this.handleChange}
                      value={this.state.statut}
                      group
                      type='text'                                          
                      success='right'
                    />
                   
                    <MDBInput
                      label='Mode de passe'
                      icon='lock'
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      group
                      type='password'
                      validate
                    />
                  </div>
                  <div className='text-center py-4 mt-3'>
                
                    <MDBBtn color='deep-purple' type='submit'>
                        S'ENREGISTRER
                    </MDBBtn>               
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
// Register.propTypes = {
//   createUser: React.propTypes.func.isRequired

// }
export default Register; 
// export default connect(null,{createUser})(Register); 
