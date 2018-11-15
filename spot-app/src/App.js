import React, { Component } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import PetResults from './Components/PetResults';


const URL = 'http://api.petfinder.com/pet.find';
const KEY = process.env.REACT_APP_API_KEY;
const PARAMS = {
  key: KEY,
  format: 'json',
  animal: 'dog',
  location: '11102' //only want to show results for NYC since this is going to be local shelter

};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
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
      const dogList = data.petfinder.pets.pet;
      console.log('this is dogList', dogList);
      const dogs = dogList.map(dog => {
        const id = dog.id["$t"]
        const photo = dog.media.photos.photo[0]['$t']
        const name = dog.name['$t']
        const breed = dog.breeds.breed['$t']
        const sex = dog.sex['$t']
        const age = dog.age['$t']
          return {
            id: id,
            photo: photo,
            name: name,
            breed: breed,
            sex: sex,
            age: age
          }
      })

      // let value;
      // for (value in dogs){
      //   const dogValues = dogs[value]
      // }
      console.log('this is dogs', dogs)
      this.setState({ dogs: dogs });
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className="App">
        <h2>Find your new BFF</h2>
        <PetResults details={this.state.dogs}/>

        {/* {JSON.stringify(this.state.dogs)} */}
        {/* {this.state.dogs.map(dog, id => (
          <div>{dog.id}</div> */}

        {/* ))} */}
      </div>
    );
  }
}

export default App;
