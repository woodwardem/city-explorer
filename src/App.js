
import React from 'react';
import './App.css';
import Axios from 'axios';
import axios from 'axios';
import { Container } from 'react-bootstrap/Container';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ''
    locationObj: {}
    };
  }



  handleChange = (event) => {
    let typedCity = event.target.value;
    this.setState({ city: typedCity })
    console.log(typedCity);
  }
  getLocation = async (event) => {
    event.preventDefault();
    const url = 'https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json';
    console.log('URL:', url)
    let response = await axios.get(url);
    console.log('Response:', response.data[0]);
    this.setState({
      locationObj: response.data[0]
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>City Explorer</h1>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <form onSubmit={this.getLocation}>

          Your City: <input type="text" name="yourcity" onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
        {this.state.locationObj.display_name &&
          <Container>
            <h2>here is the map for {this.state.locationObj.display_name} </h2>
            <p>Lat/Lon: {this.state.locationObj.lat}, {this.state.locationObj.lon}</p>
    </div>
  );
      }
  }
};
export default App;
