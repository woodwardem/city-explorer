
import React from 'react';
import './App.css';
class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    city: ''
  };
}



handleChange = (event)  => {
  let typedCity = event.target.value;
  this.setState( {city:typedCity })
} 

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>City Explorer</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form>
      
       Your City: <input type="text" name="yourcity" onChange ={this.handleChange} />
        <button>Search</button>
      </form>
      <h2>here is the math for {this.state.city} </h2>
    </div>
  );
  }
};
export default App;
