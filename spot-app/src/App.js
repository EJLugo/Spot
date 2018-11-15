import React, { Component } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const URL = 'http://api.petfinder.com/pet.find';
const KEY = process.env.REACT_APP_API_KEY;
const PARAMS = {
  key: KEY,
  format: 'json',
  animal: 'dog',
  location: 'New York City, NY' //only want to show results for NYC since this is going to be local shelter
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breeds: []
    }
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const opts = {
      params: PARAMS,
      adapter: jsonpAdapter,
    };

    try {

    const resp = await axios(URL, opts);
      const data = resp.data;
      const breedList = data.petfinder.breeds.breed;
      const breeds = breedList.map(breed => Object.values(breed)[0]);
      this.setState({ breeds: breeds });
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className="App">
        <h2>Find your new BFF</h2>
        {this.state.breeds.map(breed => (
          <div key={breed}>{breed}</div>
        ))}
      </div>
    );
  }
}

export default App;
