import './App.css';
import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/navbar';
import form from './components/form';
import Admin from './components/Admin';
import Admins from './components/Admins';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './components/LoginPage';




function App() {
  const { isAuthenticated } = useAuth0();
  
  if (isAuthenticated)
  return (
    <div>
    <Router>
              <Router>
                <Header/>
                <Switch>
                  <Route exact path="/" component={form} />
                  <Route path="/admin" component={Admins} />
                </Switch>
              </Router>
    </Router>
  </div>
  )

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
