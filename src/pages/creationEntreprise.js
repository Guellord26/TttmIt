import React, { Component, useState } from 'react';
import {
  
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter

} from 'mdbreact';
import SectionContainer from '../components/sectionContainer'
class CreationEntreprise extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            data:{
                nomEntreprise: null,
                codeEntreprise: null,
                sloganEntreprise: null,
                mail: null,
                nomResponsable: null
                
            }
        };
}


  handleSubmit = e =>{
    e.preventDefault();
    const { data } = this.state
    console.log(data)   
  
  }
  
  handleChange = e =>{
    //   e.preventDefault();
      const data = { [e.target.name] : e.target.value }
      const tmp = { ...this.state.data, ...data}
      this.setState({data   : {...tmp}})           
     
   }
   toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };
  
  render() {
    const { modal } = this.state;
      return (
        <div>
 
            <div className='text-center py-4 mt-3'>
                <MDBBtn className="text-center"color="warning" type='submit' onClick={this.toggle}>
                    + AJOUTER ENTREPRISE
                </MDBBtn>
            </div>
          <MDBModal
            isOpen={modal}
            toggle={this.toggle}
            className='cascading-modal'>
            <div className='modal-header w3-deep-purple white-text'>
              <h4 className='title'>
                <MDBIcon icon='pencil-alt' />Entreprise
              </h4>
              <button type='button' className='close' onClick={this.toggle}>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <MDBModalBody>
              <form onSubmit={this.handleSubmit} noValidate className='grey-text'>
                <MDBInput
                  size='sm'
                  label='Nom Entreprise'
                  icon='university'
                  onChange={this.handleChange}
                  value={this.state.nomEntreprise}               
                  group
                  name='nomEntreprise'
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                 <MDBInput
                  size='sm'
                  label='Code Entreprise'
                  icon='id-card'
                  onChange={this.handleChange}
                  value={this.state.codeEntreprise}
                  group
                  name='codeEntreprise'
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  size='sm'
                  label='Mail Entreprise'
                  icon='envelope'
                  onChange={this.handleChange}
                  value={this.state.mail}
                  group
                  name='mail'
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  size='sm'
                  label='Nom Responsable'
                  icon='user'
                  onChange={this.handleChange}
                  value={this.state.nomResponsable}
                  group
                  name='nomResponsable'
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
               
                <MDBInput
                  size='sm'
                  icon='tag'
                  onChange={this.handleChange}
                  value={this.state.sloganEntreprise}
                  type='textarea'
                  name='sloganEntreprise'
                  rows='2'
                  label='Slogan'                  
                />
                <MDBBtn color='deep-purple' type='submit'>
                Enregistrer <MDBIcon icon='paper-plane' className='ml-1' />
              </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              
            </MDBModalFooter>
           </MDBModal>
        </div>
      );
    }
}
export default CreationEntreprise; 
