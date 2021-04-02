import React, { Component, useState,lazy,Suspense } from 'react';
import { 
  MDBRow,
  MDBCol,
  MDBNav,
  MDBLink,
  MDBCard

} from 'mdbreact';
import SectionContainer from './components/sectionContainer';
import Routes from './Routes'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Footer from './navigation/footer'
import SignIn from './pages/sign-in'
import baniere from './assets/Baniere.png'
import EspaceDroit from './pages/espaceDroit';

const App = () => {
 
 
    return (
      <Router>
      <div className="w3-containe w3center">
        {/* ============================== Header =============================== */}
        <div className="w3-display-container w3-hide-small " style={{marginTop:'-120px'}}>
          <header className="w3-display-container w3-container w3-deep-purple w3-wide  w3-center w3-padding-128" id="home" style={{marginTop:'50px'}} style={{height:'300px'}}>     
          </header>
   
        </div>
     
          <div style={{marginTop:'50px'}}>
         
          </div>
          
          <div>
          <MDBRow>
          
                <MDBCol md='3'>

                <div className="w3-container ">
                 
                 <MDBCard>
                    <MDBNav className=' flex-column font-weight-bold' style={{marginBottom:'15px'}}>
                      <MDBLink className='w3-text-deep-purple' active to='/espaceEntreprise'  style={{marginTop:'20px'}}>
                       <h5>Epace Entreprise</h5>
                       <hr/>
                      </MDBLink>                     
                      <MDBLink className='w3-text-deep-purple' to='/'>
                        <h5>Contrat</h5>
                        <hr/>
                      </MDBLink>
                      <MDBLink className='w3-text-deep-purple' to='/'>
                        <h5>Prolonger Contrat</h5>
                        <hr/>
                      </MDBLink>
                      <MDBLink className='w3-text-deep-purple' to='/gestionEntreprise'>
                        <h5>Gestion Entreprise</h5>
                        <hr/>
                      </MDBLink>
                      <MDBLink className='w3-text-deep-purple' to='/'>
                        <h5>Information sur L'entreprise</h5>
                        <hr/>
                      </MDBLink>
                      <MDBLink className='w3-text-deep-purple' to='/profilUser'>
                        <h5>Profil Utilisateur</h5>
                        <hr/>
                      </MDBLink>
                      <MDBLink className='w3-text-deep-purple' to='/'>
                        <h5>Déconnexion</h5>
                      </MDBLink>
                    </MDBNav>
                   </MDBCard>
                    
                 </div> 
                </MDBCol>
                    
            <MDBCol md='6'>
             
            <Suspense fallback = {
                <div className='my-5 d-flex justify-content-around'>
                  <div className='spinner-border text-primary' role='status'>
                    <span className='sr-only'>Loading...</span>
                  </div>
                </div>} >
                <Routes />
            </Suspense>   
            </MDBCol>     
            <MDBCol md='3' style={{marginBottom:'50px'}}>
              <EspaceDroit/>
            </MDBCol>       
          </MDBRow>
          </div>
          {/* ========================CLASSES============================= */}
          <div>
            
          </div>

      {/* </MDBContainer>  */}
          {/* ======================= FOOTER ============================ */}
          <div><Footer/></div>
          {/* ============================================================= */}
              
      </div>  
      </Router>
    );
  }
// } 

export default App;
