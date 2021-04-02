import React ,{ lazy,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

const SignIn  = lazy(() => import('./pages/sign-in'));
const Register  = lazy(() => import('./pages/register'));
const EspaceEntreprise  = lazy(() => import('./pages/espaceEntreprise'));
const CreationEntreprise  = lazy(() => import('./pages/creationEntreprise'));
const GererEntreprise  = lazy(() => import('./pages/gererEntreprise'));

class Routes extends React.Component {
    render() {
      return (
        <Switch>        
            <Route exact path='/' component={SignIn} />
            <Route path="/register" exact strict component={Register}/>
            <Route path="/espaceEntreprise" exact strict component={EspaceEntreprise}/>
            <Route path="/creationEntreprise" exact strict component={CreationEntreprise}/> 
            <Route path="/gererEntreprise" exact strict component={GererEntreprise}/> 
       <Route
       render={function() {
         return <h1>Not Found</h1>;
       }}
     />
   </Switch>
 );
}
}

export default Routes;
