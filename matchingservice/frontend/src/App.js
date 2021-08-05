import './App.css';
import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/navbar';
import form from './components/form';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './components/LoginPage';

const Admin = () => {
  const [initialData, setInitialData] = useState([{}])

  const buttonSubmit = () => {
    fetch('/getNames').then(
      response => response.json()
    ).then(
      data => setInitialData(data)
    )
  }

  return (
    <React.Fragment>
    <div>
      <Button onClick={buttonSubmit} type="submit" variant="contained" color="primary">Submit</Button>
      <div>
        {JSON.stringify(initialData)}
      </div>
    </div>
    </React.Fragment>
  );
};


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
                  <Route path="/admin" component={Admin} />
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
