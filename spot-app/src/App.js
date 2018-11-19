import React, { Component } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import PetResults from './Components/PetResults';
import Footer from './Components/Footer';
import CatList from './Components/CatList';

const URL = 'http://api.petfinder.com/pet.find';
const KEY = process.env.REACT_APP_API_KEY;
const PARAMS = {
  key: KEY,
  format: 'json',
  animal: 'dog',
  location: '11102', //only want to show results for NYC since this is going to be local shelter
  count: 30
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: []
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
      console.log(dogList);
      const dogs = dogList.map(dog => {
        const id = dog.id["$t"]
        const photo = dog.media.photos.photo[0]['$t']
        const name = dog.name['$t']
        const breed = dog.breeds.breed['$t']
        const sex = dog.sex['$t']
        const age = dog.age['$t']
        const description = dog.description['$t']
          return {
            id: id,
            photo: photo,
            name: name,
            breed: breed,
            sex: sex,
            age: age,
            description: description
          }
      })

      this.setState({ dogs: dogs });
    } catch(e) {
      console.log(e);
    }
  }



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Spot</h1>
        <h2 className='tagline'>Find your new Best Furry Friend</h2>
        <PetResults details={this.state.dogs} />
        <Footer />
        <CatList cdetails={this.state.cats} />
      </div>
    );
  }
}
export default App;
