import './App.css';
import React , {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/navbar';
import form from './components/form';
//import './formStyles.css'


const Admin = () => {
  const [initialData, setInitialData] = useState([{}])

  useEffect(() => {
    fetch('/getNames').then(
      response => response.json()
    ).then(
      data => setInitialData(data)
    )
  })
  return (
    <React.Fragment>
    <div>
      <p className='formHeaders'>Admin side
      <br></br> 
      Admin side again
      </p>
      
    </div>
    <br></br>
    <h1>{initialData[0].mentor}</h1>
    </React.Fragment>
  );
};


function App() {
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
  );
}

export default App;
