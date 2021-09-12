import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/navbar';
import form from './components/form';
import Admins from './components/Admins';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './components/LoginPage';
import ErrorPage from './components/ErrorPage';
import { db } from './firebase.js';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [emails, setEmails] = useState(false);
  const [isLoading, setLoading] = useState(false);
  if (isAuthenticated) {
    db.collection('participants')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(user.email);
        console.log(data[0].email);
        console.log(data[0].email === user.email); // array of cities objects
        for (let i = 0; i < data.length; i++) {
          if (data[i].email === user.email) {
            setEmails(true);
            break;
          }
        }
        setLoading(true);
      });
  }
  if (isAuthenticated && emails) {
    return (
      <div>
        <Router>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={form} />
              <Route path="/admin" component={Admins} />
            </Switch>
          </Router>
        </Router>
      </div>
    );
  } else if (isAuthenticated && !isLoading) return <div>Loading2...</div>;
  else if (isAuthenticated) {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={ErrorPage} />
            <Route path="/admin" component={Admins} />
          </Switch>
        </Router>
      </div>
    );
  }

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
