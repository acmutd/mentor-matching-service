import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.lastname);
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Mentor Mentee Matching Form</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='firstname'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Last name:</p>
      <input
        type='text'
        name='lastname'
        onChange={this.myChangeHandler}
      />
      <br></br>
      <br></br>
      <input
        type='submit'
      />
      </form>
      
      
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('roots'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
